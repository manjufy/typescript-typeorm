"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1629998658192 = void 0;
class CreateTables1629998658192 {
    constructor() {
        this.name = 'CreateTables1629998658192';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."post" ADD "code" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."post" DROP COLUMN "code"`);
    }
}
exports.CreateTables1629998658192 = CreateTables1629998658192;
//# sourceMappingURL=1629998658192-CreateTables.js.map