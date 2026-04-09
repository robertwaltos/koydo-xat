import { describe, it, expect, vi } from "vitest";
import { emitPrismSignal, trackQuestionAttempt } from "@/lib/xat/cortex-signals";

describe("Cortex Signals", () => {
  it("dispatches a custom event on window", () => {
    const spy = vi.fn();
    window.addEventListener("koydo:prism-signal", spy);
    emitPrismSignal({ event: "test", examId: "EXAM038" });
    expect(spy).toHaveBeenCalledTimes(1);
    window.removeEventListener("koydo:prism-signal", spy);
  });
  it("tracks question attempts", () => {
    const spy = vi.fn();
    window.addEventListener("koydo:prism-signal", spy);
    trackQuestionAttempt("EXAM038", "q1", true, 5000);
    expect(spy).toHaveBeenCalledTimes(1);
    const detail = (spy.mock.calls[0][0] as CustomEvent).detail;
    expect(detail.event).toBe("question_attempt");
    window.removeEventListener("koydo:prism-signal", spy);
  });
});
