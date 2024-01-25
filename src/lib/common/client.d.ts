import { DatoCmsAuth } from "./auth";
export declare const makeDatoClient: (auth: DatoCmsAuth) => {
    fetchData: (recordID: string) => Promise<any>;
};
