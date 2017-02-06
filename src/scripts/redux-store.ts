import {Store, createStore} from "redux";
import {Customer, Action, ActionType} from "./entities"
import * as PolymerRedux from "../../bower_components/polymer-redux/polymer-redux.js"

export class ReduxStore {

  public ReduxBehavior: any;
  initialState: Customer = {customer: {age: 30, name: 'Polymer Redux'}};

  constructor() {
    const store: Store<Customer> = createStore(this.appReducer);
    this.ReduxBehavior = PolymerRedux(store);
  }

  appReducer = (state: Customer, action: Action) => {
    state = state || this.initialState;
    const customer = {
      name: this.nameReducer(state.customer.name, action),
      age: this.ageReducer(state.customer.age, action),
    };
    return {customer: customer};
  };

  nameReducer = (state: string, action: Action) => {
    switch (action.type) {
      case ActionType.UPDATE:
        return action.value || state;
      default:
        return state;
    }
  };

  ageReducer = (state: number, action: Action)  => {
    switch (action.type) {
      case ActionType.INCREASE:
        return state + 1;
      case ActionType.DECREASE:
        return state - 1;
      default:
        return state;
    }
  }
}
