import type { UserEntitlement } from "./types";

export function canAccessQuestion(e: UserEntitlement): boolean {
  if (e.premiumActive) return true;
  return e.dailyQuestionsUsed < e.dailyQuestionsLimit;
}

export function getRemainingFreeQuestions(e: UserEntitlement): number {
  if (e.premiumActive) return Infinity;
  return Math.max(0, e.dailyQuestionsLimit - e.dailyQuestionsUsed);
}

export function isTrialActive(e: UserEntitlement): boolean {
  if (!e.trialEndsAt) return false;
  return new Date(e.trialEndsAt) > new Date();
}
