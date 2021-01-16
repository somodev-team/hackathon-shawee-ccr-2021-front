import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export interface IPersonProfile {
  userId: string;
  name: string;
  born_date: string;
  phone: string;
  address_state: string;
  address_city: string;
  pwd: string;
}

export class PersonProfile implements IPersonProfile {
  @IsUUID('4')
  userId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  born_date: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  address_state: string;

  @IsString()
  @IsNotEmpty()
  address_city: string;

  @IsBoolean()
  pwd: string;

  constructor(props: IPersonProfile) {
    this.userId = props.userId;
    this.name = props.name;
    this.born_date = props.born_date;
    this.phone = props.phone;
    this.address_state = props.address_state;
    this.address_city = props.address_city;
    this.pwd = props.pwd;
  }
}
