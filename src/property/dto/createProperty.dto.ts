import { IsInt, IsPositive, IsString, Length } from "class-validator";

export class createPropertyDto{
    @IsString({always : true})
    @Length(2,10 , {message : "Error on length"})
    name : string;
    @IsString()
    @Length(2,10 , {groups : ['create']})
    @Length(5,15,{groups:['update']})
    description : string;
    @IsInt({always : true})
    @IsPositive()
    area : number;
}
