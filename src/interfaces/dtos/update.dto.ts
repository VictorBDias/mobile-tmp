import { APIResponse } from '@interfaces/axios-response.dto';

export type IUpdateDTO<T> = {
  id: number;
  data: Omit<T, 'id'>;
  [key: string]: any;
};

export type IUpdateAPI<T> = APIResponse<T>;
