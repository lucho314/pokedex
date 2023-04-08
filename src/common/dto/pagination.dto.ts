/* eslint-disable prettier/prettier */

import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  @Min(1)
  page?: number;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  limit?: number;
}
