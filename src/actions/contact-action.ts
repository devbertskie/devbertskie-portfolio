"use server";

import { formValidator } from "@/components/pages/contact/contact-form";
import { sendEmailTo } from "@/lib/send-email";
import { z } from "zod";

export const sendEmail = async (values: z.infer<typeof formValidator>) => {
  try {
    if (!values.email || !values.name || !values.message)
      throw new Error("No Details Found");

    const { email, message, name } = values;
    // send an email

    const { data, error } = await sendEmailTo(email, message, name);

    if (error) {
      throw new Error("Something went wrong sendin the email.");
    }

    return data;
  } catch (error) {
    throw new Error("Something went wrong!");
  }
};
