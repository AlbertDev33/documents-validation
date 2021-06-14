export class ValidationError extends Error {
    constructor(public message: string, public statusCode = 400) {
      super(message);
    }
  }