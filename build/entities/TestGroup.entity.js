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
exports.TestGroup = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const Test_entity_1 = require("./Test.entity");
let TestGroup = class TestGroup extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: true }),
    __metadata("design:type", String)
], TestGroup.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Test_entity_1.Test, (tests) => tests.group),
    __metadata("design:type", Array)
], TestGroup.prototype, "tests", void 0);
TestGroup = __decorate([
    (0, typeorm_1.Entity)({ name: "test_group" })
], TestGroup);
exports.TestGroup = TestGroup;
