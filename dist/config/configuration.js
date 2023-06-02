"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => ({
    port: Number(process.env.PORT),
    database: {
        type: 'mysql',
        host: process.env.HOST,
        port: 3306,
        database: process.env.DATABASE,
        username: process.env.USERNAME,
        password: process.env.PASSWORD,
        synchronize: true,
    },
});
exports.configuration = configuration;
//# sourceMappingURL=configuration.js.map