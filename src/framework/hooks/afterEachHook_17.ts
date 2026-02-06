import { logger } from "../../support/infra/logger_1";
import { TestContext } from "../state/testContext_13";
import {Page} from '@playwright/test';

export async function afterEachHook(page:Page,testInfo:any){
    const status=testInfo.status;
    const title=testInfo.title;

    logger.info(`Finishing test: ${title} | Status: ${status}`);

    //Example future usage:
    //Attach screenshots.
    //attach logs.
    //collect network traces.


     /*testInfo contains many built-in properties
    Property	Meaning
    testInfo.title	Test name
    testInfo.status	Actual result (passed/failed/skipped)
    testInfo.expectedStatus	What Playwright expected
    testInfo.attach()	Attach files to report */
    if(status!==testInfo.expectedStatus){
        logger.warn(`Test failed. Capturing screenshot for ${title}`);
        const screenshot=await page.screenshot({fullPage:true});

        await testInfo.attach('Failure Screenshot',{
            body:screenshot,
            contentType:'image/png'
        });
    }


    //Clear context after execution
    TestContext.clears(testInfo.expectedStatus);

}