// import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


//here we are aliasing testFixture as test
import { testFixture as test,expect } from "../../framework/base/testFixtures_6";
import { TAGS } from "../../framework/constants/testTags_7";
import { TIMEOUTS } from "../../framework/constants/timeouts_8";

test.describe('Authentication - Login',()=>{
  test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.AUTH} Admin user login`,async({authFlows,assert})=>{
    test.setTimeout(TIMEOUTS.MEDIUM);//The whole test should be completed within that timelimit or else it will show timelimit exceeded.
    await authFlows.loginAsAdmin();
    await assert.urlContains('https://business-iam.sit.gcash.com/admin/master/console/');

  })


  test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} Web-015`,async({authFlows,assert})=>{
    test.setTimeout(TIMEOUTS.LONG);
    await authFlows.loginAsAdmin();
  })
})