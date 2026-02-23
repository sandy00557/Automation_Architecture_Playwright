// import { BasePage } from "../../../framework/base/basePage_2";
// import { Page } from "@playwright/test";
// import { logger } from "../../../support/infra/logger_1";
// export class UserPage extends BasePage{
//     constructor(page:Page){
//         super(page);
//     }
    
//     //page.getByRole('link', { name: 'Users' })
//     private users='role=link[name="Users"]';
//     //page.getByRole('button', { name: 'Add user' })
//     private addUserButton='role=button[name="Add user"]';
//     //page.getByLabel('YesNo')
//     // private emailVerifiedToggle='pf-c-switch';
//     private emailVerifiedToggle = 'label.pf-c-switch';
//     //page.getByRole('textbox', { name: /Email \*/i })
//     private emailInput='role=textbox[name^="Email"]';
//     //page.getByRole('textbox', { name: /First name/i })
//     private firstNameInput='role=textbox[name="First name"]';
//     //page.getByRole('textbox', { name: /Last name/i })
//     private lastNameInput='role=textbox[name="Last name"]';
//     //page.getByRole('button', { name: 'Create' })
//     private createButton='role=button[name="Create"]';
//     //page.getByRole('button', { name: 'Create' })
//     private credentialsTab = ':text-is("Credentials")';
//     //page.getByRole('button', { name: 'Set password' })
//     private setPasswordButton='role=button[name="Set password"]';
//     //page.getByRole('textbox', { name: 'Password *' })
//     private passwordInput='role=textbox[name="Password"]';
//     //page.getByRole('textbox', { name: 'Password confirmation *' })
//     private passwordConfirmationInput='role=textbox[name="Password confirmation"]';
//     private temporaryPasswordToggle = 'label.pf-c-switch.kc-temporaryPassword';

//     private saveBtn='[data-testid="confirm"]';
//     private saveBtnenabled='[data-testid="confirm"]:not([disabled])';
//     //page.locator(':text-is("Role mapping")')

//     //page.getByRole('button', { name: 'Save password' })
//     private savePasswordButton='role=button[name="Save password"]';

//     /*
//     page.getByText('Role mapping', { exact: true }) 
//     page.getByText('Role mapping') 
//     page.locator('span:has-text("Role mapping")') 
//     page.locator(':text-is("Role mapping")') 
//     Out of this why 4th one is preferred?
//     First two are getByText which is a method but we need as a string. So we are ignoring first two.
//     Third one has two problems:It is using span:has-text which is not reliable and may break if the HTML changes and also uses has text which is not exact match and may cause issues if there are multiple elements with similar text.
//     Fourth one is using :text-is which is a Playwright-specific selector that is more reliable and robust.
    
//     Why can't we write like how we write for Role?
//     Because role= is a selector engine, while getText() is an action. You can use the same selector for both—but they live at different layers.*/
//     private roleMappingTab=':text-is("Role mapping")';
//     //page.getByRole('button', { name: 'Assign role' })
//     private assignRoleButton='role=button[name="Assign role"]';
//     /*❌ page.getByPlaceholder('Search by role name')

// Method, not a selector string

// Cannot be passed into page.locator()

// ❌ page.getByPlaceholder('Search by role name', { exact: true })

// Same issue: method call

// ⚠️ page.locator("//input[@placeholder='Search by role name']")

// XPath → slower, brittle

// Harder to read/debug

// Not Playwright-recommended unless necessary

// ✅ page.locator("input[placeholder='Search by role name']") ← BEST

// Why this is preferred:

// Pure CSS selector string */
//     private searchAssignRole='input[placeholder="Search by role name"]';
//     //private controlButtonEnabled = '.pf-c-button.pf-m-control:not([disabled])';
//     private assignRoleGoButton='role=dialog[name^="Assign roles"] >> role=button[name="Search"]';
//     // private assignRoleGoButtonEnabled='.pf-c-button.pf-m-control:not([disabled])';

//     // private roleCheckbox ='tr:has(td[data-label="Name"]:text-is("Onboarding Team Member Support or Team Lead")) input[type="checkbox"]';

