import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehns6us",
        "template_nwnewfz",
        form.current,
        "FKQHO7UKLWs0LZbEl"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          toast.success("Nachricht gesendet!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          toast.error("Nachricht nicht gesendet!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section className=" py-16 section  bg-gray-900" id="kontakt">
      <div className="container mx-auto  ">
        <div className=" flex flex-col lg:flex-row justify-center text-white">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-[40px] pb-3  uppercase text-accent font-medium mb-2 ">
                Sprich mit mir
              </h4>
              <h2 className="text-[35px]  leading-none mb-12 ">
                Ich freue mich auf <br /> ein gutes Gespräch
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileinview={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start   "
          >
            <input
              className="bg-transparent  border-b py-3 outline-none w-full  placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />

            <input
              required
              className="bg-transparent border-b py-3 outline-none w-full a placeholder:text-white focus:border-accent transition-all"
              type="email"
              name="user_email"
              placeholder="Email"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all  mb-12"
              placeholder="Nachricht"
              name="message"
            ></textarea>

            <input
              type="submit"
              className="btn btn-lg text-white"
              placeholder="Nachricht Senden"
              value="Nachricht Senden"
            />

            <ToastContainer
              position="top-right"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss={false}
              draggable={false}
              pauseOnHover
              theme="colored"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
