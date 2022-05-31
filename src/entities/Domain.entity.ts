import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "./Base";
import { Question } from "./Question.entity";

@Entity({ name: "domain" })
export class Domain extends Base {
	@Column({ type: "varchar", unique: true, nullable: false })
	domain!: string;

	@OneToMany(() => Question, (questions) => questions.domain)
	questions!: Question[];
}
