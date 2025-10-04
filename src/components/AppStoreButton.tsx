import React from "react";
import { Button } from "@/components/ui/button";
import { AppleIcon, PlayIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AppStoreButtonProps = {
  type: "apple" | "google";
  className?: string;
};

const AppStoreButton = ({ type, className }: AppStoreButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "flex items-center gap-2 rounded-xl px-4 py-3 border-gray-200 bg-white backdrop-blur-md shadow-sm hover:bg-gray-50 transition-all group h-auto",
        className
      )}
    >
      {type === "apple" ? (
        <AppleIcon className="h-6 w-6 text-black group-hover:scale-110 transition-transform" />
      ) : (
        <PlayIcon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
      )}
      <div className="flex flex-col items-start">
        <span className="text-xs font-normal text-gray-600">
          {type === "apple" ? "Download on the" : "GET IT ON"}
        </span>
        <span className="text-sm font-semibold text-black">
          {type === "apple" ? "App Store" : "Google Play"}
        </span>
      </div>
    </Button>
  );
};

export default AppStoreButton;
