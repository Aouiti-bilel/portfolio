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
          <h2 className="text-3xl font-bold"> Let&apos;s Build Something Together</h2>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Have a project in mind, need a developer, or want to collaborate?
            Fill the form — I’ll reply within 24 hours.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} • All Rights Reserved.
      </div>
    </footer>
  );
}