//     /*page.getByText('Assign', { exact: true })
//       page.getByTestId('assign')
//       page.locator(':text-is("Assign")')
//       page.locator('button').filter({ hasText: 'Assign' }).last()
//       page.locator(".pf-c-button.pf-m-primary[data-testid='assign']")
      
//       Which one is best? Playwright recommends to use testId as it is specifically designed for automation.*/
//     private assignAfterCheckbox='[data-testid="assign"]';



    







//     async clickUser():Promise<void>{
//         await this.click(this.users);
//     }

//     async clickAddUserButton():Promise<void>{
//         await this.click(this.addUserButton);
//         logger.info('Clicked on Add User button');
//     }

//     async toggleEmailVerified():Promise<void>{
//         await this.click(this.emailVerifiedToggle);
//         logger.info('Toggled Email Verified switch');
//     }


//     async enterEmail(email:string):Promise<void>{
//         await this.fill(this.emailInput,email);
//         logger.info(`Entered email: ${email}`);
//     }

//     async enterFirstName(firstName:string):Promise<void>{
//         await this.fill(this.firstNameInput,firstName);
//         logger.info(`Entered first name: ${firstName}`);
//     }
//     async enterLastName(lastName:string):Promise<void>{
//         await this.fill(this.lastNameInput,lastName);
//         logger.info(`Entered last name: ${lastName}`);
//     }

//     async clickCreateButton():Promise<void>{
//         await this.click(this.createButton);
//         logger.info('Clicked on Create button to create user');
//     }


//     async clickCredentialsTab():Promise<void>{
//         await this.click(this.credentialsTab);
//         logger.info('Clicked on Credentials tab');
//     }

//     async clickSetPasswordButton():Promise<void>{
//         await this.click(this.setPasswordButton);
//         logger.info('Clicked on Set Password button');
//     }


//     async enterPassword(password:string):Promise<void>{
//         await this.fill(this.passwordInput,password);
//         logger.info('Entered password');
//     }

//     async enterPasswordConfirmation(password:string):Promise<void>{
//         await this.fill(this.passwordConfirmationInput,password);
//         logger.info('Entered password confirmation');
//     }


//     async temporaryPasswordToggleOn():Promise<void>{
//         await this.click(this.temporaryPasswordToggle);
//         logger.info('Toggled Temporary Password switch ON');
//     }


//     async clickSaveButton():Promise<void>{
//         await this.waitForElementToBeEnabled(this.saveBtnenabled);
//         await this.click(this.saveBtn);
//         logger.info('Clicked on Save button to save user credentials');
//     }

//     async clickRoleMappingTab():Promise<void>{
//         await this.click(this.roleMappingTab);
//         logger.info('Clicked on Role Mapping tab');
//     }


//     async roleMappingTabClick():Promise<void>{
//         await this.click(this.roleMappingTab);
//     }

//     async clickAssignRoleButton():Promise<void>{
//         await this.click(this.assignRoleButton);
//         logger.info('Clicked on Assign Role button');
//     }


//     async assignRole(roleName:string):Promise<void>{
//         await this.fill(this.searchAssignRole,roleName);
//         await this.press(this.searchAssignRole,'Enter');
//         await this.timeout();
//         logger.info(`Assigned role: ${roleName}`);
//     }


//     // async selectRoleCheckbox(): Promise<void> {
//     // await this.click(this.roleCheckbox);
//     // }

//     async selectRole(roleName:string):Promise<void>{
//         const roleCheckbox=`tr:has(td[data-label="Name"]:text-is("${roleName}")) input[type="checkbox"]`;
//         await this.click(roleCheckbox);
//         logger.info(`Selected role checkbox for role: ${roleName}`);
//     }


//     async clickSavePasswordButton():Promise<void>{
//         await this.click(this.savePasswordButton);
//         logger.info('Clicked on Save Password button');
//     }


//     // async clickAssignRoleGoButton():Promise<void>{
//     //     // await this.waitForElementToBeEnabled(this.assignRoleGoButtonEnabled);
//     //     await this.click(this.assignRoleGoButton);
//     //     logger.info('Clicked on Assign Role Go button');
//     // }


//     // async waitTime(milliseconds: number): Promise<void> {
//     //     await this.page.waitForTimeout(milliseconds);
//     // }


