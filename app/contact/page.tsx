"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mjkbbonz", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setSubmitStatus("success")
        form.reset()
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-foreground hover:text-[#6d0e2b] transition-colors">
              Giacomo Sepe
            </Link>
            <div className="flex items-center gap-6">
              <Link href="/contact" className="text-sm text-primary">
                Chat
              </Link>
              <a
                href="https://giacomosepe.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-[#6d0e2b] hover:font-bold transition-all"
              >
                Substack
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-balance">Easiest way to reach me</h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Happy to talk about leadership, software and the transformations that make companies more valuable.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-[#6d0e2b] font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#6d0e2b] font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-[#6d0e2b] font-medium">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-800">
                Your message successfully landed in my inbox. I will be in touch within a few hours.
              </div>
            )}

            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-800">
                Something went wrong. Please try again or email me directly.
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#141e55] hover:bg-[#1a2668] text-white w-auto px-8 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send your note to Giacomo"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
