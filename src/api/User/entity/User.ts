import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { AppDataSource } from "../../../infrastructure/typeorm/data-source"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

}



export async function createUser(){
    await AppDataSource
    .createQueryBuilder()
    .insert()
    .into(User)
    .values({
        firstName: "Timber",
        lastName: "Saw",
        age: 12,
    })
    .execute()
}
