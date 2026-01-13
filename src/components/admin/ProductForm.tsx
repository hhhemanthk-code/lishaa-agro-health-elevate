import { useState, FormEvent, useEffect } from 'react';
import { supabase, Product } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Upload, X } from 'lucide-react';

interface ProductFormProps {
    product: Product | null;
    onSave: () => void;
    onCancel: () => void;
}

export default function ProductForm({ product, onSave, onCancel }: ProductFormProps) {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        long_description: '',
        price: '',
        category: 'Herbal Care',
        tag: '',
        rating: 4.5,
        reviews: 0,
        benefits: [''],
    });
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const { toast } = useToast();

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                description: product.description,
                long_description: product.long_description,
                price: product.price,
                category: product.category,
                tag: product.tag || '',
                rating: product.rating,
                reviews: product.reviews,
                benefits: product.benefits || [''],
            });
            setImagePreview(product.image_url);
        }
    }, [product]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const uploadImage = async (file: File): Promise<string> => {
        const fileExt = file.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
            .from('product-images')
            .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
            .from('product-images')
            .getPublicUrl(filePath);

        return data.publicUrl;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let imageUrl = product?.image_url || '';

            if (imageFile) {
                imageUrl = await uploadImage(imageFile);
            }

            const productData = {
                ...formData,
                image_url: imageUrl,
                benefits: formData.benefits.filter(b => b.trim() !== ''),
            };

            if (product) {
                const { error } = await supabase
                    .from('products')
                    .update(productData)
                    .eq('id', product.id);

                if (error) throw error;

                toast({
                    title: "Success",
                    description: "Product updated successfully",
                });
            } else {
                const { error } = await supabase
                    .from('products')
                    .insert([productData]);

                if (error) throw error;

                toast({
                    title: "Success",
                    description: "Product added successfully",
                });
            }

            onSave();
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const addBenefit = () => {
        setFormData(prev => ({
            ...prev,
            benefits: [...prev.benefits, '']
        }));
    };

    const removeBenefit = (index: number) => {
        setFormData(prev => ({
            ...prev,
            benefits: prev.benefits.filter((_, i) => i !== index)
        }));
    };

    const updateBenefit = (index: number, value: string) => {
        setFormData(prev => ({
            ...prev,
            benefits: prev.benefits.map((b, i) => i === index ? value : b)
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Image
                </label>
                <div className="flex items-center gap-4">
                    {imagePreview && (
                        <div className="w-24 h-24 rounded-lg overflow-hidden border border-gray-200">
                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                    )}
                    <label className="flex-1 cursor-pointer">
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-emerald-500 transition-colors">
                            <div className="flex items-center justify-center gap-2 text-gray-600">
                                <Upload className="w-5 h-5" />
                                <span className="text-sm">Click to upload image</span>
                            </div>
                        </div>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="hidden"
                        />
                    </label>
                </div>
            </div>

            {/* Basic Info */}
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Product Name *
                    </label>
                    <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Price *
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="₹699"
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                    </label>
                    <select
                        required
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                    >
                        <option value="Herbal Care">Herbal Care</option>
                        <option value="Wellness">Wellness</option>
                        <option value="Lifestyle">Lifestyle</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tag (Optional)
                    </label>
                    <input
                        type="text"
                        placeholder="Best Seller, New Arrival, etc."
                        value={formData.tag}
                        onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Rating
                    </label>
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="5"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: parseFloat(e.target.value) })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                    />
                </div>
            </div>

            {/* Descriptions */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Short Description *
                </label>
                <textarea
                    required
                    rows={2}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Long Description *
                </label>
                <textarea
                    required
                    rows={4}
                    value={formData.long_description}
                    onChange={(e) => setFormData({ ...formData, long_description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none resize-none"
                />
            </div>

            {/* Benefits */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    Benefits
                </label>
                <div className="space-y-2">
                    {formData.benefits.map((benefit, index) => (
                        <div key={index} className="flex gap-2">
                            <input
                                type="text"
                                value={benefit}
                                onChange={(e) => updateBenefit(index, e.target.value)}
                                placeholder="Enter benefit"
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none"
                            />
                            {formData.benefits.length > 1 && (
                                <Button
                                    type="button"
                                    onClick={() => removeBenefit(index)}
                                    variant="outline"
                                    size="sm"
                                    className="text-red-600"
                                >
                                    <X className="w-4 h-4" />
                                </Button>
                            )}
                        </div>
                    ))}
                    <Button
                        type="button"
                        onClick={addBenefit}
                        variant="outline"
                        size="sm"
                        className="w-full"
                    >
                        + Add Benefit
                    </Button>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 pt-4">
                <Button
                    type="button"
                    onClick={onCancel}
                    variant="outline"
                    className="flex-1"
                    disabled={loading}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    className="flex-1 bg-emerald-600 hover:bg-emerald-700"
                    disabled={loading}
                >
                    {loading ? 'Saving...' : (product ? 'Update Product' : 'Add Product')}
                </Button>
            </div>
        </form>
    );
}
