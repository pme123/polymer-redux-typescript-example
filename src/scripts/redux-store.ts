import {Store, createStore} from "redux";
import {ReduxState, Customer, ReduxAction, ActionType} from "./entities";
import * as PolymerRedux from "../../bower_components/polymer-redux/polymer-redux.js";

export class ReduxStore {

  static ReduxBehavior: any;
  initialState: ReduxState = {customer: {age: 30, name: 'Polymer Redux'}};

  constructor() {
    const store: Store<ReduxState> = createStore(this.appReducer);
    ReduxStore.ReduxBehavior = PolymerRedux(store);
  }

  appReducer = (state: ReduxState, action: ReduxAction) => {
    state = state || this.initialState;
    const customer: Customer = {
      name: this.nameReducer(state.customer.name, action),
      age: this.ageReducer(state.customer.age, action),
    };
    return {
      customer,
    };
  }

  nameReducer = (state: string, action: ReduxAction) => {
    switch (action.type) {
      case ActionType.UPDATE:
        return action.value || state;
      default:
        return state;
    }
  }

  ageReducer = (state: number, action: ReduxAction)  => {
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
