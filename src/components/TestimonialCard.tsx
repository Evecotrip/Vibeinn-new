
import { cn } from "@/lib/utils";
import React from "react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
  className?: string;
};

const TestimonialCard = ({
  quote,
  author,
  role,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100",
        className
      )}
    >
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 italic">"{quote}"</p>
        <div className="mt-2">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
