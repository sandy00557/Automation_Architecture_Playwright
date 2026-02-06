/*
WeakMap
│
├── testInfoA → Map
│                 ├── "orderId" → "ORD123"
│                 ├── "userId"  → "U900"
│
├── testInfoB → Map
                  ├── "token" → "ABC"


WeakMap ensures per-test data is automatically garbage-collected(deleted) when the testInfo object becomes unreachable, preventing memory leaks in parallel or long-running Playwright test suites.                  */


/*
❌ WITHOUT TestContext
test('Create order test', async ({ page }) => {
    const orderPage = new OrderPage(page);

    const orderId = await orderPage.createOrder();  // Step 1

    await orderPage.verifyOrder(orderId);           // Step 2

    // Now how do we delete this in afterEach?
});

Problem appears in cleanup:
test.afterEach(async () => {
    // ❌ orderId not available here
});

Why this fails
Issue	Explanation
Scope problem	orderId exists only inside test function
Cannot share with fixture	afterEach cannot access it
Global variable?	Breaks parallel execution
Pass everywhere?	Messy architecture
✅ WITH TestContext

Now we give the test a memory box.

🟢 Test file
test('Create order test', async ({ page }, testInfo) => {
    const orderPage = new OrderPage(page);

    const orderId = await orderPage.createOrder();   // Step 1

    TestContext.set(testInfo, "orderRef", orderId);  // Store it

    await orderPage.verifyOrder(orderId);            // Step 2
});

🟢 Cleanup (anywhere in framework)
test.afterEach(async ({}, testInfo) => {
    const orderId = TestContext.get<string>(testInfo, "orderRef");

    if (orderId) {
        await deleteOrder(orderId);
    }
});

🔍 What changed?
Without Context	With Context
Data trapped inside test	Data accessible across framework
No safe cleanup	Easy cleanup
Hard to scale	Enterprise-ready
Risky globals	Per-test isolated
Messy parameter passing	Clean architecture
*/



export class TestContext{
    private static store=new WeakMap<object,Map<string,unknown>>();



    //the init is for the first time the store will be empty at that time we need to create a Map for it.
    static inits(testInfo:object){
        if(!this.store.has(testInfo)){
            this.store.set(testInfo,new Map());
        }
        /*What it checks
        👉 “Does this test already have storage?”
        If NO:
        testInfo → Map {}
        If YES: do nothing.
        Why needed?
        If you try to store data before creating the inner Map:
        this.store.get(testInfo) → undefined ❌
        So init() ensures container exists. */
    }



    static sets(testInfo:object,key:string,value:unknown){
        this.inits(testInfo),
        this.store.get(testInfo)!.set(key,value);
    }


    /*What is that <T>?
    In test file we will provide like "TestContext.get<number>(testInfo, "orderTotal");"
    We will provide the value type so it will be easy to find out .
    Here it will be taken as T and the return type will be T or undefined.
    */
    static gets<T>(testInfo:object,key:string):T|undefined{
        return this.store.get(testInfo)?.get(key) as T;
        //this.store.get(testInfo) -> here we are asking to get the particular testInfo
        //this.store.get(testInfo)?.get(key) ->If testInfo exists get key or else return undefined safely.
        //If we mention get(key) it will automatically get the value of it.
        //But the value type will be unknown so we are telling that to the typescript that the value you are getting will be this type.
    }


    static clears(testInfo:object){
        this.store.delete(testInfo);
    }
}