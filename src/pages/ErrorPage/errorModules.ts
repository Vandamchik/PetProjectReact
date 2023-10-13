interface IError {
    isError: boolean;
    message: string;
    error: {
        message: string;
        stack: string;
    }
    data: string | unknown;
    internal: boolean;
    status: number;
    statusText: string;
}

export type TError = Partial<IError> | unknown
