import { Check, Column, Entity, ManyToOne } from "typeorm";
import { Base } from "./Base";
import { TestGroup } from "./TestGroup.entity";

// @Check('"duration" > 0', '"start_date" < "end_date"')
@Entity({ name: "test" })
export class Test extends Base {
	@Column({ type: "varchar", nullable: false })
	title!: string;

	@Column({type:"numeric", nullable: false })
	duration!: number;

	@Column( {type:"timestamptz", nullable: false })
	start_date!: Date;

	@Column({type:"timestamptz"})
	end_date!: Date;

	@ManyToOne(() => TestGroup, (group) => group.tests)
	group!: TestGroup;
}
