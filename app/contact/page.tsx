"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLanguage } from "@/lib/language-context";
import Nav from "@/components/Nav";
import Foot from "@/components/Foot";

export default function ContactPage() {
	const { t } = useLanguage();

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus("idle");

		const form = e.currentTarget;
		const formData = new FormData(form);

		try {
			const response = await fetch("https://formspree.io/f/mjkbbonz", {
				method: "POST",
				body: formData,
				headers: {
					Accept: "application/json",
				},
			});

			if (response.ok) {
				setSubmitStatus("success");
				form.reset();
			} else {
				setSubmitStatus("error");
			}
		} catch (error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen flex flex-col'>
			{/* Main Content */}

			<div className='max-w-2xl mx-auto'>
				<h1 className='text-3xl md:text-4xl font-bold mb-4 text-balance'>
					{t("contactTitle")}
				</h1>
				<p className='text-lg md:text-base text-muted-foreground mb-8 leading-relaxed'>
					{t("contactSubtitle")}
				</p>

				<form onSubmit={handleSubmit} className='space-y-6'>
					<div className='space-y-2'>
						<Label
							htmlFor='name'
							className='text-[#6d0e2b] font-medium text-base md:text-sm'
						>
							{t("nameLabel")}
						</Label>
						<Input
							id='name'
							name='name'
							type='text'
							placeholder={t("namePlaceholder")}
							value={formData.name}
							onChange={(e) =>
								setFormData({ ...formData, name: e.target.value })
							}
							required
						/>
					</div>

					<div className='space-y-2'>
						<Label
							htmlFor='email'
							className='text-[#6d0e2b] font-medium text-base md:text-sm'
						>
							{t("emailLabel")}
						</Label>
						<Input
							id='email'
							name='email'
							type='email'
							placeholder={t("emailPlaceholder")}
							value={formData.email}
							onChange={(e) =>
								setFormData({ ...formData, email: e.target.value })
							}
							required
						/>
					</div>

					<div className='space-y-2'>
						<Label
							htmlFor='message'
							className='text-[#6d0e2b] font-medium text-base md:text-sm'
						>
							{t("messageLabel")}
						</Label>
						<Textarea
							id='message'
							name='message'
							placeholder={t("messagePlaceholder")}
							rows={6}
							value={formData.message}
							onChange={(e) =>
								setFormData({ ...formData, message: e.target.value })
							}
							required
						/>
					</div>

					{submitStatus === "success" && (
						<div className='p-4 bg-green-50 border border-green-200 rounded-md text-green-800 text-base md:text-sm'>
							{t("successMessage")}
						</div>
					)}

					{submitStatus === "error" && (
						<div className='p-4 bg-red-50 border border-red-200 rounded-md text-red-800 text-base md:text-sm'>
							{t("errorMessage")}
						</div>
					)}

					<Button
						type='submit'
						disabled={isSubmitting}
						className='bg-[#141e55] hover:bg-[#1a2668] text-white w-auto px-8 disabled:opacity-50 text-base md:text-sm'
					>
						{isSubmitting ? t("submitting") : t("submitButton")}
					</Button>
				</form>
			</div>
		</div>
	);
}
