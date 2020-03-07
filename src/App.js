import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  static pizzaServer = 'http://localhost:3000/pizzas';
  constructor(props) {
    super(props);
    this.state = {
      pizzaList: [],
      selectedPizza: 0,
    }
  }

  componentDidMount() {
    fetch(App.pizzaServer)
    .then(res => res.json())
    .then(data => {
      this.setState({
        pizzaList: data,
      })
    })
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm selectedPizza={this.state.pizzaList[this.state.selectedPizza]} handleSubmit={this.handleSubmit}/>
        <PizzaList pizzaList={this.state.pizzaList} handleEdit={this.handleEdit} />
      </Fragment>
    );
  }

  // to have a controlled form:
  // handleChange = event => {
  //   const target = event.target;
  //   this.setState(prevState => {
  //     prevState.pizzaList[this.state.selectedPizza][target.name] = target.value;
  //     return {
  //       prevState,
  //     }
  //   })
  // }

  handleEdit = (pizzaId) => {
    this.setState({
      selectedPizza: pizzaId - 1,
    });
  }

  handleSubmit = (event) => {
    const formElements = event.nativeEvent.srcElement.elements;
    this.setState(prevState => {
      prevState.pizzaList[this.state.selectedPizza].topping = formElements['topping'].value;
      prevState.pizzaList[this.state.selectedPizza].size = formElements['size'].value;
      prevState.pizzaList[this.state.selectedPizza].vegetarian = formElements['vegetarian'].value;
      return {
        prevState,
      }
    },
    () => {
      fetch(`${App.pizzaServer}/${this.state.selectedPizza + 1}` , {
        method: 'PATCH',
        body: JSON.stringify(this.state.pizzaList[this.state.selectedPizza]),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(response => response.json())
      .then(json => console.log(json))
    });
    event.preventDefault();
  }
}
export default App;
