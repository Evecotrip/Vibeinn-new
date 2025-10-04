import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgClass?: string;
  cursorEffect?: boolean;
  darkBgClass?: string;
};

const Section = ({
  id,
  className,
  children,
  bgClass,
  darkBgClass,
  cursorEffect = false,
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn(
        "py-16 md:py-24 px-4 overflow-hidden",
        bgClass,
        darkBgClass,
        cursorEffect && "cursor-effect"
      )}
    >
      <div className={cn("container mx-auto", className)}>{children}</div>
    </section>
  );
};

export default Section;
