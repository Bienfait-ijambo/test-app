import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "../../api/User/entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "postgres",
    port: 5432,
    username: "postgres",
    password: "090912",
    database: "test_app",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})


// "POSTGRES_PASSWORD=090912",
// "POSTGRES_DB=test_app",
// "POSTGRES_USER=postgres",
// 172.23.0.2
