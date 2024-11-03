import { IsInt, IsString } from "class-validator";

export class createPropertyDto{
    @IsString()
    name : string;
    @IsString()
    description : string;
    @IsInt()
    area : number;
}
