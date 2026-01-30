import { LoginPage } from "../ui/web/auth/LoginPage_3";
import { logger } from "../support/infra/logger_1";


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
}