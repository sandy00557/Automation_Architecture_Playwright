/*Why we are exporting User here?
In Authflows we will have a method called loginWithCustomValidUser(user) and pass the user data. For that we need to mention the data type of user for that we need to export the data type. */
export type User={
    username:string;
    password:string;
    role:string;
    is2FAEnabled?:boolean;
}

export class UserBuilder{


    //this is the default user as if we didn't provide any data for eg username is not provided for any tests then this default name will be taken.
    private user:User={
        username:'default_user',
        password:'default_pass',
        role:'standard',
        is2FAEnabled:false
    }



    /*Why we want to create a static method? We can create an object in the main file like UserBuilder sk=new UserBuilder() and call the methods like UserBuilder().standardUser() right?
    If we have already defined values we can make it static but object creation in main class method also acceptable. */
    static standardUser(){
        return new UserBuilder()
        .withUsername('practice')
        .withPassword('SuperSecretPassword!')
        .withRole('standard');
    }
    /*
    static standardUser() {
    const builder = new UserBuilder();   // Step A
    builder.withUsername('standard_user'); // Step B
    builder.withPassword('secret_sauce');  // Step C
    builder.withRole('standard');          // Step D
    return builder;                        // Step E
    }
    */


    static adminUser(){
        return new UserBuilder()
        .withUsername('ctan')
        .withPassword('connect2GC@sh')
        .withRole('admin');
    }




    withUsername(username:string){
        this.user.username=username;
        /*
        What is this.user?
        private user: User = {
            username: 'default_user',
            password: 'default_pass',
            role: 'standard',
            is2FAEnabled: false
        };
        */
       //Generally when we create an object(new UserBuilder()) the default values will be applied to that user. But we want to change the defaulvalues. So we will call withUsername method to change the value for that user.
       return this;
       /*Why returning this instead of this.user.username?
       If we return this.user.username it will be "string" and with that string how can we do string.withPassword(). The chaining breaks.
       So we are returning "this" that is object. 
       UserBuilder {
        user: {
            username: 'john',
            password: 'default_pass',
            role: 'standard',
            is2FAEnabled: false
        }
        }*/
    }



    withPassword(password:string){
        this.user.password=password;
        return this;
    }

    withRole(role:string){
        this.user.role=role;
        return this;
    }
    

    build():User{
        return this.user;
    }
    /*Why we need this build()?
    const x = UserBuilder.standardUser();
    The value of x is:
    UserBuilder {
    user: { ... }
    }
    Then we cannot do this.username
    What .build() does?
    It extracts the final product from the builder

 */

}