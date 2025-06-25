/* eslint-disable @typescript-eslint/no-explicit-any */
import { Question } from "@/components/data/surveyQuestions";

export const useSurveyValidation = () => {
  const canGoNext = (question: Question, answer: any): boolean => {
    // If question is not required, allow skipping
    if (!question.required) return true;

    if (!answer) return false;

    switch (question.component) {
      case "text":
      case "number":
      case "textarea":
        return typeof answer === "string" && answer.trim().length > 0;
      case "checkbox":
        return typeof answer === "boolean";
      case "multiple":
        return Array.isArray(answer) && answer.length > 0;
      case "dropdown":
      case "radio":
        return typeof answer === "string" && answer.length > 0;
      case "slider":
      case "satisfaction":
        return typeof answer === "number" && answer > 0;
      case "date":
        return answer instanceof Date;
      default:
        return false;
    }
  };

  return { canGoNext };
};
