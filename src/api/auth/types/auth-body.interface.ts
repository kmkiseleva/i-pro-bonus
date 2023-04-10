export interface AuthBody {
  idClient: string;
  accessToken: string;
  paramName: string;
  paramValue: string;
  latitude: number;
  longitude: number;
  sourceQuery: number;
}

export interface Result {
  codeResult: number;
  duration: number;
  idLog: string;
  message: string;
  messageDev: string | null;
  status: number;
}

export interface AuthResponse {
  result: Result;
  accessToken: string;
}
