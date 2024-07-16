import React, { useRef, useState } from "react";
import emailjs, { init } from "@emailjs/browser";
import Localisation from "../localisation";

init("");

const ContactForm = () => {
  const form = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!name) {
      formErrors = { ...formErrors, name: "Veuillez entrer votre nom !" };
    }

    if (!email) {
      formErrors = {
        ...formErrors,
        email: "Veuillez entrer votre adresse Email.",
      };
    } else if (!validateEmail(email)) {
      formErrors = { ...formErrors, email: "Revoyez votre adresse email" };
    }
    if (!phone) {
      formErrors = {
        ...formErrors,
        phone: "Veuillez entrer votre numéro de téléphone.",
      };
    } else if (!/^[0-9]{10}$/.test(phone)) {
      formErrors = {
        ...formErrors,
        phone: "Veuillez entrer un numéro de téléphone valide.",
      };
    }

    if (!message) {
      formErrors = { ...formErrors, message: "Ecrivez quelque chose" };
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      try {
        if (form.current) {
          const result = await emailjs.sendForm(
            "service_ID",
            "template_ID",
            form.current
          );
          console.log("Message sent successfully");
          console.log("SUCCESS!", result.text);
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
          setShowSuccessPopup(true);
          setTimeout(() => setShowSuccessPopup(false), 3000);
          form.current?.reset();
        }
      } catch (error) {
        console.error("Email sending failed:", error);
      }
    }
  };

  return (
    <div className="flex flex-col bg-white p-4 md:p-10 m-3 md:m-10 rounded-md">
      <Localisation className={"mb-10 md:mb-20"} />
      <form ref={form} onSubmit={sendEmail} className=" flex flex-col gap-4">
        <div className="flex flex-col md:flex-row md:justify-between md:gap-8 items-start md:items-center w-full">
          <div className="flex flex-col gap-2 md:w-1/2 w-full mb-4">
            <label className="font-semibold">Nom</label>
            <input
              type="text"
              name="name"
              placeholder="Entrez Votre nom"
              className=" focus:outline-none focus:border-b-2 pb-5 border-b md:w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2 md:w-1/2 w-full mb-4">
            <label className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Entrez votre email"
              className="bg-transparent focus:outline-none focus:border-b-2 pb-5 border-b"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-400">{errors.email}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2 md:w-1/2 w-full mb-4">
          <label className="font-semibold">Téléphone</label>
          <input
            type="tel"
            name="phone"
            placeholder="Entrez votre numéro de téléphone"
            className="bg-transparent focus:outline-none focus:border-b-2 pb-5 border-b"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {errors.phone && <span className="text-red-400">{errors.phone}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-semibold">Message</label>
          <textarea
            name="message"
            placeholder="votre message"
            className="placeholder-gray-500 bg-transparent focus:outline-none focus:border-b-2 pb-5 border-b resize-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && (
            <span className="text-red-400">{errors.message}</span>
          )}
        </div>
        <input
          type="submit"
          value="Envoyer"
          className=" md:w-1/4  bg-[#3E6100] text-white font-semibold hover:bg-[#140100] hover:text-[#588b00] py-3 px-5 rounded-lg md:m-auto"
        />
      </form>
      {showSuccessPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <p>Merci pour votre message!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
