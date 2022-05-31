import {
	Entity,
	Column,
	PrimaryGeneratedColumn,
	BaseEntity,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn,
} from "typeorm";

@Entity()
export abstract class Base extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id!: string;

	@CreateDateColumn()
	created_at!: Date;

	@UpdateDateColumn()
	updated_at!: Date;

	@DeleteDateColumn({ nullable: true })
	deleted_at?: Date;
}
