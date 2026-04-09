export const PRICING = {
  free: { name: "Free", price: 0, currency: "INR", interval: null, features: ["10 questions / day","Basic analytics","All sections"] },
  premium: { name: "Premium", price: 249, currency: "INR", interval: "month" as const, features: ["Unlimited questions","AI-powered study paths","Mock tests","Offline mode","Priority support"] },
} as const;

export type PricingTier = keyof typeof PRICING;
