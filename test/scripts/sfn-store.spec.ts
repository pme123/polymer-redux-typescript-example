import "mocha";
import {expect} from "chai";
import {Customer, Action, ActionType} from "../../src/scripts/entities"
import {ReduxStore} from "../../src/scripts/redux-store";

describe('ReduxStore', () => {
  let store: ReduxStore;
  const state: Customer = {
    customer: {
      age: 16,
      name: 'Herby'
    }
  };

  beforeEach(() => {
    store = new ReduxStore();
  });

  afterEach(() => {
  });

  it('should update the name if a UPDATE action was sent', () => {
    const action: Action = {
      type: ActionType.UPDATE
      , value: 'Pascal'
    };
    expect(store.appReducer(state, action).customer.name
    ).to.be.equal('Pascal');
  });

  it('should increment the age if an INCREASE action was sent', () => {
    const action: Action = {
      type: ActionType.INCREASE
    };
    expect(store.appReducer(state, action).customer.age
    ).to.be.equal(17);
  });

  it('should increment the age if a DECREASE action was sent', () => {
    const action: Action = {
      type: ActionType.DECREASE
    };
    expect(store.appReducer(state, action).customer.age
    ).to.be.equal(15);
  });

});
