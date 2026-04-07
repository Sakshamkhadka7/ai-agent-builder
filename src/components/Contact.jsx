import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simulate sending message
    toast.success("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white px-6 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        <div className="bg-gray-900 p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6">Get in Touch</h2>
          <p className="text-gray-300 mb-6">
            Have questions or want to collaborate? Fill out the form below and we’ll get back to you as soon as possible.
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-400 mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:outline-none resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

     
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6">Contact Info</h2>
          <div className="space-y-4 text-gray-300">
            <p><b>Email :</b> sakshamcode12@gmail.com</p>
            <p><b>Phone :</b> 9807123818</p>
            <p><b>Address : </b>balkumari,kathmandu </p>
          </div>

          <h3 className="text-xl font-semibold text-indigo-400 mt-8 mb-4">Follow Us</h3>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-indigo-500 transition">GitHub</a>
          </div>

          <div className="mt-12 text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AI Agent Builder. All rights reserved.
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </section>
  );
};

export default Contact;