class HttpException extends Error {
  status: number;
  message: string;
  data?: Record<string, unknown>;
  constructor(status: number, message: string, data?: Record<string, unknown>) {
    super(message);
    this.status = status;
    this.message = message;
    this.data = data;
  }
}

export default HttpException;
