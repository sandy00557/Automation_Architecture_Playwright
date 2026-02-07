import { Page } from "@playwright/test";
import { BasePage } from "../../../framework/base/basePage_2";

export class LoginPage extends BasePage{



    constructor(page:Page){
        super(page);
    }

    //if we make it private it cannot be accessed by any even when they inherit
    //page.getByRole('textbox', { name: 'Username' })
    //page.getByRole('textbox', { name: 'Password' })
    //page.locator('#kc-login')
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