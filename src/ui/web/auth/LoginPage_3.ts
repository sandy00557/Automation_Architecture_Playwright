import { Page } from "@playwright/test";
import { BasePage } from "../../../framework/base/basePage_2";

export class LoginPage extends BasePage{


    constructor(page:Page){
        super(page);
    }

    //if we make it private it cannot be accessed by any even when they inherit
    private usernameInput='#username';
    private passwordInput='#password';
    private loginButton='#loginbtn';


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