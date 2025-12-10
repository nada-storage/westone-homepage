import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { ContactFormData } from '../types';
import { TextInput, TextAreaInput, SelectInput } from './InputFields';

const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        source: '',
        stage: '',
        message: '',
        newsletter: false,
    });

    const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validate = () => {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Please tell us a bit about your project";
        if (!formData.stage) newErrors.stage = "Please select a stage";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));

        // Clear error when user types
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({
            name: '',
            email: '',
            source: '',
            stage: '',
            message: '',
            newsletter: false,
        });

        // Reset success message after a few seconds
        setTimeout(() => setIsSuccess(false), 5000);
    }, [formData]);

    const stages = [
        { value: 'idea', label: 'Just an Idea' },
        { value: 'prototype', label: 'Prototype / MVP' },
        { value: 'scaling', label: 'Scaling Up' },
        { value: 'redesign', label: 'Redesign / Rewrite' },
    ];

    return (
        <motion.div
            className="absolute inset-0 z-40 w-full min-h-screen bg-neutral-950 flex items-center justify-center p-6 md:p-12 lg:p-24 overflow-y-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>

            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10 pt-20 lg:pt-0">

                {/* Left Column: Text Content */}
                <div className="lg:col-span-5 flex flex-col justify-start pt-8">
                    <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight leading-[0.9]">
                        Let's <br />
                        <span className="italic">build.</span>
                    </h1>

                    <div className="space-y-6 text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
                        <p>
                            Not sure where to start? We specialize in turning complex technical challenges into elegant, scalable software.
                        </p>
                        <p>
                            Tell us about your product vision, your timeline, and where you are in the journey. We treat every project with the craftsmanship it deserves.
                        </p>
                    </div>

                    <div className="mt-12 pt-8 border-t border-neutral-800">
                        <p className="text-white font-medium mb-2">Direct Contact</p>
                        <a href="mailto:hello@agency.dev" className="text-neutral-500 hover:text-white transition-colors duration-300">
                            hello@agency.dev
                        </a>
                    </div>
                </div>

                {/* Right Column: Interactive Form */}
                <div className="lg:col-span-7 pb-12 lg:pb-0">
                    <div className="bg-transparent p-0 md:p-4">
                        <form onSubmit={handleSubmit} className="space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <TextInput
                                    id="name"
                                    name="name"
                                    label="Name*"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                    disabled={isSubmitting}
                                />

                                <TextInput
                                    id="email"
                                    name="email"
                                    label="Email*"
                                    type="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                                <TextInput
                                    id="source"
                                    name="source"
                                    label="How did you hear of us?"
                                    placeholder="LinkedIn, Recommendation, etc."
                                    value={formData.source}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />

                                <SelectInput
                                    id="stage"
                                    name="stage"
                                    label="What stage is your project?*"
                                    value={formData.stage}
                                    options={stages}
                                    onChange={handleChange}
                                    error={errors.stage}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <TextAreaInput
                                id="message"
                                name="message"
                                label="Message*"
                                placeholder="Tell us about your project goals, stack preferences, or specific challenges..."
                                value={formData.message}
                                onChange={handleChange}
                                error={errors.message}
                                disabled={isSubmitting}
                                rows={4}
                            />

                            <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            name="newsletter"
                                            checked={formData.newsletter}
                                            onChange={handleChange}
                                            className="peer sr-only"
                                            disabled={isSubmitting}
                                        />
                                        <div className="w-5 h-5 border border-neutral-600 rounded transition-colors peer-checked:bg-white peer-checked:border-white"></div>
                                        <svg className="absolute top-1 left-1 w-3 h-3 text-black opacity-0 peer-checked:opacity-100 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors select-none text-sm">
                                        Keep me updated with tech insights
                                    </span>
                                </label>

                                <button
                                    type="submit"
                                    disabled={isSubmitting || isSuccess}
                                    className={`
                    relative px-10 py-4 rounded-full font-medium text-sm tracking-wide transition-all duration-300
                    ${isSuccess
                                            ? 'bg-green-600 text-white cursor-default'
                                            : 'bg-white text-black hover:bg-neutral-200 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100'}
                  `}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : isSuccess ? (
                                        "Message Sent"
                                    ) : (
                                        "Submit Inquiry"
                                    )}
                                </button>

                            </div>

                            {isSuccess && (
                                <div className="mt-4 text-green-500 text-sm animate-pulse">
                                    Thanks for reaching out! We'll be in touch within 24 hours.
                                </div>
                            )}

                        </form>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactSection;
