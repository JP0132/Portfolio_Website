import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../variants";
import { github, linkedin } from "../assets";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) =>{
    // Regular expression for basic email validation
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("All form fields must be filled in.");
    } else if (!isValidEmail(form.email)) {
      alert("Please enter a valid email address.");
    } else {
      setLoading(true);

      emailjs
        .send(
          "service_pgaesu4",
          "template_60qd87u",
          {
            from_name: form.name,
            to_name: "Jaynik",
            from_email: form.email,
            to_email: "jaynikparsotomo02@gmail.com",
            message: form.message,
          },
          "9MT6sG1fKx3MZ-HNr"
        )
        .then(() => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(
            {
              name: "",
              email: "",
              message: "",
            },
            (error) => {
              setLoading(false);
              console.log(error);
              alert("Something went wrong.");
            }
          );
        });
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] darkblue-cyan-gradient p-8 rounded-2xl min-w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <div className="flex flex-row gap-5">
          <div
            onClick={() => window.open("https://github.com/JP0132", "_blank")}
            className="black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <div
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/jaynik-parsotomo-206562230/",
                "_blank"
              )
            }
            className="blue-cyan-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={linkedin}
              alt="linkedin"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-transparent py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-blue-100 border-b-2  font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-transparent py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none border-blue-100 border-b-2 font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-transparent py-4 px-6 placeholder:text-secondary
                text-white rounded-lg outline-none font-medium border-blue-100 border-b-2"
            />
          </label>
          <button
            type="submit"
            className="bg-[#0e3769] py-3 px-8 outline-none  text-white font-bold
          shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
