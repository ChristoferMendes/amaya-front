import { AxiosError } from "axios";
import { api } from "../service/api";

export type TryCatch<T> = Promise<
  [T, null] | [null, Error] | [null | AxiosError]
>;

export const tryCatch = async <T>(promise: Promise<T>): TryCatch<T> => {
  try {
    const data = await promise;
    return [data, null];
  } catch (err) {
    return [null, err as Error | AxiosError];
  }
};
