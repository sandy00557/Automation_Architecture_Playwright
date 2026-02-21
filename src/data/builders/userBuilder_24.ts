/*Why we are exporting User here?
In Authflows we will have a method called loginWithCustomValidUser(user) and pass the user data. For that we need to mention the data type of user for that we need to export the data type. */
import { TestData } from "../../support/utils/testData";
export type User={
    email:string;
    firstname:string;
    lastname:string;
    password:string;
    role:string;
}

export class UserBuilder{


    //this is the default user as if we didn't provide any data for eg username is not provided for any tests then this default name will be taken.
    private user:User={
        email:'default_user@company.com',
        firstname:'default',
        lastname:'user',
        password:'default_pass',
        role:'standard'
    }


    static teamLeadUser(){
        return new UserBuilder()
        .withEmail(TestData.uniqueEmail())
        .withFirstName('Santhosh')
        .withLastName('Krishnan')
        .withPassword('@Testing123')
        .withRole('Onboarding Team Member Support or Team Lead');
    }


    static merchantAdminUser(){
        return new UserBuilder()
        .withEmail(TestData.uniqueEmail())
        .withFirstName('Santhosh')
        .withLastName('Krishnan')
        .withPassword('@Testing123')
        .withRole('Merchant Super Admin');
    }


    static onboardingTeamMemberApprover(){
        return new UserBuilder()
        .withEmail(TestData.uniqueEmail())
        .withFirstName('Santhosh')
        .withLastName('Krishnan')
        .withPassword('@Testing123')
        .withRole('Onboarding Team Member Approver');
    }


    static onboardingTeamMemberSpecialist(){
        return new UserBuilder()
        .withEmail(TestData.uniqueEmail())
        .withFirstName('Santhosh')
        .withLastName('Krishnan')
        .withPassword('@Testing123')
        .withRole('Onboarding Team Member Specialist');
    }


    withEmail(email:string){
        this.user.email=email;
        return this;
    }

    withFirstName(firstname:string){
        this.user.firstname=firstname;
        return this;
    }

    withLastName(lastname:string){
        this.user.lastname=lastname;
        return this;
    }

    withPassword(password:string){
        this.user.password=password;
        return this;
    }

    withRole(role:string){
        this.user.role=role;
        return this;
    }

    build():User{
            return this.user;
    }

}