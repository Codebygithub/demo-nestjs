import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
@Entity()
export class User {
      @PrimaryGeneratedColumn()
      id: number;
    
      @Column()
      @IsNotEmpty()
      firstName: string;
    
      @Column()
      @Exclude()
      lastName: string;
    
      @Column({ default: true })
      isActive: boolean;
    }
