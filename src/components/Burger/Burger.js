import React from 'react';
import {withRouter} from 'react-router-dom';

import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    // console.log(props);
    // transform object into an array of values of ingredients
    //keys method extracts keys of an object and turns it into an array of keys -- values are not part of array
    let transformedIngredients = Object.keys(props.ingredients)
      .map(igKey => {
        // transform string value with as many elements as value
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />
        });
      })
      .reduce ((arr, el) => {
        return arr.concat(el)
      }, []);
      // reduce will transform array into something else

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default withRouter(burger);
