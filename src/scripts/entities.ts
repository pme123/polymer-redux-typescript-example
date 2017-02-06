export interface ReduxState {
  customer: Customer;
}

export interface Customer {
  age: number;
  name: string;
}

export interface ReduxAction {
  type: ActionType;
  value?: string;
}

export enum ActionType {
  UPDATE, INCREASE, DECREASE,
}
