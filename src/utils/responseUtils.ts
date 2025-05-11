import { Response } from 'express';
import { ErrorResponseInterface, SuccessResponseInterface } from '../types';

class ResponseUtil {
    private static message = '';
    private static statusCode = 200;
    private static data: any = null;
    private static error: any = null;
    private static type: 'success' | 'error' = 'success';

    static handleSuccess(statusCode: number, message: string, data: any): void {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.type = 'success';
    }

    static handleError(statusCode: number, error: string): void {
        this.statusCode = statusCode;
        this.error = error;
        this.type = 'error';
    }

    static response(res: Response): Response {
        if (this.type === 'success') {
            const response: SuccessResponseInterface = {
            status: this.statusCode,
            message: this.message,
            data: this.data,
            };
            return res.status(this.statusCode).json(response);
        } else {
            const response: ErrorResponseInterface = {
            status: this.statusCode,
            error: this.error,
            };
            return res.status(this.statusCode).json(response);
        }
    }
}

export default ResponseUtil;
