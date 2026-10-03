import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "dark" | "outline" };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button({ className, variant = "primary", ...props }, ref) {
  const styles = variant === "dark" ? "bg-foreground text-background hover:bg-clay" : variant === "outline" ? "border border-foreground/20 bg-transparent text-foreground hover:border-foreground/60" : "bg-primary text-primary-foreground hover:bg-foreground";
  return <button ref={ref} className={cn("inline-flex min-h-11 items-center justify-center rounded-full px-5 font-mono text-xs uppercase transition-colors", styles, className)} {...props} />;
});