import { BasePage } from "../../../framework/base/basePage_2";
import { Page } from "@playwright/test";
export class UserPage extends BasePage{
    constructor(page:Page){
        super(page);
    }
    
    //page.getByRole('link', { name: 'Users' })
    private users='role=link[name="Users"]';
    //page.getByRole('button', { name: 'Add user' })
    private addUserButton='role=button[name="Add user"]';
    //page.getByLabel('YesNo')
    private emailVerifiedToggle='label=YesNo';


    async clickUser():Promise<void>{
        await this.click(this.users);
    }

    async clickAddUserButton():Promise<void>{
        await this.click(this.addUserButton);
    }

    async toggleEmailVerified():Promise<void>{
        await this.click(this.emailVerifiedToggle);
    }



}