import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Question } from "./Question.entity";

@Entity({ name: "mc_question" })
export class MCQ {
	// @PrimaryColumn({ type: "uuid", nullable: true })
	@PrimaryColumn({ type: "uuid" })
	question_id!: string;

	@OneToOne(() => Question, { cascade: true })
	@JoinColumn({ name: "question_id" })
	question!: Question;

	@Column({ type: "varchar", nullable: false, unique: true })
	description_url!: string;

	@Column("varchar", { array: true })
	options!: string[];

	@Column("varchar", { nullable: false })
	answer!: string;
}
