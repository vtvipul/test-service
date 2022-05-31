import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "./Base";
import { Question } from "./Question.entity";

@Entity({ name: "question_type" })
export class QuestionType extends Base {
	@Column({ nullable: false, type: "varchar", unique: true })
	type!: string;

	@OneToMany(() => Question, (questions) => questions.type)
	questions!: Question[];
}
