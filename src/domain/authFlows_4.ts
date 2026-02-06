import { LoginPage } from "../ui/web/auth/LoginPage_3";
import { logger } from "../support/infra/logger_1";
import { UserBuilder,User } from "../data/builders/userBuilder_10";


export class AuthFlows{
    private loginPageFlow:LoginPage;

    constructor(loginPage:LoginPage){
        this.loginPageFlow=loginPage;
    }


    async loginValidUser(username:string,password:string):Promise<void>{
        logger.info('Business Flow: Login with valid user');
        await this.loginPageFlow.enterUsername(username);
        await this.loginPageFlow.enterPassword(password);
        await this.loginPageFlow.clickLogin();
    }



    //---Persona Flows
    async loginAsStandardUser(){
        const user=UserBuilder.standardUser().build();
        await this.loginValidUser(user.username,user.password);
    }
    /*why we use async/await in loginAsStandardUser?
    Because in loginValidUser it contains a promise and need to resolve it. till that loginstandarduser should wait so we are using await to mention that after this step completion only next step should happen.
    loginValidUser() Promise starts
    ↓
    await enterUsername()  → resolves
    ↓
    await enterPassword()  → resolves
    ↓
    await clickLogin()     → resolves
    ↓
    No errors thrown
    ↓
    Function ends
    ↓
    Promise resolves automatically
*/

    async loginAsAdmin(){
        const user=UserBuilder.adminUser().build();
        await this.loginValidUser(user.username,user.password);
    }

    async loginWithCustomUser(user:User){
        logger.info(`Businees Flow: Login with custom user data`);
        await this.loginValidUser(user.username,user.password);
    }


}