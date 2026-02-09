import { testFixture as test,expect } from "../../framework/base/testFixtures_6";
import { TAGS } from "../../framework/constants/testTags_7";
import { TIMEOUTS } from "../../framework/constants/timeouts_8";
import { LoginBuilder } from "../../data/builders/loginBuilder_10";
import { RoleBuilder } from "../../data/builders/roleBuilder_22";
import { UserBuilder } from "../../data/builders/userBuilder_24";
import { UserFlow } from "../../domain/userFlow_25";
import { logger } from "../../support/infra/logger_1";


test.describe('Dashboard',()=>{
    test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.DASHBOARD} Admin can search realm roles`,async({roleFlows,assert,userFlows})=>{
        test.setTimeout(TIMEOUTS.LONG);
        const adminUser=LoginBuilder.adminUser().build();
        const rolePerson=RoleBuilder.teamLeadRole().build();
        const userPerson=UserBuilder.teamLeadUser().build();
        await roleFlows.navigateToRealmRoles(adminUser,rolePerson);
        // await assert.isVisible(roleFlows.dashboardPage.searchedRole);
        logger.info('🟢Role Flow Completed: Admin can search realm roles');
        //        logger.info("🟢Realm Roles Search Completed");
        await userFlows.MapUserWithRole(userPerson,rolePerson);
        // await 
    })
})