//     async clickAssignAfterCheckbox():Promise<void>{
//         await this.click(this.assignAfterCheckbox);
//         logger.info('Clicked on Assign button after selecting role checkbox');
//     }

    
// }





//flaky test try
// import { BasePage } from "../../../framework/base/basePage_2";
// import { Page } from "@playwright/test";
// import { logger } from "../../../support/infra/logger_1";
// export class UserPage extends BasePage{
//     constructor(page:Page){
//         super(page);
//     }
    
//     //page.getByRole('link', { name: 'Users' })
//     private users='role=link[name="Users"]';
//     //page.getByRole('button', { name: 'Add user' })
//     private addUserButton='role=button[name="Add user"]';
//     //page.getByLabel('YesNo')
//     // private emailVerifiedToggle='pf-c-switch';
//     private emailVerifiedToggle = 'label.pf-c-switch';
//     //page.getByRole('textbox', { name: /Email \*/i })
//     private emailInput='role=textbox[name^="Email"]';
//     //page.getByRole('textbox', { name: /First name/i })
//     private firstNameInput='role=textbox[name="First name"]';
//     //page.getByRole('textbox', { name: /Last name/i })
//     private lastNameInput='role=textbox[name="Last name"]';
//     //page.getByRole('button', { name: 'Create' })
//     private createButton='role=button[name="Create"]';
//     //page.getByRole('button', { name: 'Create' })
//     private credentialsTab = ':text-is("Credentials")';
//     //page.getByRole('button', { name: 'Set password' })
//     private setPasswordButton='role=button[name="Set password"]';
//     //page.getByRole('textbox', { name: 'Password *' })
//     private passwordInput='role=textbox[name="Password"]';
//     //page.getByRole('textbox', { name: 'Password confirmation *' })
//     private passwordConfirmationInput='role=textbox[name="Password confirmation"]';
//     private temporaryPasswordToggle = 'label.pf-c-switch.kc-temporaryPassword';

//     private saveBtn='[data-testid="confirm"]';
//     private saveBtnenabled='[data-testid="confirm"]:not([disabled])';
//     //page.locator(':text-is("Role mapping")')

//     //page.getByRole('button', { name: 'Save password' })
//     private savePasswordButton='role=button[name="Save password"]';

//     /*
//     page.getByText('Role mapping', { exact: true }) 
//     page.getByText('Role mapping') 
//     page.locator('span:has-text("Role mapping")') 
//     page.locator(':text-is("Role mapping")') 
//     Out of this why 4th one is preferred?
//     First two are getByText which is a method but we need as a string. So we are ignoring first two.
//     Third one has two problems:It is using span:has-text which is not reliable and may break if the HTML changes and also uses has text which is not exact match and may cause issues if there are multiple elements with similar text.
//     Fourth one is using :text-is which is a Playwright-specific selector that is more reliable and robust.
    
//     Why can't we write like how we write for Role?
//     Because role= is a selector engine, while getText() is an action. You can use the same selector for both—but they live at different layers.*/
//     private roleMappingTab=':text-is("Role mapping")';
//     //page.getByRole('button', { name: 'Assign role' })
//     private assignRoleButton='role=button[name="Assign role"]';
//     /*❌ page.getByPlaceholder('Search by role name')

// Method, not a selector string

// Cannot be passed into page.locator()

// ❌ page.getByPlaceholder('Search by role name', { exact: true })

// Same issue: method call

// ⚠️ page.locator("//input[@placeholder='Search by role name']")

// XPath → slower, brittle

// Harder to read/debug

// Not Playwright-recommended unless necessary

// ✅ page.locator("input[placeholder='Search by role name']") ← BEST

// Why this is preferred:

// Pure CSS selector string */
//     private searchAssignRole='input[placeholder="Search by role name"]';

//     private noUsersFoundText='role=cell[name="No users found"]';
//     //private controlButtonEnabled = '.pf-c-button.pf-m-control:not([disabled])';
//     private assignRoleGoButton='role=dialog[name^="Assign roles"] >> role=button[name="Search"]';
//     // private assignRoleGoButtonEnabled='.pf-c-button.pf-m-control:not([disabled])';

//     // private roleCheckbox ='tr:has(td[data-label="Name"]:text-is("Onboarding Team Member Support or Team Lead")) input[type="checkbox"]';

