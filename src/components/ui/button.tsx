import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--elegant-purple))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "btn-primary text-white font-medium shadow-lg hover:shadow-xl transform hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl transform hover:scale-105",
        outline:
          "glass border border-[hsl(var(--elegant-purple))]/20 text-[hsl(var(--elegant-purple))] hover:bg-[hsl(var(--elegant-purple))]/5 elegant-hover",
        secondary:
          "glass-elevated text-foreground elegant-hover border border-border/50",
        ghost: "hover:glass hover:text-[hsl(var(--elegant-purple))] elegant-hover",
        link: "text-[hsl(var(--elegant-purple))] underline-offset-4 hover:underline hover:text-[hsl(var(--elegant-blue))] transition-colors",
        luxury: "glass-luxury text-foreground elegant-hover border border-[hsl(var(--elegant-purple))]/30 font-display font-semibold",
        premium: "bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] text-white font-display font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 hover:from-[hsl(var(--elegant-blue))] hover:to-[hsl(var(--elegant-purple))]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-lg px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg font-display",
        xl: "h-16 rounded-2xl px-10 text-xl font-display",
        icon: "h-12 w-12 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
