import {ReduxStore} from '../../scripts/redux-store';
import ReduxBehavior = ReduxStore.ReduxBehavior;
import Customer = ReduxStore.Customer;
import Action = ReduxStore.Action;

@component('my-customer-elem')
@behavior(ReduxBehavior)
class CustomerElem extends polymer.Base {

  // statePath is an extension of Polymer.property - throws transpile exception
  @property({type: Object, statePath: 'customer'} as any)
  customer: Customer;

  //// stand-in properties for behavior mixins
  // ReduxBehavior
  dispatch: (action: Action) => void;

  @listen('increaseButton.click')
  _handleIncrease() {
    this.dispatch({type: 'increase'});
  }

  @listen('decreaseButton.click')
  _handleDecrease() {
    this.dispatch({type: 'decrease'});
  }

  @listen('updateButton.click')
  _handleUpdate() {
    this.dispatch({type: 'update', value: this.$.nameTextField.value});
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