//     private refreshButtons = 'role=button[name="Refresh"]';


//     /*page.getByText('Assign', { exact: true })
//       page.getByTestId('assign')
//       page.locator(':text-is("Assign")')
//       page.locator('button').filter({ hasText: 'Assign' }).last()
//       page.locator(".pf-c-button.pf-m-primary[data-testid='assign']")
      
//       Which one is best? Playwright recommends to use testId as it is specifically designed for automation.*/
//     private assignAfterCheckbox='[data-testid="assign"]';



    







//     async clickUser():Promise<void>{
//         await this.click(this.users);
//     }

//     async clickAddUserButton():Promise<void>{
//         await this.click(this.addUserButton);
//         logger.info('Clicked on Add User button');
//     }

//     async toggleEmailVerified():Promise<void>{
//         await this.click(this.emailVerifiedToggle);
//         logger.info('Toggled Email Verified switch');
//     }


//     async enterEmail(email:string):Promise<void>{
//         await this.fill(this.emailInput,email);
//         logger.info(`Entered email: ${email}`);
//     }

//     async enterFirstName(firstName:string):Promise<void>{
//         await this.fill(this.firstNameInput,firstName);
//         logger.info(`Entered first name: ${firstName}`);
//     }
//     async enterLastName(lastName:string):Promise<void>{
//         await this.fill(this.lastNameInput,lastName);
//         logger.info(`Entered last name: ${lastName}`);
//     }

//     async clickCreateButton():Promise<void>{
//         await this.click(this.createButton);
//         logger.info('Clicked on Create button to create user');
//     }


//     async clickCredentialsTab():Promise<void>{
//         await this.click(this.credentialsTab);
//         logger.info('Clicked on Credentials tab');
//     }

//     async clickSetPasswordButton():Promise<void>{
//         await this.click(this.setPasswordButton);
//         logger.info('Clicked on Set Password button');
//     }


//     async enterPassword(password:string):Promise<void>{
//         await this.fill(this.passwordInput,password);
//         logger.info('Entered password');
//     }

//     async enterPasswordConfirmation(password:string):Promise<void>{
//         await this.fill(this.passwordConfirmationInput,password);
//         logger.info('Entered password confirmation');
//     }


//     async temporaryPasswordToggleOn():Promise<void>{
//         await this.click(this.temporaryPasswordToggle);
//         logger.info('Toggled Temporary Password switch ON');
//     }


//     async clickSaveButton():Promise<void>{
//         await this.waitForElementToBeEnabled(this.saveBtnenabled);
//         await this.click(this.saveBtn);
//         logger.info('Clicked on Save button to save user credentials');
//     }

//     async clickRoleMappingTab():Promise<void>{
//         await this.click(this.roleMappingTab);
//         logger.info('Clicked on Role Mapping tab');
//     }


//     async roleMappingTabClick():Promise<void>{
//         await this.click(this.roleMappingTab);
//     }

//     async clickAssignRoleButton():Promise<void>{
//         await this.click(this.assignRoleButton);
//         logger.info('Clicked on Assign Role button');
//     }


//     async assignRole(roleName:string):Promise<void>{
//         const roleRow = this.page.locator(`tr:has(td[data-label="Name"]:text-is("${roleName}"))`);
//         const noUsersFound = this.page.locator(this.noUsersFoundText);

//         for (let attempt = 1; attempt <= 3; attempt++) {
//             await this.fill(this.searchAssignRole, '');
//             await this.fill(this.searchAssignRole, roleName);
//             await this.press(this.searchAssignRole,'Enter');

//             const loadedState = await Promise.race([
//                 roleRow.waitFor({ state: 'visible', timeout: 4000 }).then(() => 'role-found'),
//                 noUsersFound.waitFor({ state: 'visible', timeout: 4000 }).then(() => 'no-users-found')
//             ]);

//             if (loadedState === 'role-found') {
//                 logger.info(`Assigned role search succeeded for role: ${roleName} on attempt ${attempt}`);
//                 return;
//             }

//             logger.info(`Role search returned "No users found" for role: ${roleName} on attempt ${attempt}. Retrying...`);
//             await this.page.waitForTimeout(1000);
//         }

//         throw new Error(`Unable to find role "${roleName}" after pressing Enter multiple times`);
//     }


