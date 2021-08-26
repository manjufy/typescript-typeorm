import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1629998658192 implements MigrationInterface {
    name = 'CreateTables1629998658192'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."post" ADD "code" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."post" DROP COLUMN "code"`);
    }

}
