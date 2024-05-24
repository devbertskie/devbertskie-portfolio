import EmailTemplate from "@/components/pages/contact/email-template";
import { Resend } from "resend";
import { siteConfig } from "./site-config";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmailTo = async (
  email: string,
  message: string,
  name: string,
) => {
  const emailResponse = await resend.emails.send({
    from: "Portfolio <porfolio@myindexrepo.com>",
    to: siteConfig.social.email,
    subject: `${name} send's you an email.`,
    react: EmailTemplate({ name, message }),
  });

  return emailResponse;
};