//     async clickRefreshButton():Promise<void>{
//         await this.click(this.refreshButtons,0);
//     }


//     // async selectRoleCheckbox(): Promise<void> {
//     // await this.click(this.roleCheckbox);
//     // }

//     async selectRole(roleName:string):Promise<void>{
//         const roleCheckbox=`tr:has(td[data-label="Name"]:text-is("${roleName}")) input[type="checkbox"]`;
//         await this.page.locator(roleCheckbox).waitFor({state:'visible',timeout:5000});
//         await this.click(roleCheckbox);
//         logger.info(`Selected role checkbox for role: ${roleName}`);
//     }


//     async clickSavePasswordButton():Promise<void>{
//         await this.click(this.savePasswordButton);
//         logger.info('Clicked on Save Password button');
//     }


//     // async clickAssignRoleGoButton():Promise<void>{
//     //     // await this.waitForElementToBeEnabled(this.assignRoleGoButtonEnabled);
//     //     await this.click(this.assignRoleGoButton);
//     //     logger.info('Clicked on Assign Role Go button');
//     // }


//     // async waitTime(milliseconds: number): Promise<void> {
//     //     await this.page.waitForTimeout(milliseconds);
//     // }


//     async clickAssignAfterCheckbox():Promise<void>{
//         await this.click(this.assignAfterCheckbox);
//         logger.info('Clicked on Assign button after selecting role checkbox');
//     }

    
// }






//refresh button try 
import { BasePage } from "../../../framework/base/basePage_2";
import { Page } from "@playwright/test";
import { logger } from "../../../support/infra/logger_1";
export class UserPage extends BasePage{
    constructor(page:Page){
        super(page);
    }
    
    //page.getByRole('link', { name: 'Users' })
    private users='role=link[name="Users"]';
    //page.getByRole('button', { name: 'Add user' })
    private addUserButton='role=button[name="Add user"]';
    //page.getByLabel('YesNo')
    // private emailVerifiedToggle='pf-c-switch';
    private emailVerifiedToggle = 'label.pf-c-switch';
    //page.getByRole('textbox', { name: /Email \*/i })
    private emailInput='role=textbox[name^="Email"]';
    //page.getByRole('textbox', { name: /First name/i })
    private firstNameInput='role=textbox[name="First name"]';
    //page.getByRole('textbox', { name: /Last name/i })
    private lastNameInput='role=textbox[name="Last name"]';
    //page.getByRole('button', { name: 'Create' })
    private createButton='role=button[name="Create"]';
    //page.getByRole('button', { name: 'Create' })
    private credentialsTab = ':text-is("Credentials")';
    //page.getByRole('button', { name: 'Set password' })
    private setPasswordButton='role=button[name="Set password"]';
    //page.getByRole('textbox', { name: 'Password *' })
    private passwordInput='role=textbox[name="Password"]';
    //page.getByRole('textbox', { name: 'Password confirmation *' })
    private passwordConfirmationInput='role=textbox[name="Password confirmation"]';
    private temporaryPasswordToggle = 'label.pf-c-switch.kc-temporaryPassword';

    private saveBtn='[data-testid="confirm"]';
    private saveBtnenabled='[data-testid="confirm"]:not([disabled])';
    //page.locator(':text-is("Role mapping")')

    //page.getByRole('button', { name: 'Save password' })
    private savePasswordButton='role=button[name="Save password"]';

