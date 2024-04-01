import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

export interface StorageService {
  setItem: <T>(key: string, value: T) => Promise<void>;
  getItem: <T>(key: string) => Promise<T | null>;
  removeItem: (key: string) => Promise<void>;
  containsItem: (key: string) => Promise<boolean>;
}

export const mmkvStorage: StorageService = {
  getItem: async key => {
    const item = storage.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },

  setItem: async (key, value) => {
    storage.set(key, JSON.stringify(value));
  },

  removeItem: async key => {
    storage.delete(key);
  },

  containsItem: async key => {
    if (storage.contains(key)) return true;

    return false;
  },
};
