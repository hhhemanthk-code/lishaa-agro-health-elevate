import { motion } from "framer-motion";
import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Lishaa Agro Health Pvt. Ltd.", "Karnataka, India"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91 98765 43210", "+91 80 1234 5678"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@lishaaagrohealth.com", "support@lishaaagrohealth.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 6:00 PM IST"],
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-nature relative overflow-hidden">
        <div className="absolute top-20 right-10 w-64 h-64 organic-shape-1 animate-float" />
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-accent font-medium tracking-wider uppercase mb-4">
              Contact Us
            </p>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Connect &
              <span className="text-gradient-nature"> Grow Together</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Have questions about our products or interested in partnership 
              opportunities? We'd love to hear from you. Reach out and let's 
              start a conversation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                      placeholder="Product Inquiry"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Your Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="rounded-xl border-2 border-border focus:border-primary resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              <div className="grid sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gradient-card rounded-2xl p-6 shadow-soft"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-3xl overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.66483576!2d77.35073!3d12.9539974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699900000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lishaa Agro Health Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Connect Section */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-6">
              Quick Connect Options
            </h2>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto mb-10">
              Choose the most convenient way to reach us based on your inquiry type.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Product Inquiries",
                  email: "products@lishaaagrohealth.com",
                  response: "Within 24 hours",
                },
                {
                  title: "Dealership Applications",
                  email: "partners@lishaaagrohealth.com",
                  response: "Within 48 hours",
                },
                {
                  title: "General Support",
                  email: "support@lishaaagrohealth.com",
                  response: "Within 24 hours",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-cream/5 backdrop-blur-sm border border-cream/10 rounded-2xl p-6 text-center"
                >
                  <h3 className="font-display font-semibold text-cream mb-2">
                    {option.title}
                  </h3>
                  <a
                    href={`mailto:${option.email}`}
                    className="text-accent hover:underline text-sm block mb-2"
                  >
                    {option.email}
                  </a>
                  <p className="text-cream/60 text-xs flex items-center justify-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Response: {option.response}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
