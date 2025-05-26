import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validation des données
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Tous les champs obligatoires doivent être remplis" },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["rgclean74@gmail.com"],
      subject: `Nouvelle demande de devis - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #C28638; border-bottom: 2px solid #C28638; padding-bottom: 10px;">
            Nouvelle demande de devis - GR Clean
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Informations du client :</h3>
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #C28638; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message :</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #e8f4f8; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              <strong>GR Clean</strong> - Nettoyage professionnel à Annecy<br>
              Email reçu le ${new Date().toLocaleDateString("fr-FR")} à ${new Date().toLocaleTimeString("fr-FR")}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Email envoyé avec succès", id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi de l'email" },
      { status: 500 }
    );
  }
}
