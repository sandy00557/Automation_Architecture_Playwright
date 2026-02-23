import { testFixture as test,expect } from "../../framework/base/testFixtures_6";
import { TAGS } from "../../framework/constants/testTags_7";
import { TIMEOUTS } from "../../framework/constants/timeouts_8";
import { LoginBuilder } from "../../data/builders/loginBuilder_10";
import { logger } from "../../support/infra/logger_1";
import { realmRoleScenarios } from "../../data/testData/realmRoles.data";


test.describe('Dashboard',()=>{

    test.describe.configure({mode:'serial'});

    realmRoleScenarios.forEach(({name,role,user})=>{
        test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.DASHBOARD} ${name} can search realm roles`,async({roleFlows,assert,userFlows,b2bFlows,loginFlows})=>{
            test.setTimeout(TIMEOUTS.LONG);
            const adminUser=LoginBuilder.adminUser().build();
            await loginFlows.loginWithCustomUser(adminUser);
            await b2bFlows.navigateToB2BPage();
            await roleFlows.navigateToRealmRoles(adminUser,role);
            // await assert.isVisible(roleFlows.dashboardPage.searchedRole);
            logger.info('🟢Role Flow Completed: Admin can search realm roles');
            await userFlows.MapUserWithRole(user,role);
        })

        test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.DASHBOARD} ${name} can export realm settings with groups and roles`,async({loginFlows,b2bFlows,realmSettingsFlows})=>{
            test.setTimeout(TIMEOUTS.LONG);
            const adminUser=LoginBuilder.adminUser().build();
            await loginFlows.loginWithCustomUser(adminUser);
            await b2bFlows.navigateToB2BPage();
            await realmSettingsFlows.exportRealmSettingsWithGroupsAndRoles(name);
        })
    })

})