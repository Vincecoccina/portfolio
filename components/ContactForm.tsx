"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    message: "",
  };
  const [statusMessage, setStatusMessage] = useState<string>("");
  const [statusMessageClass, setStatusMessageClass] = useState<string>("");
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.status === 200) {
        setStatusMessage("Votre message a été envoyé avec succès !");
        setStatusMessageClass("bg-green-700");
        resetForm();
      } else if (data.status === 400) {
        setStatusMessage("Tous les champs ne sont pas remplis.");
        setStatusMessageClass("bg-red-500");
      } else {
        setStatusMessage(
          "Une erreur est survenue, impossible d'envoyer votre message"
        );
        setStatusMessageClass("bg-red-500");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email", error);
    }
  };

  return (
    <form
      className="flex justify-center flex-col w-[100%] h-[100%]"
      onSubmit={handleSubmit}
    >
      <h2 className="text-3xl font-bold mb-5 text-white text-center">
        Rentrons en contact
      </h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Votre Nom"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Votre Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-3 py-2 text-sm text-black placeholder-gray-400 bg-white border-0 rounded shadow"
          style={{ resize: "none" }}
        />
      </div>
      <button
        type="submit"
        className="px-7 mb-10 py-3 text-sm font-bold text-white uppercase transition-all rounded-[5px] duration-150 ease-linear bg-orange-500 hover:bg-orange-400"
      >
        Envoyer
      </button>
      {statusMessage && (
        <div
          className={`w-[70%] h-[70px] ${statusMessageClass} rounded-[10px] py-[10px] px-[30px]`}
        >
          <p className="text-white">{statusMessage}</p>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
