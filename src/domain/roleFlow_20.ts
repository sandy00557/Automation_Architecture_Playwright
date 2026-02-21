import { logger } from "../support/infra/logger_1";
import { RolePage } from "../ui/web/auth/rolePage_19";
import { Login, LoginBuilder } from "../data/builders/loginBuilder_10";
import { Role,RoleBuilder } from "../data/builders/roleBuilder_22";
import { AuthFlows } from "./authFlows_4";
import { User } from "../data/builders/userBuilder_24";

export class RoleFlow{
    private RolePage:RolePage;

    constructor(rolePage:RolePage){
        this.RolePage=rolePage;
    }



    async navigateToRealmRoles(userlogin:Login,role:Role):Promise<void>{
        logger.info('Dashboard Flow: Open Realm Roles page from Dashboard');
    
        await this.RolePage.clickRealmRoles();
        await this.RolePage.searchRole(role.role);
        await this.RolePage.clickRoleSearchButton();
        logger.info("🟢Realm Roles Search Completed");
    }
}