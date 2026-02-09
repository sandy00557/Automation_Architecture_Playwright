import {Page,Locator} from '@playwright/test';
import { logger } from '../../support/infra/logger_1';


export class BasePage{
    protected page:Page;

    constructor(page:Page){
        this.page=page;
    }



    /*Why we need to make a centralized method to access each locator?
    here we have only click,type,gettext. But what if in future we have 30 methods and make a change like adding timeout as extra parameter.
    At that time we can make a change only in getLocator instead of every methods.
    protected getLocator(selector: string): Locator {
    return this.page.locator(selector, { timeout: 10000 });
    }
 */
    protected getLocator(selector: string): Locator {
        return this.page.locator(selector);
    }
    /*Why the method should be protected?
    Because this method is meant to be used by:
    ✔ BasePage
    ✔ Child Page classes (LoginPage, ProfilePage, etc.) Who inherits base page are child pages.

    But NOT by:
    ❌ Test files
    ❌ Domain layer
    ❌ External utilities */

    async click(selector:string):Promise<void>{
        logger.info(`Clicking element: ${selector}`);
        await this.getLocator(selector).click();
    }


    async type(selector:string,text:string):Promise<void>{
        logger.info(`Typing into ${selector}: ${text}`);
        await this.getLocator(selector).fill(text);
    }

    async clickAndType(selector:string,text:string):Promise<void>{
        logger.info(`Clicking and typing into ${selector}: ${text}`);
        await this.getLocator(selector).click();
        await this.getLocator(selector).fill(text);
    }

    async getText(selector:string):Promise<string>{
        logger.info(`Getting text from ${selector}`);
        return await this.getLocator(selector).innerText();
    }
}

