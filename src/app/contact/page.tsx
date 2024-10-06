/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters long.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string({
    required_error: "Please select a subject.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters long.",
  }),
})

export default function Contact() {
  const [sending, setSending] = useState(false)
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSending(true)
    try {
      const response = await fetch("https://formspree.io/f/xldreego", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Message sent successfully!",
          duration: 5000,
        })
        form.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast({
        title: "Error",
        description: "Error sending message. Please try again.",
        variant: "destructive",
        duration: 5000,
      })
    } finally {
      setSending(false)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-md mt-10 mx-auto"
    >
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="uppercase font-jura text-center text-2xl mb-10"
      >
        Contact
      </motion.h1>
      <Form {...form}>
        <motion.form 
          onSubmit={form.handleSubmit(onSubmit)} 
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {["name", "email", "subject", "message"].map((fieldName, index) => (
            <motion.div
              key={fieldName}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
            >
              <FormField
                control={form.control}
                name={fieldName as "name" | "email" | "subject" | "message"}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}</FormLabel>
                    <FormControl>
                      {fieldName === "subject" ? (
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="question">Question</SelectItem>
                            <SelectItem value="suggestion">Suggestion</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : fieldName === "message" ? (
                        <Textarea
                          placeholder="Type your message here"
                          className="resize-none"
                          {...field}
                        />
                      ) : (
                        <Input placeholder={fieldName === "name" ? "Your name" : "your@email.com"} {...field} />
                      )}
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <Button type="submit" className="w-full bg-button-primary hover:bg-button-primary/60 text-sm font-medium border border-buttonborder text-black dark:text-white" disabled={sending}>
              {sending ? "Sending..." : "Send message"}
            </Button>
          </motion.div>
        </motion.form>
      </Form>
      <Toaster />
    </motion.div>
  )
}