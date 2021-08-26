"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTables1629998738310 = void 0;
class CreateTables1629998738310 {
    constructor() {
        this.name = 'CreateTables1629998738310';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."post" RENAME COLUMN "code" TO "codeTest"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "public"."post" RENAME COLUMN "codeTest" TO "code"`);
    }
}
exports.CreateTables1629998738310 = CreateTables1629998738310;
//# sourceMappingURL=1629998738310-CreateTables.js.map