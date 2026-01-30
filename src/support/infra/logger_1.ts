export class Logger{

    //We use private modifier so it will be accessed only inside logger class.
    private format(level:string,icon:string,message:string):string{
        const time=new Date().toISOString();
        return `${time} ${icon} [${level}] ${message}`;
    }

    info(message:string):void{
        console.info(this.format('INFO','ℹ️',message));
    }

    warn(message:string):void{
        console.warn(this.format('WARN','⚠️',message));
    }


    //? -> Optional Parameter. You may pass it or you may not. 
    //unknown -> If we don't know what is the type then we can use unknown.
    error(message:string,error?:unknown):void{
        console.error(this.format('ERROR','❌',message));
        if(error) console.error(error); //the error in if loop comes from the parameter


        /*
        In parameters if we add like logger.error("Error detected",err)
        2026-01-29T10:00:00.000Z ❌ [ERROR] Login flow crashed
        Error: locator.click: Timeout 30000ms exceeded
        at LoginPage.clickLogin (LoginPage.ts:22)
        at authFlows.login (authFlows.ts:9)

        or else logger.error("Error detected") as a paramter then only "2026-01-29T10:00:00.000Z ❌ [ERROR] Login failed" printed. 
        We can decide based on our preference.
        */
    }
}


export const logger=new Logger();