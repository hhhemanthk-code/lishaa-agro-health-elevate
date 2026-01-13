import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables. Please check your .env.local file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Product type definition
export interface Product {
    id: number;
    name: string;
    description: string;
    long_description: string;
    price: string;
    image_url: string;
    rating: number;
    reviews: number;
    tag: string;
    category: string;
    benefits: string[];
    created_at?: string;
    updated_at?: string;
}
