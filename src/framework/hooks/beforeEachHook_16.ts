import { logger } from "../../support/infra/logger_1";
import { TestContext } from "../state/testContext_13";

export async function beforeEachHook(testInfo:any){
    logger.info(`Starting test: ${testInfo.title}`);

    TestContext.inits(testInfo);
}