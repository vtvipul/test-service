import {
	Column,
	Entity,
	JoinColumn,
	OneToOne,
	PrimaryColumn,
	RelationId,
} from "typeorm";
import { Question } from "./Question.entity";

@Entity({ name: "coding_question" })
export class CodingQuestion {
	@PrimaryColumn({ type: "uuid" })
	// @Column({ type: "uuid" })
	question_id!: string;

	@OneToOne(() => Question, { cascade: true })
	@JoinColumn()
	question!: Question;

	@Column({ type: "text", nullable: true })
	boiler_plate_code!: string;

	@Column({ type: "text", nullable: true })
	example_test_case!: string;

	@Column({ type: "text", nullable: true })
	example_expected_output!: string;

	@Column({ type: "varchar", nullable: false })
	testcase_url!: string;

	@Column({ type: "varchar", nullable: false })
	expected_output_url!: string;
}