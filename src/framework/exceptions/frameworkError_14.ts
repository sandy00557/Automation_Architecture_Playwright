export class FrameworkError extends Error{
    constructor(
        message:string,
        public readonly cause?:unknown,
        public readonly context?:Record<string,unknown>
        //What is Record<string, unknown>?
        // This is just a fancy way to say:
        // An object with string keys and values of any type
        // Equivalent to:
        // {
        //    [key: string]: any
        // }
        // But unknown is safer than any.
    ){
        super(message);
        this.name='FrameworkError';
        //super refers to main 'Error' inbuilt method. In that there will be a property called name we are overriding it with our name "Framework error"
    }
}


/*
Example code:
class Parent {
   constructor() {
      this.color = "blue";
   }
}

class Child extends Parent {
   constructor() {
      super();
      this.color = "red";
   }
}
*/