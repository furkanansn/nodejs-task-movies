import { Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";

@Entity("movies")
@Index("idx_slug", ["slug"], { unique: true })
@Index("idx_name", ["name"])
@Index("idx_genres", ["genres"])
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, length: 255, type: "varchar" })
  slug: string;

  @Column({ length: 255, type: "varchar" })
  name: string;

  @Column({ type: "text" })
  description: string;

  @Column({ length: 255, type: "varchar" })
  genres: string;

  @Column("decimal", { precision: 3, scale: 1 })
  rate: number;

  @Column({ length: 20, type: "varchar" })
  length: string;

  @Column({ length: 255, type: "varchar" })
  img: string;
}
