import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Grid from "@/assets/grid.svg"
import Link from "next/link"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { href?: string }
>(({ className, href, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border cursor-pointer group hover:border-primary/30 transition w-[360px] sm:w-[443px] relative min-h-[310px] bg-popover text-card-foreground shadow-sm",
      className
    )}
  >
    <Link href={href || '#'} className="block h-full">
      <div {...props} />
    </Link>
  </div>
))
Card.displayName = "Card"

const CardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-center h-[147px] bg-background transition group-hover:border-primary/30 rounded-t-lg border-b", className)}
    {...props}
  />
))
CardImage.displayName = "CardImage"

const CardGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full h-full">
    <div className="absolute top-1/2 z-50 left-1/2 transform text-muted-foreground -translate-x-1/2 flex flex-row gap-1 items-center -translate-y-1/2 text-center">
      {React.Children.toArray(props.children)}
    </div>
    <Image src={Grid} alt="Grid" layout="fill" objectFit="cover" />
  </div>
))
CardGrid.displayName = "CardGrid"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-5 pt-5", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-lg",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm mt-1 text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center absolute bottom-0 p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CardLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
    <div className="flex items-center gap-2 group hover:text-primary2">
      <p className="text-muted-foreground text-xs">View Project</p> 
      <svg className="text-muted-foreground" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.17773 4.41211H10.0111V10.2454" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4.17773 10.2454L10.0111 4.41211" stroke="currentColor" strokeWidth="1.16667" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
))
CardLink.displayName = "CardLink"

export { Card, CardImage, CardGrid, CardTitle, CardDescription, CardFooter, CardLink, CardContent }
