"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export default function ContactMePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s43utjd", // Replace with your EmailJS Service ID
        "template_k5rn6u9", // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "2km08v-GdiDfXHcmV" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          toast({
            title: "Message Sent!",
            description: "Your message has been successfully sent. I'll get back to you soon.",
          });
          setIsSubmitted(true); // Hide the form and show the thank-you message
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast({
            title: "Error",
            description: "There was an issue sending your message. Please try again.",
          });
        }
      );
  };

  return (
    <div className="gradient flex justify-center items-center h-screen bg-gray-100">
      <Card className="w-full max-w-md shadow-lg">
        {isSubmitted ? (
          <CardContent>
            <p className="text-center text-xl font-semibold text-gray-800">
              Thank you for getting in touch!
            </p>
            <p className="text-center text-gray-600 mt-2">
              I appreciate your message and will get back to you shortly.
            </p>
          </CardContent>
        ) : (
          <>
            <CardHeader>
              <CardTitle className="text-center">Contact Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center mb-4 text-gray-600">
                Feel free to reach out if you&#39;d like to get in touch. Whether it&#39;s a question, collaboration, or feedback,
                I&#39;d love to hear from you. Just fill out the form below!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
}
