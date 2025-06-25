import { useState } from "react";

export const useSurveyTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "previous">(
    "next"
  );

  const handleTransition = (
    direction: "next" | "previous",
    callback: () => void
  ) => {
    setSlideDirection(direction);
    setIsTransitioning(true);

    setTimeout(() => {
      callback();
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  return {
    isTransitioning,
    slideDirection,
    handleTransition,
  };
};
