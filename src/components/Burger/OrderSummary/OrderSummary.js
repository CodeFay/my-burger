import React, {Component} from 'react';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  // This could be a functional component; doesn't have to a class since we're not running component life cycles
  render () {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}:</span> {this.props.ingredients[igKey]}</li>;
      });

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout? </p>
        <Button
          clicked={this.props.purchaseCanceled}
          btnType="Danger"
        >CANCEL</Button>
        <Button
          clicked={this.props.purchaseContinued}
          btnType="Success"
        >CONTINUE</Button>
      </React.Fragment>
    )
  }
}

export default OrderSummary;
