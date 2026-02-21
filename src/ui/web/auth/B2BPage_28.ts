import { Page } from "@playwright/test";
import { BasePage } from "../../../framework/base/basePage_2";
export class B2BPage extends BasePage{
    constructor(page:Page){
        super(page);
    }

    private keycloakButton='role=button[name="Keycloak"]';
    private b2bButton='text=B2B';

    async clickKeycloakButton():Promise<void>{
        await this.click(this.keycloakButton);
    }

    async clickB2BButton():Promise<void>{
        await this.click(this.b2bButton);
    }


}