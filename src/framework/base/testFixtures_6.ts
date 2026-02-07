import { logger } from "../../support/infra/logger_1";
import {test as base} from '@playwright/test';
import { beforeEachHook } from "../hooks/beforeEachHook_16";
import { afterEachHook } from "../hooks/afterEachHook_17";
import { LoginPage } from "../../ui/web/auth/LoginPage_3";
import { AuthFlows } from "../../domain/authFlows_4";
import { AssertionUtils } from "../../support/assertion/assertionUtils_9";
type AppFixtures={
  loginPage:LoginPage;
  authFlows:AuthFlows;
  assert:AssertionUtils;
}

//In a test we will add additional fixtures. For that we will create the test as base object and we will extend it.
export const testFixture= base.extend<AppFixtures>({
    // pagetotest:async({page},use)=>{ pagetotest is the fixture name
    page:async({page},use,testInfo)=>{
        await beforeEachHook(testInfo);

        logger.info("Navigating to application");
        await page.goto('/');

        await use(page);//use is the function Playwright provides inside a fixture. It hands over the prepared resource to the test, pauses the fixture until the test finishes, and then continues execution for cleanup.use is the keyword that tells playwright to start the test created.

        await afterEachHook(page,testInfo);

        logger.info("Test finished, fixture teardown");
    },



    //here the loginPage,authFlows and assert contains all the interlinkings needed for that page.
    //We can call these inside tests so we don't want to create objects direclty in test.
    /*test('Standard login', async ({ authFlows, assert }) => {
      await authFlows.loginAsStandardUser();
      await assert.urlContains('dashboard');
    });

    You requested authFlows and assert.
    Playwright now figures out dependencies automatically.
    
    
    Because of this we don't want to write like below in test:
    test('Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const authFlows = new AuthFlows(loginPage);
    const assert = new AssertionUtils(page);

    await authFlows.loginAsStandardUser();
    await assert.urlContains('dashboard');
    });
*/
    loginPage:async({page},use)=>{
      await use(new LoginPage(page));
    },

    authFlows:async({loginPage},use)=>{
      await use(new AuthFlows(loginPage));
    },

    assert:async({page},use)=>{
      await use(new AssertionUtils(page));
    }

});

export {expect} from '@playwright/test'; //we already exported custom test so we are only exporting expect here.

/*
import { testFixture as test, expect } from '../fixtures/testFixture';

test('Example test', async ({ pagetotest }) => {
  console.log("Test: Got page");
});

*/


/*
Flow of the code:
Step 1: Test Starts with the test file. In the test file it'll check for any fixture dependencies. 
Step 2: there is a fixture dependency here called "pagetotest"(but recommended to use page).So it is indicating that we should use a fixture that is named as pagetotest.
Step 3: In the fixture we will create a page using playwright and add all the fixtures needed. Here we have add the page url. So we dont want to write the page url in every page.
Step 4: If we type a keyword keyword "use" in the fixtures means we are telling after this step we should execute the test file.
for eg:
await page.goto("/");
await use(page);
logger.info("Test finished, fixture teardown");
first we will open the url. then there is "use" so go to test with this page.
After completing then we should again come to fixtures and execute the next line "logger.info"
*/