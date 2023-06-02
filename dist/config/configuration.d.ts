export declare const configuration: () => {
    port: number;
    database: {
        type: string;
        host: string;
        port: number;
        database: string;
        username: string;
        password: string;
        synchronize: boolean;
    };
};
