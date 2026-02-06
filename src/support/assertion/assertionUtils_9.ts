/*
await expect(page.locator('#welcome')).toBeVisible();
await assert.isVisible('#welcome');

second one is better
*/

import { Page,expect,Locator } from "@playwright/test";
import { logger } from "../infra/logger_1";

export class AssertionUtils{

    constructor(private page:Page){}
    //the constructor is equal to the above.
    /*private page: Page;
    constructor(page: Page) {
    this.page = page;
    }
 */

    async isVisible(selector:string){
        logger.info(`Asserting visibility of element: ${selector}`);
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async hasText(selector:string,expectedText:string){
        logger.info(`Asserting text of ${selector} equals "${expectedText}"`);
        await expect(this.page.locator(selector)).toHaveText(expectedText);
    }


    async isEnabled(selector:string){
        logger.info(`Asserting element is enabled: ${selector}`);
        await expect(this.page.locator(selector)).toBeEnabled();
    }

    async urlContains(partial:string):Promise<void>{
        logger.info(`Asserting URL contains: ${partial}`);  
        await expect(this.page).toHaveURL(partial);
    }
}