import { AxiosResponse } from 'axios';

export type APIResponse<T> = Promise<AxiosResponse<T>>;
