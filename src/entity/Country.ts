import {Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./Category";

@Entity()
export class Country {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column("text")
    desc: string;
}
