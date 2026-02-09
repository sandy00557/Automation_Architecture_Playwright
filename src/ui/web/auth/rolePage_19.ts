import { Page } from "@playwright/test";
import { BasePage } from "../../../framework/base/basePage_2";

export class RolePage extends BasePage{
    constructor(page:Page){
        super(page);
    }

    //page.getByRole('button', { name: 'Keycloak' })
    private keycloakButton='role=button[name="Keycloak"]';
   //page.getByRole('menuitem', { name: 'KeycloakB2B' })
    // private b2bButton='role=menuitem[name="KeycloakB2B"]';
    // private b2bButton=this.page.getByRole('menuitem', { name: 'KeycloakB2B' });
    // page.getByText('B2B', { exact: true })
    // private b2bButton=this.page.getByText('B2B', { exact: true });
    private b2bButton='text=B2B';
    //page.getByRole('menuitem', { name: 'KeycloakB2B' })
    //page.getByRole('link', { name: 'Realm roles' })
    private realmRoles='role=link[name="Realm roles"]';
    //page.getByRole('textbox', { name: /Search/i })
    private roleSearch='role=textbox[name=/Search/i]';
    //page.getByRole('button', { name: 'Search' })
    private roleSearchButton='role=button[name=/Search/i]';



    async clickKeycloakButton():Promise<void>{
        await this.click(this.keycloakButton);
    }

    async clickB2BButton():Promise<void>{
        await this.click(this.b2bButton);
    }

    async clickRealmRoles():Promise<void>{
        await this.click(this.realmRoles);
    }

    async searchRole(roleName:string):Promise<void>{
        await this.clickAndType(this.roleSearch,roleName);
    }

    async clickRoleSearchButton():Promise<void>{
        await this.click(this.roleSearchButton);
    }


}