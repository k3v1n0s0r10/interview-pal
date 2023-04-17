import { AxiosError } from "axios";

export const handleAxiosException = (exception: any) => {
  let body: any = {
    message: "Internal server error",
    exception,
  };
  let options: ResponseInit = { status: 500 };

  if (exception instanceof AxiosError) {
    const axiosError = exception as AxiosError;
    if (axiosError.response) {
      const { status, data } = axiosError.response;
      body = data;
      options.status = status;
    }
  }

  return { body, options };
};
