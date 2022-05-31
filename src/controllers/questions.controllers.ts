import { Request, Response } from "express";
import { dataSource } from "../database/connection";
import { Question } from "../entities/Question.entity";

class QuestionsController {
	public async GetQuestions(req: Request, res: Response) {
		try {
			const questions = await dataSource
				.getRepository(Question)
				.find({ relations: { type: true, domain: true } });
			res.status(200).json(questions);
		} catch (e) {
			console.error(e);
			res.status(500).json({ message: "Something went wrong" });
		}
	}

	public GetQuestion(req: Request, res: Response) {
		res
			.status(200)
			.json({ message: "placeholder for get one question", id: req.params.id });
	}
}

export const questionController = new QuestionsController();