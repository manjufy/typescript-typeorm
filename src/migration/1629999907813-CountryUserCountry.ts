import {MigrationInterface, QueryRunner} from "typeorm";

export class CountryUserCountry1629999907813 implements MigrationInterface {
    name = 'CountryUserCountry1629999907813'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "country" TO "countryId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "countryId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "countryId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_4aaf6d02199282eb8d3931bff31" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_4aaf6d02199282eb8d3931bff31"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "countryId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "countryId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "countryId" TO "country"`);
    }

}
