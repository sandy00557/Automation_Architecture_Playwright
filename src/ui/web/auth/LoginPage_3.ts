import { Page } from "@playwright/test";
import { BasePage } from "../../../framework/base/basePage_2";

export class LoginPage extends BasePage{
    
    constructor(page:Page){
        super(page);
    }

    
    private usernameInput='role=textbox[name="Username"]';
    private passwordInput='role=textbox[name="Password"]';
    private loginButton = '#kc-login';

    async enterUsername(username:string):Promise<void>{
        await this.type(this.usernameInput,username);
    }


    async enterPassword(password:string):Promise<void>{
        await this.type(this.passwordInput,password);
    }

    async clickLogin():Promise<void>{
        await this.click(this.loginButton);
    }
}