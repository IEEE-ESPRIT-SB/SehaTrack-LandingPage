'use client';
import BlurredShape from "@/public/images/blurred-shape.svg";
import Image from "next/image";
import { useState } from "react";

export default function Cta() {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter a valid email!");
      return;
    }

    // Lancer la logique d'envoi d'email ici, par exemple via une API
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'recipient@example.com', // Remplacez avec l'adresse réelle
          subject: 'New Subscription',
          text: `A user has subscribed with email: ${email}`,
          html: `<p><strong>Email:</strong> ${email}</p><p>They have subscribed to the newsletter.</p>`
        }),
      });

      if (response.ok) {
        alert('Subscription successful!');
        setEmail(''); // Réinitialiser l'email après envoi
      } else {
        alert('There was an issue with your subscription.');
      }
    } catch (err) {
      console.error('Error subscribing:', err);
      alert('Error subscribing. Please try again.');
    }
  };

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.200),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-8 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Get Started Today with SehaTrack
            </h2>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <form onSubmit={handleSubscribe} className="sm:flex items-center gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md text-white bg-gray-900" // Ajout de bg-gray-900
                  required
                />
                <button
                  type="submit"
                  className="btn group mb-4 w-full bg-gradient-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                >
                  <span className="relative inline-flex items-center">
                    Subscribe
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
