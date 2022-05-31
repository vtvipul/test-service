"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionController = void 0;
const connection_1 = require("../database/connection");
const Question_entity_1 = require("../entities/Question.entity");
class QuestionsController {
    GetQuestions(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const questions = yield connection_1.dataSource
                    .getRepository(Question_entity_1.Question)
                    .find({ relations: { type: true, domain: true } });
                res.status(200).json(questions);
            }
            catch (e) {
                console.error(e);
                res.status(500).json({ message: "Something went wrong" });
            }
        });
    }
    GetQuestion(req, res) {
        res
            .status(200)
            .json({ message: "placeholder for get one question", id: req.params.id });
    }
}
exports.questionController = new QuestionsController();
