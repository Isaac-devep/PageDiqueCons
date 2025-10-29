import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00ACBD] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 btn-animate",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#00ACBD] to-[#008BBE] text-white shadow-xl shadow-[#00ACBD]/40 hover:shadow-2xl hover:shadow-[#00ACBD]/50 hover:-translate-y-1 active:translate-y-0",
        red:
          "bg-gradient-to-r from-[#ED1844] to-[#c41038] text-white shadow-xl shadow-[#ED1844]/40 hover:shadow-2xl hover:shadow-[#ED1844]/50 hover:-translate-y-1 active:translate-y-0",
        blue:
          "bg-gradient-to-r from-[#0077BE] to-[#008BBE] text-white shadow-xl shadow-[#0077BE]/40 hover:shadow-2xl hover:shadow-[#0077BE]/50 hover:-translate-y-1 active:translate-y-0",
        outline:
          "border-2 border-[#00ACBD] bg-white shadow-md hover:bg-[#00ACBD]/5 hover:border-[#008BBE] text-[#0077BE] font-semibold",
        ghost: "hover:bg-[#00ACBD]/10 hover:text-[#0077BE] text-neutral-700",
        link: "text-[#00ACBD] underline-offset-4 hover:underline hover:text-[#0077BE]",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 rounded-lg px-5 text-xs",
        lg: "h-14 rounded-xl px-10 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
