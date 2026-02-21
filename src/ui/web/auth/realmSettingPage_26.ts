// import { Page } from "@playwright/test";
// import { BasePage } from "../../../framework/base/basePage_2";
// import { logger } from "../../../support/infra/logger_1";

// export class RealmSettingsPage extends BasePage{
    
//     constructor(page:Page){
//         super(page);
//     }

//     //page.getByRole('link', { name: 'Realm settings' })
//     private realmSettingsPage='role=link[name="Realm settings"]';

//     /*name
//     ❌ page.getByText('Action', { exact: true })
//     Not fit → Your framework uses string selectors only, not Playwright helper methods.
//     ❌ page.getByText('Action')
//     Not fit →
//     Method-based (not string)
//     Partial match → can match multiple elements
//     ⚠️ page.locator('button:has-text("Action")')
//     Weak →
//     Tag-dependent (button)
//     Partial match
//     Breaks if tag changes
//     ⚠️ page.locator(':text-is("Action")')
//     Better but not best →
//     Text-dependent
//     Breaks if UI copy changes
//     ❌ page.locator('#pf-dropdown-toggle-id-99')
//     Not fit →
//     Dynamic/generated ID
//     Changes across sessions
//     Very brittle
//     ❌ page.locator('#pf-dropdown-toggle-id-99:visible')
//     Still not fit →
//     Same dynamic ID problem
//     :visible does not improve stability */
//     //page.locator(':text-is("Action")')
//     private actionButton=':text-is("Action")';



//     //page.getByRole('menuitem', { name: /Partial export/i })
//     private partialExportOption='role=menuitem[name="Partial export"]';

//     //page.locator("label[for='include-groups-and-roles-check'] span[class='pf-c-switch__toggle']")
//     private includeGroupsToggle='label[for="include-groups-and-roles-check"] span.pf-c-switch__toggle';

//     //page.getByRole('button', { name: /Export/i })
//     private exportButton='role=button[name="Export"]';

//     async clickRealmSettingsPage():Promise<void>{
//         await this.click(this.realmSettingsPage);
//         logger.info('Clicked on Realm Settings page link');
//     }


//     async clickActionButton():Promise<void>{
//         await this.click(this.actionButton);
//         logger.info('Clicked on Action button');
//     }


//     async clickPartialExportOption():Promise<void>{ 
//         await this.click(this.partialExportOption);
//         logger.info('Clicked on Partial Export option');    
//     }

//     async toggleIncludeGroups():Promise<void>{
//         await this.click(this.includeGroupsToggle);
//         logger.info('Toggled Include Groups and Roles switch');
//     }

//     async clickExportButton():Promise<void>{
//         await this.click(this.exportButton);
//         logger.info('Clicked on Export button');
//     }


// }




//Download updated code from here 
import { Page } from "@playwright/test";
import { BasePage } from "../../../framework/base/basePage_2";
import { logger } from "../../../support/infra/logger_1";
import { DownloadUtil } from "../../../support/utils/downloadUtil";
import path from "path";

export class RealmSettingsPage extends BasePage{
    
    constructor(page:Page){
        super(page);
    }

    //page.getByRole('link', { name: 'Realm settings' })
    private realmSettingsPage='role=link[name="Realm settings"]';

    /*name
    ❌ page.getByText('Action', { exact: true })
    Not fit → Your framework uses string selectors only, not Playwright helper methods.
    ❌ page.getByText('Action')
    Not fit →
    Method-based (not string)
    Partial match → can match multiple elements
    ⚠️ page.locator('button:has-text("Action")')
    Weak →
    Tag-dependent (button)
    Partial match
    Breaks if tag changes
    ⚠️ page.locator(':text-is("Action")')
    Better but not best →
    Text-dependent
    Breaks if UI copy changes
    ❌ page.locator('#pf-dropdown-toggle-id-99')
    Not fit →
    Dynamic/generated ID
    Changes across sessions
    Very brittle
    ❌ page.locator('#pf-dropdown-toggle-id-99:visible')
    Still not fit →
    Same dynamic ID problem
    :visible does not improve stability */
    //page.locator(':text-is("Action")')
    private actionButton=':text-is("Action")';



    //page.getByRole('menuitem', { name: /Partial export/i })
    private partialExportOption='role=menuitem[name="Partial export"]';

    //page.locator("label[for='include-groups-and-roles-check'] span[class='pf-c-switch__toggle']")
    private includeGroupsToggle='label[for="include-groups-and-roles-check"] span.pf-c-switch__toggle';

    //page.getByRole('button', { name: /Export/i })
    private exportButton='role=button[name="Export"]';

    async clickRealmSettingsPage():Promise<void>{
        await this.click(this.realmSettingsPage);
        logger.info('Clicked on Realm Settings page link');
    }


    async clickActionButton():Promise<void>{
        await this.click(this.actionButton);
        logger.info('Clicked on Action button');
    }


    async clickPartialExportOption():Promise<void>{ 
        await this.click(this.partialExportOption);
        logger.info('Clicked on Partial Export option');    
    }

    async toggleIncludeGroups():Promise<void>{
        await this.click(this.includeGroupsToggle);
        logger.info('Toggled Include Groups and Roles switch');
    }

    async clickExportButton():Promise<void>{
        await this.click(this.exportButton);
        logger.info('Clicked on Export button');
    }


    async exportAndCaptureFile(): Promise<string> {

        const downloadPromise = this.page.waitForEvent('download');

        await this.click(this.exportButton);

        const download = await downloadPromise;

        const downloadDir = DownloadUtil.ensureDownloadFolder();

        const filePath = path.join(
            downloadDir,
            `${Date.now()}-${download.suggestedFilename()}`
        );

        await download.saveAs(filePath);

        return filePath;
    }


}