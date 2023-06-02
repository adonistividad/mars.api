export const configuration = () => ({
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
