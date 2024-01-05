// pages/api/contact.ts
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

type RequestData = {
  name: string;
  email: string;
  message: string;
};

export const POST = async (request: Request) => {
  try {
    // Assurez-vous que le corps de la requête contient les champs nécessaires
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({status: 400, message: "Tous les champs ne sont pas remplis."}, { status: 400 });
    }

    // Envoyer l'email
    const data = await sendEmail({ name, email, message });

    return NextResponse.json(
      { status: 200, message: "E-mail envoyé avec succès !" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {status : 500, message: "Impossible d'envoyer l'e-mail"},
      { status: 500 }
    );
  }
};
