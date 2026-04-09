import { describe, it, expect } from "vitest";
import { canAccessQuestion, getRemainingFreeQuestions, isTrialActive } from "@/lib/xat/entitlement";

describe("Entitlement", () => {
  it("allows premium users", () => { expect(canAccessQuestion({ premiumActive: true, dailyQuestionsUsed: 999, dailyQuestionsLimit: 10 })).toBe(true); });
  it("allows free users within limit", () => { expect(canAccessQuestion({ premiumActive: false, dailyQuestionsUsed: 5, dailyQuestionsLimit: 10 })).toBe(true); });
  it("blocks free users past limit", () => { expect(canAccessQuestion({ premiumActive: false, dailyQuestionsUsed: 10, dailyQuestionsLimit: 10 })).toBe(false); });
  it("returns remaining free questions", () => { expect(getRemainingFreeQuestions({ premiumActive: false, dailyQuestionsUsed: 7, dailyQuestionsLimit: 10 })).toBe(3); });
  it("returns Infinity for premium", () => { expect(getRemainingFreeQuestions({ premiumActive: true, dailyQuestionsUsed: 0, dailyQuestionsLimit: 10 })).toBe(Infinity); });
  it("detects active trial", () => { expect(isTrialActive({ premiumActive: false, dailyQuestionsUsed: 0, dailyQuestionsLimit: 10, trialEndsAt: new Date(Date.now()+86400000).toISOString() })).toBe(true); });
  it("detects expired trial", () => { expect(isTrialActive({ premiumActive: false, dailyQuestionsUsed: 0, dailyQuestionsLimit: 10, trialEndsAt: new Date(Date.now()-86400000).toISOString() })).toBe(false); });
});
