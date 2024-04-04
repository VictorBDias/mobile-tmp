import { APIResponse } from '@interfaces/axios-response.dto';

export type IDestroyDTO = {
  id: number;
  productIds?: number[];
};

export type IDestroyAPI = APIResponse<void>;
