import { APIResponse } from '@interfaces/axios-response.dto';

export interface IMeta {
  total: number;
  per_page: number;
  current_page: number;
  last_page: number;
}

export type IListDTO = {
  page?: number;
  perPage?: number;
  search?: string;
  [x: string]: any;
};

export type IListAPI<T> = APIResponse<{
  meta: IMeta;
  data: T[];
}>;
