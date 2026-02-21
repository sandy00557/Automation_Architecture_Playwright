// import { logger } from "../support/infra/logger_1";
// import { RealmSettingsPage } from "../ui/web/auth/realmSettingPage_26";

// export class RealmSettingsFlow{
//     private realmSettingsPage:RealmSettingsPage;

//     constructor(realmSettingsPage:RealmSettingsPage){
//         this.realmSettingsPage=realmSettingsPage;
//     }


//     async exportRealmSettingsWithGroupsAndRoles():Promise<void>{
//         logger.info('Realm Settings Flow: Export realm settings with groups and roles');
//         await this.realmSettingsPage.clickRealmSettingsPage();
//         await this.realmSettingsPage.clickActionButton();
//         await this.realmSettingsPage.clickPartialExportOption();
//         await this.realmSettingsPage.toggleIncludeGroups();
//         await this.realmSettingsPage.clickExportButton();
//         logger.info('🟢Realm Settings Exported Successfully with groups and roles');

//     }
// }






// import { logger } from "../support/infra/logger_1";
// import { RealmSettingsPage } from "../ui/web/auth/realmSettingPage_26";

// export class RealmSettingsFlow{
//     private realmSettingsPage:RealmSettingsPage;

//     constructor(realmSettingsPage:RealmSettingsPage){
//         this.realmSettingsPage=realmSettingsPage;
//     }


//     async exportRealmSettingsWithGroupsAndRoles():Promise<void>{
//         logger.info('Realm Settings Flow: Export realm settings with groups and roles');
//         await this.realmSettingsPage.clickRealmSettingsPage();
//         await this.realmSettingsPage.clickActionButton();
//         await this.realmSettingsPage.clickPartialExportOption();
//         await this.realmSettingsPage.toggleIncludeGroups();
//         await this.realmSettingsPage.clickExportButton();
//         logger.info('🟢Realm Settings Exported Successfully with groups and roles');

//     }
// }



//code after Download Implementation
import { logger } from "../support/infra/logger_1";
import { RealmSettingsPage } from "../ui/web/auth/realmSettingPage_26";
import { DownloadUtil } from "../support/utils/downloadUtil";
import { expect } from "@playwright/test";



export class RealmSettingsFlow{
    private realmSettingsPage:RealmSettingsPage;

    constructor(realmSettingsPage:RealmSettingsPage){
        this.realmSettingsPage=realmSettingsPage;
    }


    async exportRealmSettingsWithGroupsAndRoles(name:string):Promise<void>{
        logger.info('Realm Settings Flow: Export realm settings with groups and roles');
        await this.realmSettingsPage.clickRealmSettingsPage();
        await this.realmSettingsPage.clickActionButton();
        await this.realmSettingsPage.clickPartialExportOption();
        await this.realmSettingsPage.toggleIncludeGroups();
        // await this.realmSettingsPage.clickExportButton();
        logger.info('🟢Realm Settings Exported Successfully with groups and roles');
        const filePath=await this.realmSettingsPage.exportAndCaptureFile();
        // const jsonData=DownloadUtil.readJson(filePath);
        const isPresent=DownloadUtil.fileContains(filePath,name);
        expect(isPresent).toBeTruthy();
        logger.info('✅Verified that the exported realm settings file contains groups and roles information');
        DownloadUtil.deleteFile(filePath);
        logger.info('🗑️Deleted the exported file after verification');

    }
}