    /*
    page.getByText('Role mapping', { exact: true }) 
    page.getByText('Role mapping') 
    page.locator('span:has-text("Role mapping")') 
    page.locator(':text-is("Role mapping")') 
    Out of this why 4th one is preferred?
    First two are getByText which is a method but we need as a string. So we are ignoring first two.
    Third one has two problems:It is using span:has-text which is not reliable and may break if the HTML changes and also uses has text which is not exact match and may cause issues if there are multiple elements with similar text.
    Fourth one is using :text-is which is a Playwright-specific selector that is more reliable and robust.
    
    Why can't we write like how we write for Role?
    Because role= is a selector engine, while getText() is an action. You can use the same selector for both—but they live at different layers.*/
    private roleMappingTab=':text-is("Role mapping")';
    //page.getByRole('button', { name: 'Assign role' })
    private assignRoleButton='role=button[name="Assign role"]';
    /*❌ page.getByPlaceholder('Search by role name')

Method, not a selector string

Cannot be passed into page.locator()

❌ page.getByPlaceholder('Search by role name', { exact: true })

Same issue: method call

⚠️ page.locator("//input[@placeholder='Search by role name']")

XPath → slower, brittle

Harder to read/debug

Not Playwright-recommended unless necessary

✅ page.locator("input[placeholder='Search by role name']") ← BEST

Why this is preferred:

Pure CSS selector string */
    private searchAssignRole='input[placeholder="Search by role name"]';
    //private controlButtonEnabled = '.pf-c-button.pf-m-control:not([disabled])';
    private assignRoleGoButton='role=dialog[name^="Assign roles"] >> role=button[name="Search"]';
    // private assignRoleGoButtonEnabled='.pf-c-button.pf-m-control:not([disabled])';

    // private roleCheckbox ='tr:has(td[data-label="Name"]:text-is("Onboarding Team Member Support or Team Lead")) input[type="checkbox"]';

    // private refreshButtons = 'role=button[name="Refresh"]';
    // private refreshButtons = 'role=button[name="Refresh"] >> nth=0';

    /*page.getByText('Assign', { exact: true })
      page.getByTestId('assign')
      page.locator(':text-is("Assign")')
      page.locator('button').filter({ hasText: 'Assign' }).last()
      page.locator(".pf-c-button.pf-m-primary[data-testid='assign']")
      
      Which one is best? Playwright recommends to use testId as it is specifically designed for automation.*/
    private assignAfterCheckbox='[data-testid="assign"]';

//page.getByRole('heading', { name: 'No search results' })
    // private noResults='role=heading[name="No search results"]';

    private noResults = 'role=heading[name="No search results"]';

    //page.getByText('Click on the search bar above to search again', { exact: true })
    // private noResultss='text="Click on the search bar above to search again"';


    







    async clickUser():Promise<void>{
        await this.click(this.users);
    }

    async clickAddUserButton():Promise<void>{
        await this.click(this.addUserButton);
        logger.info('Clicked on Add User button');
    }

    async toggleEmailVerified():Promise<void>{
        await this.click(this.emailVerifiedToggle);
        logger.info('Toggled Email Verified switch');
    }


    async enterEmail(email:string):Promise<void>{
        await this.fill(this.emailInput,email);
        logger.info(`Entered email: ${email}`);
    }

    async enterFirstName(firstName:string):Promise<void>{
        await this.fill(this.firstNameInput,firstName);
        logger.info(`Entered first name: ${firstName}`);
    }
    async enterLastName(lastName:string):Promise<void>{
        await this.fill(this.lastNameInput,lastName);
        logger.info(`Entered last name: ${lastName}`);
    }

    async clickCreateButton():Promise<void>{
        await this.click(this.createButton);
        logger.info('Clicked on Create button to create user');
    }


    async clickCredentialsTab():Promise<void>{
        await this.click(this.credentialsTab);
        logger.info('Clicked on Credentials tab');
    }

    async clickSetPasswordButton():Promise<void>{
        await this.click(this.setPasswordButton);
        logger.info('Clicked on Set Password button');
    }


    async enterPassword(password:string):Promise<void>{
        await this.fill(this.passwordInput,password);
        logger.info('Entered password');
    }

    async enterPasswordConfirmation(password:string):Promise<void>{
        await this.fill(this.passwordConfirmationInput,password);
        logger.info('Entered password confirmation');
    }


    async temporaryPasswordToggleOn():Promise<void>{
        await this.click(this.temporaryPasswordToggle);
        logger.info('Toggled Temporary Password switch ON');
    }


    async clickSaveButton():Promise<void>{
        await this.waitForElementToBeEnabled(this.saveBtnenabled);
        await this.click(this.saveBtn);
        logger.info('Clicked on Save button to save user credentials');
    }

    async clickRoleMappingTab():Promise<void>{
        await this.click(this.roleMappingTab);
        logger.info('Clicked on Role Mapping tab');
    }


    async roleMappingTabClick():Promise<void>{
        await this.click(this.roleMappingTab);
    }

