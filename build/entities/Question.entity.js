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
exports.Question = void 0;
const typeorm_1 = require("typeorm");
const Base_1 = require("./Base");
const Domain_entity_1 = require("./Domain.entity");
const QuestionType_entity_1 = require("./QuestionType.entity");
var Difficulty;
(function (Difficulty) {
    Difficulty["UNKNOWN"] = "unknown";
    Difficulty["EASY"] = "easy";
    Difficulty["MEDIUM"] = "medium";
    Difficulty["HARD"] = "hard";
})(Difficulty || (Difficulty = {}));
let Question = class Question extends Base_1.Base {
};
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", nullable: false }),
    __metadata("design:type", String)
], Question.prototype, "description_url", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: Difficulty, default: Difficulty.UNKNOWN }),
    __metadata("design:type", String)
], Question.prototype, "difficulty", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => QuestionType_entity_1.QuestionType, (type) => type.questions),
    __metadata("design:type", QuestionType_entity_1.QuestionType)
], Question.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Domain_entity_1.Domain, (domain) => domain.questions),
    __metadata("design:type", Domain_entity_1.Domain)
], Question.prototype, "domain", void 0);
Question = __decorate([
    (0, typeorm_1.Entity)({ name: "question" })
], Question);
exports.Question = Question;
