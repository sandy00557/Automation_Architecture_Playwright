import { logger } from "../support/infra/logger_1";
import { B2BPage } from "../ui/web/auth/B2BPage_28";
export class B2BFlow{
    private b2BPage:B2BPage;

    constructor(b2BPage:B2BPage){
        this.b2BPage=b2BPage;
    }


    async navigateToB2BPage():Promise<void>{
        logger.info('Business Flow: Navigate to B2B page');
        await this.b2BPage.clickKeycloakButton();
        await this.b2BPage.clickB2BButton();
        logger.info('🟢Navigated to B2B Page successfully');
    }
}