/**
 * @author: CHIKIRIAY
 * @created: 4/3/23
 * @Time: 12:59 PM
 */
import { CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

export class BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@CreateDateColumn({ name: "created_at" })
	createdAt: Date;
}
