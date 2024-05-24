"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formValidator = z.object({
  name: z.string().min(3, { message: "Min of 3 characters" }).trim(),
  email: z.string().email("Must be a valid email").trim().toLowerCase(),
  message: z.string().min(6, { message: "Minimum of 6 characters" }).trim(),
});

export default function ContactForm() {
  const contactForm = useForm<z.infer<typeof formValidator>>({
    resolver: zodResolver(formValidator),
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmitForm = async (values: z.infer<typeof formValidator>) => {
    console.log(values);
  };

  return (
    <Card className="w-[400px] bg-muted/40 p-2 md:w-[500px]">
      <CardHeader className="text-center text-primary">
        <CardTitle>Let&apos;s Connect👋</CardTitle>
        <CardDescription>
          Send me a message so that I will be notified
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...contactForm}>
          <form
            onSubmit={contactForm.handleSubmit(onSubmitForm)}
            className="flex flex-col space-y-4"
          >
            <FormField
              control={contactForm.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <FormLabel
                        htmlFor="name"
                        className="text-muted-foreground"
                      >
                        Name
                      </FormLabel>
                      <Input
                        type="text"
                        id="name"
                        placeholder="johndoe"
                        {...field}
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <FormLabel
                        htmlFor="email"
                        className="text-muted-foreground"
                      >
                        Email
                      </FormLabel>
                      <Input
                        autoComplete="off"
                        id="message"
                        type="email"
                        placeholder="email@example.com"
                        {...field}
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={contactForm.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex flex-col space-y-2">
                      <FormLabel
                        htmlFor="message"
                        className="text-muted-foreground"
                      >
                        Message
                      </FormLabel>
                      <Textarea
                        rows={8}
                        placeholder="Type your message here."
                        id="message"
                        {...field}
                      />
                      <FormMessage />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            <Button>Send</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
