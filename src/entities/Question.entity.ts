import { Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { Domain } from "./Domain.entity";
import { QuestionType } from "./QuestionType.entity";

enum Difficulty {
	"UNKNOWN" = "unknown",
	"EASY" = "easy",
	"MEDIUM" = "medium",
	"HARD" = "hard",
}

@Entity({ name: "question" })
export class Question extends Base {
	
	@Column({ type: "varchar", nullable: false })
	description_url!: string;

	@Column({ type: "enum", enum: Difficulty, default: Difficulty.UNKNOWN })
	difficulty!: Difficulty;

	@ManyToOne(() => QuestionType, (type) => type.questions)
	type!: QuestionType;

	@ManyToOne(() => Domain, (domain) => domain.questions)
	domain!: Domain;
}