    async clickAssignRoleButton():Promise<void>{
        await this.click(this.assignRoleButton);
        logger.info('Clicked on Assign Role button');
    }


    async assignRole(roleName:string):Promise<void>{
        await this.fill(this.searchAssignRole,roleName);
        await this.press(this.searchAssignRole,'Enter');
        await this.timeout();
        logger.info(`Assigned role: ${roleName}`);
    }


    // async selectRoleCheckbox(): Promise<void> {
    // await this.click(this.roleCheckbox);
    // }


    async selectRole(roleName:string):Promise<void>{
        const roleCheckbox=`tr:has(td[data-label="Name"]:text-is("${roleName}")) input[type="checkbox"]`;
        await this.click(roleCheckbox);
        logger.info(`Selected role checkbox for role: ${roleName}`);
    }


    async clickSavePasswordButton():Promise<void>{
        await this.click(this.savePasswordButton);
        logger.info('Clicked on Save Password button');
    }


    async clickAssignAfterCheckbox():Promise<void>{
        await this.click(this.assignAfterCheckbox);
        logger.info('Clicked on Assign button after selecting role checkbox');
    }


    async noResultsAvailable(): Promise<boolean> {
        return await this.elementavailable(this.noResults);
    }


    async searchAndSelectRole(roleName: string): Promise<void> {

        logger.info(`Searching for role: ${roleName}`);

        const roleRowSelector =
            `tr:has(td[data-label="Name"]:text-is("${roleName}"))`;

        const roleRowLocator = this.getLocator(roleRowSelector);
        const noResultLocator = this.getLocator(this.noResults);

        // First search
        await this.fill(this.searchAssignRole, roleName);
        await this.press(this.searchAssignRole, 'Enter');

        try {
            // Wait for role row
            await roleRowLocator.waitFor({ state: 'visible', timeout: 3000 });
        } 
        catch {

            // If role row not visible, check if no results appeared
            if (await noResultLocator.isVisible({ timeout: 2000 }).catch(() => false)) {

                logger.warn("No search results detected. Retrying search...");

                await this.fill(this.searchAssignRole, roleName);
                await this.press(this.searchAssignRole, 'Enter');

                await roleRowLocator.waitFor({ state: 'visible', timeout: 5000 });
            } 
            else {
                throw new Error("Search failed: Neither role nor empty state detected.");
            }
        }

        await this.click(
            `tr:has(td[data-label="Name"]:text-is("${roleName}")) input[type="checkbox"]`
        );

        logger.info(`Selected role checkbox for role: ${roleName}`);
    }



    // async searchAndSelectRole(roleName: string): Promise<void> {

    //     logger.info(`Searching for role: ${roleName}`);

    //     // Step 1: Search role
    //     await this.fill(this.searchAssignRole, roleName);
    //     await this.press(this.searchAssignRole, 'Enter');

    //     const roleRowSelector =
    //         `tr:has(td[data-label="Name"]:text-is("${roleName}"))`;

    //     const roleRowLocator = this.getLocator(roleRowSelector);
    //     const noResultLocator = this.getLocator(this.noResults);

    //     // Step 2: Wait for either role OR no results
    //     // await Promise.race([
    //     //     roleRowLocator.waitFor({ state: 'visible' }),
    //     //     noResultLocator.waitFor({ state: 'visible' })
    //     // ]);

    //     // Step 3: If "No search results" appears → Refresh
    //     if (await noResultLocator.isVisible()) {

    //         logger.warn("🚨🚨🚨No search results detected. Clicking Refresh...");

    //         // const refreshButton = this.page
    //         //     .getByLabel(/Assign roles to/)
    //         //     .getByRole('button', { name: 'Refresh' });

    //         // await refreshButton.click();

    //         await this.fill(this.searchAssignRole, roleName);
    //         await this.press(this.searchAssignRole, 'Enter');

    //         await roleRowLocator.waitFor({ state: 'visible' });
            
    //         logger.info("🟢🟢Refresh button clicked....");
    //     }

    //     // Step 4: Click checkbox
    //     const roleCheckbox =
    //         `tr:has(td[data-label="Name"]:text-is("${roleName}")) input[type="checkbox"]`;

    //     await this.click(roleCheckbox);

    //     logger.info(`Selected role checkbox for role: ${roleName}`);
    // }
}