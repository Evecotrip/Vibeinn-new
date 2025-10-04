import { cn } from "@/lib/utils";
import React from "react";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  gradient?: string;
};

const FeatureCard = ({
  title,
  description,
  icon,
  className,
  gradient = "bg-gradient-primary",
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full",
        gradient,
        className
      )}
    >
      <div className="flex flex-col gap-4 text-white">
        <div className="bg-white/20 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
