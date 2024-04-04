import api from '@services/api';

export const signInAPi = ({ uid, password }: any): any =>
  api.post('/login', { uid, password });
