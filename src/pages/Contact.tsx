import { motion } from "framer-motion";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  Globe,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Received 🌿",
      description: "Thank you for contacting Lishaa Agro Health. We will get back to you shortly.",
      duration: 5000,
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Head Office",
      details: [
        "LISHAA AGRO HEALTH",
        "SUDHARMA #1652, 'C' Block",
        "J.H. Patel Badavane, Davanagere-577004"
      ]
    },
    {
      icon: Phone,
      title: "Direct Line",
      details: ["+91 87622 21973"],
      sub: "Proprietor: MANJUNATH N.S."
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["lishaaagrohealth@gmail.com"],
      sub: "24/7 Online Support"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#F9FAF9] selection:bg-emerald-500 selection:text-white pb-20">

        {/* Simple & Clean Hero */}
        <section className="relative h-[60vh] flex items-center justify-center bg-[#0d2e20] overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 opacity-30 mix-blend-overlay">
            <img
              src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop"
              alt="Contact Support Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          {/* Animated Background Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -right-[20%] w-[800px] h-[800px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-[20%] -left-[20%] w-[600px] h-[600px] bg-lime-400/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block py-1 px-3 rounded-full bg-white/10 text-emerald-300 text-sm font-bold tracking-widest uppercase mb-4 border border-white/5 backdrop-blur-md"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Let's Start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-lime-300">
                Conversation
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/70 text-lg md:text-xl font-light"
            >
              Have a question about our herbal products or research? We're here to help.
            </motion.p>
          </div>
        </section>

        {/* Main Content Card */}
        <section className="container mx-auto px-4 lg:px-8 -mt-20 relative z-20">
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Contact Info Column (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              {contactInfo.map((info, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-emerald-900/5 group"
                >
                  <div className="w-14 h-14 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-500 transition-colors duration-500">
                    <info.icon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <div className="space-y-1">
                    {info.details.map((line, idx) => (
                      <p key={idx} className="text-gray-600 font-medium">{line}</p>
                    ))}
                    {info.sub && <p className="text-emerald-600 text-sm font-semibold mt-2 pt-2 border-t border-emerald-100">{info.sub}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Form & Map Column (Right - Wide) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Form Card */}
              <Card className="bg-white border-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-50/50 to-transparent rounded-bl-full -mr-10 -mt-10 pointer-events-none" />

                <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <MessageSquare className="h-8 w-8 text-emerald-500" />
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6 relative z-10">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                    <Input required placeholder="John Doe" className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-emerald-500/50 transition-all font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                    <Input required type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-emerald-500/50 transition-all font-medium" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Subject</label>
                    <Input placeholder="Inquiry about Herbal Products..." className="h-14 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-emerald-500/50 transition-all font-medium" />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Message</label>
                    <Textarea required placeholder="How can we help you today?" className="min-h-[150px] rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-emerald-500/50 transition-all font-medium resize-none p-4" />
                  </div>

                  <div className="md:col-span-2 pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 bg-[#0d2e20] hover:bg-emerald-800 text-white rounded-xl text-lg font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.01]"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </div>
                </form>
              </Card>

              {/* Map Card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.4 }}
                className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white h-[400px] relative group"
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15448.241584284157!2d75.9149026!3d14.4682352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbba96c14c5c249%3A0x6a07604f3f009581!2sJ.H.Patel%20Badavane%2C%20Davanagere%2C%20Karnataka%20577004!5e0!3m2!1sen!2sin!4v1709400000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(20%) contrast(1.2) opacity(0.9)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700"
                ></iframe>

                <div className="absolute bottom-6 right-6 z-20">
                  <a
                    href="https://maps.google.com/?q=J.H.+Patel+Badavane,+Davanagere,+Karnataka+577004"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-white text-black hover:bg-emerald-500 hover:text-white shadow-xl rounded-full px-6">
                      <Globe className="mr-2 h-4 w-4" />
                      Open Maps
                    </Button>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;