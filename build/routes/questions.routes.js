"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionRouter = void 0;
const AppRouter_1 = require("../common/AppRouter");
const questions_controllers_1 = require("../controllers/questions.controllers");
const questionRouter = AppRouter_1.AppRouter.Router;
exports.questionRouter = questionRouter;
questionRouter.get("/questions", questions_controllers_1.questionController.GetQuestions);
questionRouter.get("/questions/:id", questions_controllers_1.questionController.GetQuestion);
