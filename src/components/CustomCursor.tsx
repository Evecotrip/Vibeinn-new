
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handlePointerElements = () => {
      const allClickables = document.querySelectorAll(
        'a, button, [role="button"], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      allClickables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsPointer(true));
        el.addEventListener("mouseleave", () => setIsPointer(false));
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    document.addEventListener("mousemove", updateCursorPosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    handlePointerElements();

    return () => {
      document.removeEventListener("mousemove", updateCursorPosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <>
      <div
        className={cn(
          "fixed pointer-events-none z-[9999] transition-opacity duration-300",
          isHidden && "opacity-0"
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div
          className={cn(
            "relative w-8 h-8 -ml-4 -mt-4 flex items-center justify-center",
            "transition-all duration-200 ease-out"
          )}
        >
          {/* Outer ring */}
          <div
            className={cn(
              "absolute rounded-full border border-primary/80 transition-all duration-200",
              isPointer ? "w-10 h-10 bg-primary/10" : "w-8 h-8",
              isClicking && "scale-90 bg-primary/20"
            )}
          ></div>
          
          {/* Inner dot */}
          <div
            className={cn(
              "absolute bg-primary rounded-full transition-all duration-200",
              isPointer ? "w-1.5 h-1.5" : "w-1 h-1",
              isClicking && "scale-150"
            )}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CustomCursor;
