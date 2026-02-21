// import { testFixture as test,expect } from "../../framework/base/testFixtures_6";
// import { TAGS } from "../../framework/constants/testTags_7";
// import { TIMEOUTS } from "../../framework/constants/timeouts_8";
// import { LoginBuilder } from "../../data/builders/loginBuilder_10";
// import { RoleBuilder } from "../../data/builders/roleBuilder_22";
// import { UserBuilder } from "../../data/builders/userBuilder_24";
// import { UserFlow } from "../../domain/userFlow_25";
// import { logger } from "../../support/infra/logger_1";


// test.describe('Dashboard',()=>{
//     test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.DASHBOARD} Admin can search realm roles`,async({roleFlows,assert,userFlows,b2bFlows,authFlows})=>{
//         test.setTimeout(TIMEOUTS.LONG);
//         const adminUser=LoginBuilder.adminUser().build();
//         const rolePerson=RoleBuilder.teamLeadRole().build();
//         const userPerson=UserBuilder.teamLeadUser().build();
//         await authFlows.loginWithCustomUser(adminUser);
//         await b2bFlows.navigateToB2BPage();
//         await roleFlows.navigateToRealmRoles(adminUser,rolePerson);
//         // await assert.isVisible(roleFlows.dashboardPage.searchedRole);
//         logger.info('🟢Role Flow Completed: Admin can search realm roles');
//         //        logger.info("🟢Realm Roles Search Completed");
//         await userFlows.MapUserWithRole(userPerson,rolePerson);
//         // await
        
//     })

//     // test

//     test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.DASHBOARD} Admin can export realm settings with groups and roles`,async({authFlows,b2bFlows,realmSettingsFlows})=>{
//         test.setTimeout(TIMEOUTS.LONG);
//         const adminUser=LoginBuilder.adminUser().build();
//         await authFlows.loginWithCustomUser(adminUser);
//         await b2bFlows.navigateToB2BPage();
//         // await realmSettingsFlow.exportRealmSettingsWithGroupsAndRoles();
//         await realmSettingsFlows.exportRealmSettingsWithGroupsAndRoles();
//     })

// })




//code after multiple roles deployment
import { testFixture as test,expect } from "../../framework/base/testFixtures_6";
import { TAGS } from "../../framework/constants/testTags_7";
import { TIMEOUTS } from "../../framework/constants/timeouts_8";
import { LoginBuilder } from "../../data/builders/loginBuilder_10";
import { RoleBuilder } from "../../data/builders/roleBuilder_22";
import { UserBuilder } from "../../data/builders/userBuilder_24";
import { UserFlow } from "../../domain/userFlow_25";
import { logger } from "../../support/infra/logger_1";
import { realmRoleScenarios } from "../../data/testData/realmRoles.data";


test.describe('Dashboard',()=>{

    test.describe.configure({mode:'serial'});

    realmRoleScenarios.forEach(({name,role,user})=>{
        test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.DASHBOARD} ${name} can search realm roles`,async({roleFlows,assert,userFlows,b2bFlows,authFlows})=>{
            test.setTimeout(TIMEOUTS.LONG);
            const adminUser=LoginBuilder.adminUser().build();
            // const rolePerson=RoleBuilder.teamLeadRole().build();
            // const userPerson=UserBuilder.teamLeadUser().build();
            await authFlows.loginWithCustomUser(adminUser);
            await b2bFlows.navigateToB2BPage();
            await roleFlows.navigateToRealmRoles(adminUser,role);
            // await assert.isVisible(roleFlows.dashboardPage.searchedRole);
            logger.info('🟢Role Flow Completed: Admin can search realm roles');
            //        logger.info("🟢Realm Roles Search Completed");
            await userFlows.MapUserWithRole(user,role);
            // await
        
        })

        // test
        test(`${TAGS.DLV95} ${TAGS.B2B} ${TAGS.SMOKE} ${TAGS.DASHBOARD} ${name} can export realm settings with groups and roles`,async({authFlows,b2bFlows,realmSettingsFlows})=>{
            test.setTimeout(TIMEOUTS.LONG);
            const adminUser=LoginBuilder.adminUser().build();
            await authFlows.loginWithCustomUser(adminUser);
            await b2bFlows.navigateToB2BPage();
            // await realmSettingsFlow.exportRealmSettingsWithGroupsAndRoles();
            await realmSettingsFlows.exportRealmSettingsWithGroupsAndRoles(name);
        })
    })

})