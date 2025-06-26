// src/components/ContactSection.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Service ID:", import.meta.env.VITE_EMAILJS_SERVICE_ID);
    console.log("Template ID:", import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
    console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

    const name = formRef.current.user_name.value.trim();
    const email = formRef.current.user_email.value.trim();
    const message = formRef.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong. Please try again.");
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 min-h-screen bg-[#0d0a1c] text-[#c3cad9] px-6 pb-32 flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl p-8 md:p-12 rounded-2xl border border-[#1f2a45] bg-[#10152b]/80 backdrop-blur-md shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Get in Touch
        </h2>
        <p className="text-slate-400 mb-8 text-lg">
          Feel free to drop me a message! I’ll try to respond as soon as I can.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full bg-[#0e1325] border border-[#1f2a45] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5d88f7]"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full bg-[#0e1325] border border-[#1f2a45] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5d88f7]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            className="w-full bg-[#0e1325] border border-[#1f2a45] rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#5d88f7]"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-[#5d88f7] hover:bg-[#3e61c4] text-white font-semibold rounded-lg transition duration-300"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
        <ToastContainer />
      </motion.div>
    </section>
  );
};

export default ContactSection;
