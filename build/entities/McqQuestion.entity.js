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
exports.MCQ = void 0;
const typeorm_1 = require("typeorm");
const Question_entity_1 = require("./Question.entity");
let MCQ = class MCQ {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: "uuid" }),
    __metadata("design:type", String)
], MCQ.prototype, "question_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Question_entity_1.Question, { cascade: true }),
    (0, typeorm_1.JoinColumn)({ name: "question_id" }),
    __metadata("design:type", Question_entity_1.Question)
], MCQ.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false, unique: true }),
    __metadata("design:type", String)
], MCQ.prototype, "description_url", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { array: true }),
    __metadata("design:type", Array)
], MCQ.prototype, "options", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { nullable: false }),
    __metadata("design:type", String)
], MCQ.prototype, "answer", void 0);
MCQ = __decorate([
    (0, typeorm_1.Entity)({ name: "mc_question" })
], MCQ);
exports.MCQ = MCQ;
