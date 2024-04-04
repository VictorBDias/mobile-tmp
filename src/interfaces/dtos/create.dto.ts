import { APIResponse } from '@interfaces/axios-response.dto';

export type ICreateDTO<T> = {
  data: Omit<T, 'id'>;
  [key: string]: any;
};

export type ICreateAPI<T> = APIResponse<T>;
