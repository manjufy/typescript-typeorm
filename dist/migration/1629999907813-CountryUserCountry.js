"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryUserCountry1629999907813 = void 0;
class CountryUserCountry1629999907813 {
    constructor() {
        this.name = 'CountryUserCountry1629999907813';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "country" TO "countryId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "countryId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "countryId" integer`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD CONSTRAINT "FK_4aaf6d02199282eb8d3931bff31" FOREIGN KEY ("countryId") REFERENCES "country"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."user" DROP CONSTRAINT "FK_4aaf6d02199282eb8d3931bff31"`);
        await queryRunner.query(`ALTER TABLE "public"."user" DROP COLUMN "countryId"`);
        await queryRunner.query(`ALTER TABLE "public"."user" ADD "countryId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "public"."user" RENAME COLUMN "countryId" TO "country"`);
    }
}
exports.CountryUserCountry1629999907813 = CountryUserCountry1629999907813;
//# sourceMappingURL=1629999907813-CountryUserCountry.js.map