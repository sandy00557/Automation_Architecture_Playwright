import { logger } from "../support/infra/logger_1";
import { RolePage } from "../ui/web/auth/rolePage_19";
import { UserPage } from "../ui/web/auth/userPage_23";
import { Login, LoginBuilder } from "../data/builders/loginBuilder_10";
import { Role,RoleBuilder } from "../data/builders/roleBuilder_22";
import { AuthFlows } from "./authFlows_4";
import { User } from "../data/builders/userBuilder_24";

export class UserFlow{
    // private rolePage:RolePage;
    // private authFlows:AuthFlows;
    private userPage:UserPage;

    constructor(userPage:UserPage){
        // this.rolePage=rolePage;
        // this.authFlows=authFlows;
        this.userPage=userPage;
    }



    // async navigateToRealmRoles(userlogin:Login,role:Role,user:User):Promise<void>{
    //     logger.info('Dashboard Flow: Open Realm Roles page from Dashboard');
    //     await this.authFlows.loginWithCustomUser(userlogin);
        

    //     await this.rolePage.clickKeycloakButton();
    //     await this.rolePage.clickB2BButton();
    //     await this.rolePage.clickRealmRoles();
    //     await this.rolePage.searchRole(role.role);
        
    // }


    async MapUserWithRole(user:User,role:Role):Promise<void>{
        logger.info('User Flow: Create user with specific role');
        await this.userPage.clickAddUserButton();
        await this.userPage.clickAddUserButton();
        await this.userPage.toggleEmailVerified();
    }
}