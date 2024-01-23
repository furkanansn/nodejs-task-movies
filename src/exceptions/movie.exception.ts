// Packages
import { StatusCodes } from "http-status-codes";

// Exceptions
import { CustomException, InternalAPIError } from "./custom.exception";

export type MovieErrorCodes = "NOT_FOUND";

export class MovieException extends CustomException {
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR;

  constructor(public errorCode: MovieErrorCodes) {
    super(errorCode);

    switch (errorCode) {
      case "NOT_FOUND":
        this.statusCode = StatusCodes.NOT_FOUND;
        break;
    }
  }

  serializeErrors(): InternalAPIError {
    return {
      error: {
        status: this.statusCode,
        errorCode: this.errorCode,
      },
    };
  }
}
