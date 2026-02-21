import { logger } from "../support/infra/logger_1";
import { RolePage } from "../ui/web/auth/rolePage_19";
import { UserPage } from "../ui/web/auth/userPage_23";
import { Login, LoginBuilder } from "../data/builders/loginBuilder_10";
import { Role,RoleBuilder } from "../data/builders/roleBuilder_22";
import { AuthFlows } from "./authFlows_4";
import { User } from "../data/builders/userBuilder_24";
import { retry } from "../support/utils/retry";

export class UserFlow{
    // private rolePage:RolePage;
    // private authFlows:AuthFlows;
    private userPage:UserPage;

    constructor(userPage:UserPage){
        // this.rolePage=rolePage;
        // this.authFlows=authFlows;
        this.userPage=userPage;
    }


    async MapUserWithRole(user:User,role:Role):Promise<void>{
        logger.info('User Flow: Create user with specific role');
        await this.userPage.clickUser();
        await this.userPage.clickAddUserButton();
        await this.userPage.toggleEmailVerified();
        await this.userPage.enterEmail(user.email);
        await this.userPage.enterFirstName(user.firstname);
        await this.userPage.enterLastName(user.lastname);
        await this.userPage.clickCreateButton();
        logger.info('🟢User Details Entered and still not entered credentials');
        await this.userPage.clickCredentialsTab();
        await this.userPage.clickSetPasswordButton();
        await this.userPage.enterPassword(user.password);
        await this.userPage.enterPasswordConfirmation(user.password);
        await this.userPage.temporaryPasswordToggleOn();
        await this.userPage.clickSaveButton();
        await this.userPage.clickSavePasswordButton();
        logger.info("🟢User Creation Completed");
        await this.userPage.clickRoleMappingTab();
        await this.userPage.clickAssignRoleButton();
        await retry(async()=>{
            await this.userPage.assignRole(role.role);
            await this.userPage.selectRole(role.role);
            await this.userPage.clickAssignAfterCheckbox();
        })
        // await this.userPage.waitTime(10000);
        // await this.userPage.clickAssignRoleGoButton();
        logger.info("🟢Go Button Clicked Successfully according to the flow...");
        /*
        await retry(async () => {
            await this.userPage.selectRole(role.role);
            await this.userPage.clickAssignAfterCheckbox();
        }, 3, 1500);
 */
    
        logger.info("🟢Role Assigned Successfully to the user");
        
    }
}