export const TIMEOUTS={
    SHORT:3000,
    MEDIUM:7000,
    LONG:30000,
}


/*Why we need timeouts?
“Playwright provides default timeouts, but we define framework-level timeout constants to achieve consistency, maintainability, and environment control across large test suites.”

🧠 Why MNC Frameworks Use Custom TIMEOUTS
1️⃣ Centralized Control

Without constants:

await locator.waitFor({ timeout: 5000 });
await page.waitForLoadState({ timeout: 8000 });
await expect(locator).toBeVisible({ timeout: 6000 });


Hard to tune.

With constants:

TIMEOUTS.SHORT
TIMEOUTS.MEDIUM
TIMEOUTS.LONG


Change in one file affects entire suite. */