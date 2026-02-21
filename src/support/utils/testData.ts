import { randomUUID } from "node:crypto";

export class TestData{
    static uniqueEmail(
        base:string='santhosh.krishnan',
        domain:string='ascendion.com'
    ):string{
        // const uniquePart=Date.now()+Math.floor(Math.random()*1000);
        const uniquePart=randomUUID();
        return `${base}+${uniquePart}@${domain}`;
    }
}