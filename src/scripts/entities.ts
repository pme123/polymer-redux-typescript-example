
export interface Customer {
  customer: {
    age: number;
    name: string;
  };
}

export interface Action {
  type: ActionType;
  value?: string;
}

export enum ActionType {
  UPDATE, INCREASE, DECREASE
}
