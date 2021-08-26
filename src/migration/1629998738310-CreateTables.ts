import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1629998738310 implements MigrationInterface {
    name = 'CreateTables1629998738310'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."post" RENAME COLUMN "code" TO "codeTest"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."post" RENAME COLUMN "codeTest" TO "code"`);
    }

}
