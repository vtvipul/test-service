"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Test = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const TestGroup_entity_1 = require("./TestGroup.entity");
// @Check('"duration" > 0', '"start_date" < "end_date"')
let Test = class Test extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Test.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", nullable: false }),
    __metadata("design:type", Number)
], Test.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz", nullable: false }),
    __metadata("design:type", Date)
], Test.prototype, "start_date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "timestamptz" }),
    __metadata("design:type", Date)
], Test.prototype, "end_date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TestGroup_entity_1.TestGroup, (group) => group.tests),
    __metadata("design:type", TestGroup_entity_1.TestGroup)
], Test.prototype, "group", void 0);
Test = __decorate([
    (0, typeorm_1.Entity)({ name: "test" })
], Test);
exports.Test = Test;
