import { IsInt, IsPositive } from "class-validator";


export class CreateIdDto {
    @IsInt()
    @IsPositive()
    id : number;

}