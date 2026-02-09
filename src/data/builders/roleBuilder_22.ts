/*Why we are exporting User here?
In Authflows we will have a method called loginWithCustomValidUser(user) and pass the user data. For that we need to mention the data type of user for that we need to export the data type. */
export type Role={
    email:string;
    firstname:string;
    lastname:string;
    password:string;
    role:string;
}

export class RoleBuilder{


    //this is the default user as if we didn't provide any data for eg username is not provided for any tests then this default name will be taken.
    private role:Role={
        email:'default_user@company.com',
        firstname:'default',
        lastname:'user',
        password:'default_pass',
        role:'standard'
    }


    static teamLeadRole(){
        return new RoleBuilder()
        .withEmail('santhosh.krishnan@ascendion.com')
        .withFirstName('Santhosh')
        .withLastName('Krishnan')
        .withPassword('@testing123')
        .withRole('Onboarding Team Member Support/Team Lead role');
    }


    withEmail(email:string){
        this.role.email=email;
        return this;
    }

    withFirstName(firstname:string){
        this.role.firstname=firstname;
        return this;
    }

    withLastName(lastname:string){
        this.role.lastname=lastname;
        return this;
    }

    withPassword(password:string){
        this.role.password=password;
        return this;
    }

    withRole(role:string){
        this.role.role=role;
        return this;
    }

    build():Role{
            return this.role;
    }

}