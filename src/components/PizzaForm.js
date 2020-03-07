import React from "react"

const PizzaForm = (props) => {
  return(
      <form className="form-row"
        key={props.selectedPizza === undefined ? 0 : props.selectedPizza.id}
        onSubmit={(event => props.handleSubmit(event))}>
        <div className="col-5">
            <input id="topping-input" type="text" name="topping" className="form-control" placeholder="Pizza Topping" 
              // onChange={ event => props.handleChange(event) }
              defaultValue={ props.selectedPizza === undefined ? null : props.selectedPizza.topping }/>
        </div>
        <div className="col">
          <select name="size" defaultValue={props.selectedPizza === undefined ? 0 : props.selectedPizza.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input name="vegetarian" className="form-check-input" type="checkbox"  defaultChecked={
              props.selectedPizza === undefined ? null : props.selectedPizza.vegetarian
              }/>
              <label className="form-check-label">Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <input type="submit" className="btn btn-success" value="Submit" />
        </div>
      </form>

  )
}

export default PizzaForm
