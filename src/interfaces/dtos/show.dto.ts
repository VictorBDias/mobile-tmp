import { APIResponse } from '@interfaces/axios-response.dto';

export type IShowDTO = {
  id: number;
  [x: string]: any;
};

export type IShowAPI<T> = APIResponse<T>;
