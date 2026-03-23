import {
  ArrowRight,
  BadgeCheck,
  CircleDollarSign,
  PhoneCall,
  ShieldCheck,
  Users,
} from "lucide-react";
import Navbar from "./components/Navbar";
import ApplicationForm from "./components/ApplicationForm";

const faqItems = [
  {
    question: "How do I apply?",
    answer:
      "Fill out the application form on this page and our team will contact you after review.",
  },
  {
    question: "How long does review take?",
    answer:
      "Review time depends on the completeness of your information and internal verification.",
  },
  {
    question: "Can I ask about installment options?",
    answer:
      "Yes. You can include your preferred payment arrangement in the notes section.",
  },
];

const helpedPeople = [
  {
    name: "Maria, Laguna",
    text: "Needed travel support for a family booking and got a manageable installment arrangement.",
  },
  {
    name: "John, Manila",
    text: "The process was simple and easy to understand from the first inquiry.",
  },
  {
    name: "Anne, Cavite",
    text: "Helpful team, clear communication, and a smooth application process.",
  },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-[#f7faf7]">
      <Navbar />

      <section className="overflow-hidden border-b border-black/5 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.14),_transparent_35%),linear-gradient(180deg,#ffffff_0%,#f7faf7_100%)]">
        <div className="section-shell grid min-h-[calc(100vh-80px)] items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Fast • Trusted • Simple
            </p>

            <h1 className="max-w-2xl text-5xl font-black leading-tight text-black md:text-6xl">
              Modern loan and travel installment support for your next journey.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/70">
              We help customers apply for financing support with a simpler,
              clearer, and more approachable process.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Apply for Loan
                <ArrowRight size={18} />
              </a>

              <a
                href="#about"
                className="rounded-full border border-black/10 bg-white px-6 py-3 font-semibold text-black transition hover:border-emerald-600 hover:text-emerald-700"
              >
                Learn More
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-black/8 bg-white p-4">
                <Users className="mb-3 text-emerald-700" />
                <p className="font-bold text-black">People-first</p>
                <p className="mt-1 text-sm text-black/65">
                  Built for real customer needs.
                </p>
              </div>
              <div className="rounded-2xl border border-black/8 bg-white p-4">
                <ShieldCheck className="mb-3 text-emerald-700" />
                <p className="font-bold text-black">Trust-focused</p>
                <p className="mt-1 text-sm text-black/65">
                  Clean process and clear communication.
                </p>
              </div>
              <div className="rounded-2xl border border-black/8 bg-white p-4">
                <CircleDollarSign className="mb-3 text-emerald-700" />
                <p className="font-bold text-black">Flexible inquiry</p>
                <p className="mt-1 text-sm text-black/65">
                  Start with an easy online application.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
            <div className="rounded-[1.5rem] bg-black p-8 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Why choose us
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                A cleaner, more modern way to begin your application.
              </h2>

              <div className="mt-8 space-y-5">
                <div className="flex gap-4">
                  <BadgeCheck className="mt-1 text-emerald-400" />
                  <div>
                    <p className="font-semibold">Simple online inquiry</p>
                    <p className="text-sm text-white/70">
                      Send your details through our application form.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BadgeCheck className="mt-1 text-emerald-400" />
                  <div>
                    <p className="font-semibold">Human review</p>
                    <p className="text-sm text-white/70">
                      We review submissions and get back to qualified inquiries.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <BadgeCheck className="mt-1 text-emerald-400" />
                  <div>
                    <p className="font-semibold">Customer support</p>
                    <p className="text-sm text-white/70">
                      Reach out to us for questions about your application.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              About Us
            </p>
            <h2 className="mt-3 text-4xl font-black text-black">
              Helping customers move forward with confidence.
            </h2>
            <p className="mt-5 text-base leading-8 text-black/70">
              Our goal is to provide a clear and approachable financing
              application experience for customers who need support for travel
              and related needs.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-black/8 bg-white p-6">
              <p className="text-xl font-bold text-black">Clear process</p>
              <p className="mt-2 text-sm leading-7 text-black/65">
                We keep the application flow simple and easy to understand.
              </p>
            </div>
            <div className="rounded-3xl border border-black/8 bg-white p-6">
              <p className="text-xl font-bold text-black">Responsive team</p>
              <p className="mt-2 text-sm leading-7 text-black/65">
                Our team follows up to help applicants understand the next step.
              </p>
            </div>
            <div className="rounded-3xl border border-black/8 bg-white p-6 sm:col-span-2">
              <p className="text-xl font-bold text-black">Built for trust</p>
              <p className="mt-2 text-sm leading-7 text-black/65">
                This website is designed to feel modern, reliable, and
                straightforward from the first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-black/5 bg-white py-20">
        <div className="section-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Products / Service
          </p>
          <h2 className="mt-3 text-4xl font-black text-black">
            What we offer
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-black/8 p-6">
              <h3 className="text-xl font-bold text-black">
                Loan application intake
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/65">
                Customers can submit their application details online in a
                simple form.
              </p>
            </div>

            <div className="rounded-3xl border border-black/8 p-6">
              <h3 className="text-xl font-bold text-black">
                Travel installment inquiry
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/65">
                Suitable for customers who need more flexible payment options.
              </p>
            </div>

            <div className="rounded-3xl border border-black/8 p-6">
              <h3 className="text-xl font-bold text-black">
                Customer support follow-up
              </h3>
              <p className="mt-3 text-sm leading-7 text-black/65">
                We respond to questions and guide applicants through the next
                steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="helped" className="py-20">
        <div className="section-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            People We Helped
          </p>
          <h2 className="mt-3 text-4xl font-black text-black">
            Stories from people we supported
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {helpedPeople.map((person) => (
              <div
                key={person.name}
                className="rounded-3xl border border-black/8 bg-white p-6 shadow-sm"
              >
                <p className="text-lg font-bold text-black">{person.name}</p>
                <p className="mt-3 text-sm leading-7 text-black/65">
                  {person.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="border-y border-black/5 bg-white py-20">
        <div className="section-shell">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
            FAQ
          </p>
          <h2 className="mt-3 text-4xl font-black text-black">
            Common questions
          </h2>

          <div className="mt-10 space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border border-black/8 p-6"
              >
                <h3 className="text-lg font-bold text-black">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-black/65">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Contact & Application
            </p>
            <h2 className="mt-3 text-4xl font-black text-black">
              Ready to apply?
            </h2>
            <p className="mt-5 text-base leading-8 text-black/70">
              Fill out the form and our team will review your application.
            </p>

            <div
              id="contact"
              className="mt-8 rounded-3xl border border-black/8 bg-white p-6"
            >
              <div className="flex items-center gap-3">
                <PhoneCall className="text-emerald-700" />
                <p className="text-lg font-bold text-black">Contact Us</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-black/65">
                Replace this with your actual contact number, email address, and
                office details.
              </p>
              <p className="mt-2 text-sm text-black/70">
                Email: your@email.com
              </p>
              <p className="mt-1 text-sm text-black/70">
                Phone: +63 9XX XXX XXXX
              </p>
            </div>
          </div>

          <ApplicationForm />
        </div>
      </section>
    </main>
  );
}