export interface ResultOperation {
  status: number;
  message: string;
  messageDev: string;
  codeResult: number;
  duration: number;
  idLog: string;
}

export interface BonusData {
  typeBonusName: string;
  currentQuantity: number;
  forBurningQuantity: number;
  dateBurning: string;
}

export interface BonusResponse {
  resultOperation: ResultOperation;
  data: BonusData;
}
