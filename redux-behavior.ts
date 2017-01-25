module redux {

  export interface Customer {
    customer: {
      age: number
      , name: string
    }
  }

  export interface Action {
    type: string
    , value?: string
  }

  let initialState = {customer: {age: 30, name: 'Polymer Redux'}}
  let store: Redux.Store<Customer> = Redux.createStore(appReducer);
  // PolymerRedux has no typings - transpile error
  export const ReduxBehavior = PolymerRedux(store);

  function appReducer(state: Customer, action: Action) {
    state = state || initialState;
    let customer =
      {
        name: nameReducer(state.customer.name, action),
        age: ageReducer(state.customer.age, action)
      };
    return {customer: customer}
  }

  function nameReducer(state: string, action: Action) {
    switch (action.type) {
      case 'update':
        return action.value || state;
      default:
        return state;
    }
  }

  function ageReducer(state: number, action: Action) {
    switch (action.type) {
      case 'increase':
        return state + 1;
      case 'decrease':
        return state - 1;
      default:
        return state
    }
  }
}
