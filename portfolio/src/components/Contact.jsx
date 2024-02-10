import React from "react";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { StarWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send(
      'service_xmd0du9',
      'template_y2b09nt',
      {
        name: form.name,
        to_name: 'Ayan',
        email: form.email,
        to_email: 'malikayan827@gmail.com',
        message: form.message,
      },
       
        'f4_ORFlMU7XA4aPD3')
    .then(
      (result) => {
        
        setLoading(false);
        alert("Message sent successfully.I will get back to you soon.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      
      },

      (error) => {
        console.log(error.text);
        setLoading(false);
        alert("Message not sent. Please try again later.");
      }
    );
  };
  return (
    <div
      className="xl-mt-12 xl:flex-row
    flex-col-reverse flex gap-10 overflow-hidden
    "
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75]  p-8
rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col g">
            <span
              className="text-white
          font-medium mb-4"
            >
              Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="
          bg-tertiary
          text-white
          py-4
          rounded-lg

          placeholder:text-secondary
          px-6
          outlined-none
          border-none
          font-medium

          "
            />
          </label>
          <label className="flex flex-col g">
            <span
              className="text-white
          font-medium mb-4"
            >
              Name
            </span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your email"
              className="
          bg-tertiary
          text-white
          py-4
          rounded-lg

          placeholder:text-secondary
          px-6
          outlined-none
          border-none
          font-medium

          "
            />
          </label>
          <label className="flex flex-col g">
            <span
              className="text-white
          font-medium mb-4"
            >
              Message
            </span>
            <textarea
              rows={8}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="
          bg-tertiary
          text-white
          py-4
          rounded-lg

          placeholder:text-secondary
          px-6
          outlined-none
          border-none
          font-medium

          "
            />
          </label>
          <button
            type="submit"
            className="
          bg-tertiary
          w-fit
          shadow-primary
          shadow-md
          text-white
          py-4
          rounded-xl
          px-8
          font-medium
          border-none
          outline-none
         
          "
          >
            {loading ? "sending .." : "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="
        xl:flex-1
        xl:h-auto
        md:h-[550px]
        h-[350px]
        


        "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default StarWrapper(Contact, "contact");
