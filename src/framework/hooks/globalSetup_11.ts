import { logger } from "../../support/infra/logger_1";
/*GlobalSetup runs before the automation suite starts.
 GlobalTearDown runs after the automation suite ends.
 
 But why can't we use @BeforeSuite and @AfterSuite?
 In Playwright there is no hooks like beforeSuite or afterSuite*/


export default async function globalSetup(){
    logger.info("Global setup started...");

    //Example enterprise tasks:
    //Validate environment.
    //Seed test data.
    //Create auth session.
}


/*Why we need to make this function instead of method?
When you configure:
globalSetup: require.resolve('./src/framework/hooks/globalSetup')

Playwright internally does something like:
const setupFn = require('globalSetupFile').default;
await setupFn();

It expects:
A callable function exported as default. So we are creating it as a function and not a method.


Global setup is:
Environment initialization, not business logic.
So it should not belong to any class, because:
No test instance exists yet
No page objects exis
No framework services are constructed
It runs before the automation system is even built.
 */