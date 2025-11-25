import { supabase } from "@/integrations/supabase/client";

export interface ContactFormPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitNewsletterSubscription(email: string, prenom: string) {
  const { error } = await supabase.from("abonnement_fiches").insert({
    email,
    prenom,
  });

  if (error) {
    throw new Error(error.message);
  }
}

export async function submitContactMessage(payload: ContactFormPayload) {
  const content = `Sujet: ${payload.subject}\nDe: ${payload.name} <${payload.email}>\n\n${payload.message}`;

  const { error } = await supabase.from("comments").insert({
    content,
    date: new Date().toISOString(),
    post_id: "contact",
    user_id: payload.email,
  });

  if (error) {
    throw new Error(error.message);
  }
}
