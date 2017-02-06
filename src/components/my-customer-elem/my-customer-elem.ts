import {Customer, ReduxAction, ActionType} from "../../scripts/entities";
import {ReduxStore} from "../../scripts/redux-store";

@component('my-customer-elem')
@behavior(ReduxStore.ReduxBehavior)
class CustomerElem extends polymer.Base {

  // statePath is an extension of Polymer.property - throws transpile exception
  @property({type: Object, statePath: 'customer'} as any)
  customer: Customer;

  //// stand-in properties for behavior mixins
  // ReduxBehavior
  dispatch: (action: ReduxAction) => void;

  @listen('increaseButton.click')
  _handleIncrease() {
    this.dispatch({
      type: ActionType.INCREASE,
    });
  }

  @listen('decreaseButton.click')
  _handleDecrease() {
    this.dispatch({
      type: ActionType.DECREASE,
    });
  }

  @listen('updateButton.click')
  _handleUpdate() {
    this.dispatch({type: ActionType.UPDATE, value: this.$.nameTextField.value});
    this.$.nameTextField.value = '';
  }

  @listen('nameTextField.keypress')
  _handleKeypress(e: any) {
    if (e.which === 13 && !!e.currentTarget.value.trim()) {
      this._handleUpdate();
    }
  }
}

CustomerElem.register();
