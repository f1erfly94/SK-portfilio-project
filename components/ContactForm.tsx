"use client";

import {type FormEvent, useState} from "react";
import {BsArrowRight, BsCheck2Circle} from "react-icons/bs";

import {profile} from "@/lib/site";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/manqgydl";

type Field = "name" | "email" | "message";
type Errors = Partial<Record<Field, string>>;
type Status = "idle" | "sending" | "sent" | "failed";

const validate = (data: FormData): Errors => {
    const value = (field: Field) => String(data.get(field) ?? "").trim();
    const errors: Errors = {};

    if (!value("name")) errors.name = "Tell me what to call you.";
    if (!/^\S+@\S+\.\S+$/.test(value("email"))) errors.email = "I need a valid email address to reply to.";
    if (value("message").length < 10) errors.message = "A sentence or two about the project, please.";

    return errors;
};

const fieldClass = (invalid: boolean) =>
    `w-full rounded-xl border bg-primary/60 px-4 py-3.5 text-base text-white placeholder:text-white/35 transition-colors duration-300 ${
        invalid ? "border-red-400/70 focus:border-red-400" : "border-line focus:border-accent"
    }`;

/**
 * Three fields, sent with fetch so the visitor stays on the page.
 *
 * The old form wanted a first name, a last name and a phone number that had to
 * match a regex before anyone could say hello, and then posted the whole page
 * away to Formspree's own confirmation screen.
 */
const ContactForm = () => {
    const [errors, setErrors] = useState<Errors>({});
    const [status, setStatus] = useState<Status>("idle");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const data = new FormData(form);

        const found = validate(data);
        setErrors(found);
        const firstInvalid = (Object.keys(found) as Field[])[0];
        if (firstInvalid) {
            (form.elements.namedItem(firstInvalid) as HTMLElement | null)?.focus();
            return;
        }

        setStatus("sending");
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                body: data,
                headers: {Accept: "application/json"},
            });
            if (!response.ok) throw new Error(`Formspree answered ${response.status}`);
            form.reset();
            setStatus("sent");
        } catch {
            setStatus("failed");
        }
    };

    if (status === "sent") {
        return (
            <div role="status" className="card flex flex-col items-start gap-4 p-8 xl:p-10">
                <BsCheck2Circle aria-hidden="true" className="text-4xl text-accent"/>
                <h2 className="h3">Thanks — your message is on its way.</h2>
                <p className="text-white/60">
                    It goes straight to my inbox, and I will reply to the address you gave.
                </p>
                <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="font-mono text-sm text-accent underline-offset-4 hover:underline"
                >
                    Send another one
                </button>
            </div>
        );
    }

    const fields: {name: Field; label: string; type: string; autoComplete: string; placeholder: string}[] = [
        {name: "name", label: "Name", type: "text", autoComplete: "name", placeholder: "Your name"},
        {name: "email", label: "Email", type: "email", autoComplete: "email", placeholder: "you@company.com"},
    ];

    return (
        <form noValidate onSubmit={handleSubmit} className="card flex flex-col gap-6 p-7 xl:p-10">
            <div className="grid gap-6 md:grid-cols-2">
                {fields.map((field) => (
                    <div key={field.name} className="flex flex-col gap-2">
                        <label htmlFor={`contact-${field.name}`} className="label">
                            {field.label}
                        </label>
                        <input
                            id={`contact-${field.name}`}
                            name={field.name}
                            type={field.type}
                            autoComplete={field.autoComplete}
                            placeholder={field.placeholder}
                            aria-invalid={Boolean(errors[field.name])}
                            aria-describedby={errors[field.name] ? `contact-${field.name}-error` : undefined}
                            className={fieldClass(Boolean(errors[field.name]))}
                        />
                        {errors[field.name] && (
                            <p id={`contact-${field.name}-error`} className="text-sm text-red-300">
                                {errors[field.name]}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="contact-message" className="label">
                    Message
                </label>
                <textarea
                    id="contact-message"
                    name="message"
                    rows={7}
                    placeholder="What are you building, and where could I help?"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className={`${fieldClass(Boolean(errors.message))} resize-y`}
                />
                {errors.message && (
                    <p id="contact-message-error" className="text-sm text-red-300">
                        {errors.message}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-accent px-7 py-3.5 font-mono text-sm font-medium text-primary transition-transform duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
                >
                    {status === "sending" ? "Sending…" : "Send message"}
                    <BsArrowRight aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1"/>
                </button>

                <p aria-live="polite" className="text-sm text-red-300">
                    {status === "failed" && (
                        <>
                            That did not go through. Try again, or email{" "}
                            <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
                                {profile.email}
                            </a>
                            .
                        </>
                    )}
                </p>
            </div>
        </form>
    );
};

export default ContactForm;
