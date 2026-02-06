import { logger } from "../../support/infra/logger_1";
import { FrameworkError } from "./frameworkError_14";


/*
Step 1:
authflow.ts
async loginAsStandardUser() {
    try {
        await this.loginPage.enterUsername('standard_user');
        await this.loginPage.enterPassword('secret_sauce');
        await this.loginPage.clickLogin();  // may fail
    } catch (err) {
        ErrorHandler.handle(err, { flow: 'Standard Login' });
    }
}

Step 2:
here first it goes to clicklogin
throw new FrameworkError("Failed to click login");
Now error goes up to the flow layer(because flow called page)

Step 3:
In flow layer:
catch(err){
    ErrorHandler.handle(err);
}


Step 4:
This is an expected error so it will be Framework Error.If unexpected then it will be normal error.
So it will come to error handler and check if it is from frameworkError:
-Yes. So it will do log then throw the error and exit 

-If No then it will go to the next lines and make it as FrameworkError Intentionally but mark it as normal error. 
*/
export class ErrorHandler{
    static handle(error:unknown,context?:Record<string,unknown>):never{
        /*Why we need to use never?
        never->Function always throws, never returns
        
        Why enterprises prefer never
        Benefit	Reason
        Better type safety	Prevents accidental return
        Clear intent	Shows this method only throws
        Helps control flow analysis	TS knows code after this won’t run*/

        if(error instanceof FrameworkError)//Did this error already come from our framework
        {
            logger.error(`Framework Error: ${error.message}`,error.cause);
            throw error;
        }

        logger.error(`Unhandled error occured in test flow`,error);



        throw new FrameworkError(
            'Test Execution Failed',
            error,
            context
        );
    }
}


/*
🔹 Step 1 — Test Layer
📁 login.spec.ts
test('User login', async ({ authFlows }) => {
    await authFlows.loginAsStandardUser();
});
No try-catch here. Error bubbles upward.

🔹 Step 2 — Flow Layer
📁 authFlows.ts
import { ErrorHandler } from '../framework/exceptions/errorHandler';
async loginAsStandardUser() {
    try {
        await this.loginPage.enterUsername('standard_user');
        await this.loginPage.enterPassword('secret_sauce');
        await this.loginPage.clickLogin();  // may fail
    } catch (err) {
        ErrorHandler.handle(err, { flow: 'Standard Login' });
    }
}
Flow catches errors from Page layer.

🔹 Step 3 — Page Layer
📁 LoginPage.ts
import { FrameworkError } from '../../framework/exceptions/frameworkError';
async clickLogin(): Promise<void> {
    try {
        await this.click(this.loginButton);  // Playwright click
    } catch (err) {
        throw new FrameworkError(
            'Failed to click Login button',
            err,
            { selector: this.loginButton }
        );

        //It creates a FrameworkError object and throws it upward; the Flow layer catches it and sends it to ErrorHandler — the class file itself never “receives” the error.
    }
}
Playwright error is wrapped into FrameworkError.

🔹 Step 4 — What happens in ErrorHandler
📁 errorHandler.ts
static handle(error: unknown, context?: Record<string, unknown>): never {

    if (error instanceof FrameworkError) {
        logger.error(`Framework Error: ${error.message}`, error.cause);
        throw error;
    }

    logger.error('Unhandled error occurred in test flow', error);

    throw new FrameworkError(
        'Test execution failed',
        error,
        context
    );
}
🔄 Full Execution Walkthrough
❌ Login button click fails

Playwright throws:
Error: locator.click timeout

🔹 Page Layer catches and wraps
throw new FrameworkError(
   'Failed to click Login button',
   err,
   { selector: '#loginBtn' }
);
Now error type = FrameworkError

🔹 Flow Layer catches
ErrorHandler.handle(err, { flow: 'Standard Login' });

Handler sees:
error instanceof FrameworkError → TRUE


So logs:
Framework Error: Failed to click Login button
Cause: locator.click timeout

Then rethrows.

*/