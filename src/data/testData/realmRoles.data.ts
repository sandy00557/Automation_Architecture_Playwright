import { RoleBuilder } from "../builders/roleBuilder_22";
import { UserBuilder } from "../builders/userBuilder_24";



export const realmRoleScenarios=[
    {
        name:"Onboarding Team Member Support or Team Lead",
        role:RoleBuilder.teamLeadRole().build(),
        user:UserBuilder.teamLeadUser().build()
    },
    {
        name:"Super Merchant Admin",
        role:RoleBuilder.merchantAdminUser().build(),
        user:UserBuilder.merchantAdminUser().build()
    },
    {
        name:"Onboarding Team Member Approver",
        role:RoleBuilder.onboardingTeamMemberApprover().build(),
        user:UserBuilder.onboardingTeamMemberApprover().build()
    },
    {
        name:"Onboarding Team Member Specialist",
        role:RoleBuilder.onboardingTeamMemberSpecialist().build(),
        user:UserBuilder.onboardingTeamMemberSpecialist().build()
    }

]