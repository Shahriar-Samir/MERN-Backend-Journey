import { Response } from 'express';

type TResponse<T> = {
  success: boolean;
  message?: string;
  statusCode: number;
  data: T;
};

export const sendResponse = <T>(res: Response, data: TResponse<T>) => {
  return res.status(data.statusCode).json({
    success: data.success,
    message: data.message,
    statusCode: data.statusCode,
  });
};
