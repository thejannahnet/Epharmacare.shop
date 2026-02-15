import { useState } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import Image from "next/image";
import { HiPaperAirplane, HiCheckCircle, HiExclamationCircle, HiPhone, HiMail, HiLocationMarker } from "react-icons/hi";
import { fadeInUp } from "@/hooks/useScrollAnimation";
import data from "@/data/resume.json";

const contactSchema = z.object({
    fullName: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(5, "Please enter a valid phone number"),
    age: z.string().min(1, "Age is required"),
    dateOfBirth: z.string().optional(),
    country: z.string().min(2, "Country is required"),
    preferredArrival: z.string().min(1, "Preferred arrival date is required"),
    additionalInfo: z.string().optional(),
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const fields: { name: keyof FormData; label: string; type: string; placeholder: string; required: boolean; rows?: number }[] = [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Full Name", required: true },
    { name: "email", label: "Email Address", type: "email", placeholder: "Email Address", required: true },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "Phone Number", required: true },
    { name: "age", label: "Age", type: "number", placeholder: "Age", required: true },
    { name: "dateOfBirth", label: "Date of Birth", type: "date", placeholder: "Date of Birth", required: false },
    { name: "country", label: "Country of Residence", type: "text", placeholder: "Country of Residence", required: true },
    { name: "preferredArrival", label: "Preferred Arrival Date", type: "date", placeholder: "Preferred Arrival Date", required: true },
    { name: "additionalInfo", label: "Special Requirements / Questions", type: "textarea", placeholder: "Any special requirements or questions", required: false, rows: 4 },
];

export default function ContactForm() {
    const [form, setForm] = useState<FormData>({
        fullName: "",
        email: "",
        phone: "",
        age: "",
        dateOfBirth: "",
        country: "",
        preferredArrival: "",
        additionalInfo: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormData]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrors({});

        const result = contactSchema.safeParse(form);
        if (!result.success) {
            const fieldErrors: FormErrors = {};
            result.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof FormData;
                fieldErrors[field] = issue.message;
            });
            setErrors(fieldErrors);
            return;
        }

        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(result.data),
            });
            if (!res.ok) throw new Error("Failed to send");
            setStatus("success");
            setForm({ fullName: "", email: "", phone: "", age: "", dateOfBirth: "", country: "", preferredArrival: "", additionalInfo: "" });
            setTimeout(() => setStatus("idle"), 5000);
        } catch {
            setStatus("error");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
            {/* Contact Info Sidebar */}
            <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-6">
                <div className="glass-card p-6 space-y-6">
                    <h3 className="text-lg font-bold text-dark-900 dark:text-white">Contact Information</h3>

                    <div className="space-y-4">
                        <a href={`tel:${data.contact.phone}`} className="flex items-start gap-3 group">
                            <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                <HiPhone size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-dark-400 dark:text-dark-500">Phone</p>
                                <p className="text-sm font-semibold text-dark-700 dark:text-dark-300">{data.contact.phone}</p>
                            </div>
                        </a>

                        <a href={`mailto:${data.contact.email}`} className="flex items-start gap-3 group">
                            <div className="p-2.5 rounded-xl bg-accent-100 dark:bg-accent-900/30 text-accent-600 group-hover:bg-accent-400 group-hover:text-dark-900 transition-all duration-300">
                                <HiMail size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-dark-400 dark:text-dark-500">Email</p>
                                <p className="text-sm font-semibold text-dark-700 dark:text-dark-300">{data.contact.email}</p>
                            </div>
                        </a>

                        <div className="flex items-start gap-3">
                            <div className="p-2.5 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-500">
                                <HiLocationMarker size={18} />
                            </div>
                            <div>
                                <p className="text-xs font-medium text-dark-400 dark:text-dark-500">Address</p>
                                <p className="text-sm font-semibold text-dark-700 dark:text-dark-300">{data.contact.address}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-dark-200 dark:border-dark-700 flex items-center gap-4">
                        <div className="relative shrink-0">
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-primary-500 to-accent-400 rounded-full" />
                            <Image
                                src="/images/tariq-anwar.jpg"
                                alt="Rana Tariq Anwar"
                                width={56}
                                height={56}
                                className="relative w-14 h-14 rounded-full object-cover object-top"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-bold text-dark-800 dark:text-dark-200">{data.author.name}</p>
                            <p className="text-xs text-dark-500 dark:text-dark-400 mt-0.5 leading-snug">{data.author.role}</p>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Form */}
            <motion.form
                onSubmit={handleSubmit}
                variants={fadeInUp}
                className="lg:col-span-3 glass-card p-6 sm:p-8"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {fields.map((field) => (
                        <div key={field.name} className={field.type === "textarea" ? "sm:col-span-2" : ""}>
                            <label
                                htmlFor={field.name}
                                className="block text-sm font-semibold text-dark-700 dark:text-dark-300 mb-2"
                            >
                                {field.label} {field.required && <span className="text-red-500">*</span>}
                            </label>
                            {field.type === "textarea" ? (
                                <textarea
                                    id={field.name}
                                    name={field.name}
                                    rows={field.rows}
                                    value={form[field.name]}
                                    onChange={handleChange}
                                    className={`input-field resize-none ${errors[field.name] ? "!border-red-500 !ring-red-500/10" : ""}`}
                                    placeholder={field.placeholder}
                                />
                            ) : (
                                <input
                                    id={field.name}
                                    name={field.name}
                                    type={field.type}
                                    value={form[field.name]}
                                    onChange={handleChange}
                                    className={`input-field ${errors[field.name] ? "!border-red-500 !ring-red-500/10" : ""}`}
                                    placeholder={field.placeholder}
                                />
                            )}
                            {errors[field.name] && (
                                <motion.p
                                    initial={{ opacity: 0, y: -5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-1.5 text-sm text-red-500 flex items-center gap-1"
                                >
                                    <HiExclamationCircle className="w-4 h-4" />
                                    {errors[field.name]}
                                </motion.p>
                            )}
                        </div>
                    ))}
                </div>

                <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary w-full mt-8 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {status === "sending" ? (
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            Submitting...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            <HiPaperAirplane className="w-5 h-5 rotate-90" />
                            Submit Application
                        </span>
                    )}
                </motion.button>

                {status === "success" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2"
                    >
                        <HiCheckCircle className="w-5 h-5 text-emerald-500" />
                        <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                            Application submitted! We&apos;ll contact you with next steps.
                        </p>
                    </motion.div>
                )}

                {status === "error" && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 flex items-center gap-2"
                    >
                        <HiExclamationCircle className="w-5 h-5 text-red-500" />
                        <p className="text-sm font-medium text-red-700 dark:text-red-400">
                            Failed to submit. Please try again or contact us directly.
                        </p>
                    </motion.div>
                )}
            </motion.form>
        </div>
    );
}
