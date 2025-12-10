"use client";

import { useActionState } from "react";
import { sendMail } from "@/app/actions/sendEmail";

// Define the expected shape of the action result
export interface ContactFormState {
  success?: boolean;
  error?: string;
}

export default function Footer() {
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(
    sendMail,
    {}
  );

  return (
    <footer className="mt-24 bg-black text-white py-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE — Branding */}
        <div>
          <h2 className="text-3xl font-bold">Let's Build Something Together</h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Have a project in mind, need a developer, or want to collaborate?
            Fill the form — I’ll reply within 24 hours.
          </p>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <form
          action={formAction}
          className="space-y-5 bg-white/5 p-6 rounded-xl border border-white/10 backdrop-blur-lg"
        >
          {state?.success && (
            <p className="text-green-400 font-medium">
              ✓ Your message has been sent successfully!
            </p>
          )}

          {state?.error && (
            <p className="text-red-400 font-medium">{state.error}</p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your Name"
              className="input input-bordered w-full bg-white/10 border-white/20 text-white"
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full bg-white/10 border-white/20 text-white"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            className="textarea textarea-bordered w-full bg-white/10 border-white/20 text-white"
            required
          />

          <button
            disabled={pending}
            className="btn btn-primary w-full rounded-xl disabled:opacity-50"
          >
            {pending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} • All Rights Reserved.
      </div>
    </footer>
  );
}
