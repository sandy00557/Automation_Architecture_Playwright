import { logger } from "../../support/infra/logger_1";


export default async function globalTeardown(){
    logger.info('Global tearDown Completed...');

    //Example:
    //Clean DB.
    //Close mock servers.
}