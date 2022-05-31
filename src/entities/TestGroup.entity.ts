import { Column, Entity, OneToMany } from "typeorm";
import { Base } from "./Base";
import { Test } from "./Test.entity";

@Entity({ name: "test_group" })
export class TestGroup extends Base {
	@Column({ type: "varchar", nullable: true })
	description!: string;

	@OneToMany(() => Test, (tests) => tests.group)
	tests!: Test[];
}
