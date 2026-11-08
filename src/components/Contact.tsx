import React, { useState } from "react";
import { CONTACT_DATA, INQUIRY_OPTIONS } from "../data/portfolioData";
import type { ContactFormData } from "../types/portfolio";

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        phone: "",
        inquiryType: "",
        timeline: "",
        details: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleInputChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
        if (errorMessage) {
            setErrorMessage(null);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Basic client validation
        if (!formData.name.trim() || !formData.email.trim() || !formData.details.trim()) {
            setErrorMessage("Please fill in your name, email address, and project details.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setErrorMessage("Please enter a valid email address.");
            return;
        }

        setIsSubmitting(true);
        setErrorMessage(null);

        // Simulate fast async submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 600);
    };

    const handleReset = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            inquiryType: "",
            timeline: "",
            details: "",
        });
        setSubmitted(false);
        setErrorMessage(null);
    };

    return (
        <section id="contact" className="fc-contact-section position-relative py-5">
            <div className="container py-4">
                {/* Section Header */}
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2 className="fc-section-title mb-3">
                        {CONTACT_DATA.title}
                    </h2>
                    <p className="fc-section-subtitle mx-auto">
                        {CONTACT_DATA.subtitle}
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-9 col-12" data-aos="fade-up">
                        <div className="fc-contact-card p-4 p-md-5">
                            {submitted ? (
                                <div
                                    className="fc-contact-success text-center py-5"
                                    role="status"
                                    aria-live="polite"
                                >
                                    <div className="fc-success-icon-wrapper mb-3 mx-auto d-flex align-items-center justify-content-center">
                                        <svg
                                            viewBox="0 0 24 24"
                                            width="40"
                                            height="40"
                                            fill="none"
                                            stroke="#38BDF8"
                                            strokeWidth="2.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            aria-hidden="true"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                    <h3 className="text-white mb-2">
                                        Message Delivered Successfully!
                                    </h3>
                                    <p className="fc-service-desc mb-4 mx-auto" style={{ maxWidth: "520px" }}>
                                        Thank you, <strong className="text-white">{formData.name}</strong>. Francess Cillo will review your inquiry ({formData.inquiryType || "General Web Engineering"}) and respond within 24 business hours.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={handleReset}
                                        className="fc-btn-secondary"
                                    >
                                        Send Another Inquiry
                                    </button>
                                </div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    noValidate
                                    className="fc-contact-form"
                                >
                                    {errorMessage && (
                                        <div
                                            className="fc-form-alert mb-4 p-3 rounded"
                                            role="alert"
                                        >
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    {/* 2-Column Responsive Grid */}
                                    <div className="row g-4 mb-4">
                                        {/* Field 1: Your Name */}
                                        <div className="col-md-6 col-12">
                                            <label
                                                htmlFor="contact-name"
                                                className="fc-form-label mb-2"
                                            >
                                                Your Name <span className="text-cyan">*</span>
                                            </label>
                                            <input
                                                id="contact-name"
                                                name="name"
                                                type="text"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Hiring Manager / Client Name"
                                                className="fc-form-input w-100"
                                            />
                                        </div>

                                        {/* Field 2: Email Address */}
                                        <div className="col-md-6 col-12">
                                            <label
                                                htmlFor="contact-email"
                                                className="fc-form-label mb-2"
                                            >
                                                Email Address <span className="text-cyan">*</span>
                                            </label>
                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="you@company.com"
                                                className="fc-form-input w-100"
                                            />
                                        </div>

                                        {/* Field 3: Phone Number */}
                                        <div className="col-md-6 col-12">
                                            <label
                                                htmlFor="contact-phone"
                                                className="fc-form-label mb-2"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                id="contact-phone"
                                                name="phone"
                                                type="tel"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                placeholder="+63 9XX XXX XXXX"
                                                className="fc-form-input w-100"
                                            />
                                        </div>

                                        {/* Field 4: Inquiry Type / Service of Interest */}
                                        <div className="col-md-6 col-12">
                                            <label
                                                htmlFor="contact-inquiry"
                                                className="fc-form-label mb-2"
                                            >
                                                Inquiry Type / Service of Interest
                                            </label>
                                            <select
                                                id="contact-inquiry"
                                                name="inquiryType"
                                                value={formData.inquiryType}
                                                onChange={handleInputChange}
                                                className="fc-form-input fc-form-select w-100"
                                            >
                                                <option value="" disabled>
                                                    Select an engagement type...
                                                </option>
                                                {INQUIRY_OPTIONS.map((opt) => (
                                                    <option key={opt} value={opt}>
                                                        {opt}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        {/* Field 5: Target Timeline */}
                                        <div className="col-12">
                                            <label
                                                htmlFor="contact-timeline"
                                                className="fc-form-label mb-2"
                                            >
                                                Target Timeline
                                            </label>
                                            <input
                                                id="contact-timeline"
                                                name="timeline"
                                                type="text"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Immediate Hire / 2–4 Weeks"
                                                className="fc-form-input w-100"
                                            />
                                        </div>

                                        {/* Field 6: Project or Role Details */}
                                        <div className="col-12">
                                            <label
                                                htmlFor="contact-details"
                                                className="fc-form-label mb-2"
                                            >
                                                Project or Role Details <span className="text-cyan">*</span>
                                            </label>
                                            <textarea
                                                id="contact-details"
                                                name="details"
                                                required
                                                rows={5}
                                                value={formData.details}
                                                onChange={handleInputChange}
                                                placeholder="Tell me about your team, project scope, Figma designs, or technical requirements..."
                                                className="fc-form-input fc-form-textarea w-100"
                                            ></textarea>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="d-flex justify-content-end">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="fc-btn-primary fc-btn-submit d-inline-flex align-items-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <span className="fc-spinner"></span>
                                                    <span>Transmitting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <svg
                                                        viewBox="0 0 24 24"
                                                        width="18"
                                                        height="18"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        aria-hidden="true"
                                                    >
                                                        <line x1="22" y1="2" x2="11" y2="13" />
                                                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                                    </svg>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
