import React, { Component } from 'react';
import Pizza from '../components/Pizza'
class PizzaList extends Component {

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Topping</th>
            <th scope="col">Size</th>
            <th scope="col">Vegetarian?</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.pizzaList.map(pizza => {
              return (
                <Pizza pizza={pizza} handleEdit={this.props.handleEdit} key={pizza.id} />
                
              );
            })
          }
        </tbody>
      </table>
    );
  }

}

export default PizzaList;


/*

<tr key={pizza.id}>
                  <td>{pizza.topping}</td>
                  <td>{pizza.size}</td>
                  <td>{pizza.vegetarian ? 'Yes' : 'No'}</td>
                  <td><button onClick={() => this.props.handleEdit(pizza.id)} id={pizza.id}>Edit Pizza</button></td>
                </tr>
/*/