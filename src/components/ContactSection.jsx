import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

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
        {
          user_name: name,
          user_email: email,
          message: message,
        },
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
      className="scroll-mt-24 bg-[#0d0a1c] text-[#c3cad9] px-6 pt-16 pb-32 flex flex-col items-center justify-center"
    >
      {/* Contact Form */}
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

      {/* Footer Socials */}
      <div className="mt-12 text-center">
        <p className="text-white mb-4 font-semibold text-lg">Connect with me</p>
        <div className="flex justify-center space-x-6 text-2xl text-[#5d88f7]">
          <a
            href="https://github.com/aabhi20"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#93e0f8] transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-mishra-mus/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#93e0f8] transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/_.abhay._.mishra._/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#93e0f8] transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
