(function() {
  "use strict";

  const fields = {
    person: ["name", "document", "birth_place", "address"],
    institution: ["name", "address", "phone", "activity", "neighborhood"],
    family: ["phone", "income", "address"]
  };

  function DinamicField(props) {
    return (
      <React.Fragment>
        <label>
          {props.attribute} <br />
          <input type="text" name={props.attribute}></input>
          <br />
        </label>
      </React.Fragment>
    );
  }

  function CreationForm(props) {
    const inputs = fields[props.consult];

    return (
      <form action="" method="post">
        {inputs.map(input => (
          <DinamicField attribute={input} />
        ))}
        <input type="submit"></input>
      </form>
    );
  }

  function SelectForm(props) {
    return (
      <form>
        <select name="method" value={props.method} onChange={props.onMethodChange}>
          <option value="create">Crear</option>
          <option value="edit">Editar</option>
        </select>
        <select name="search" value={props.consult} onChange={props.onSearchChange}>
          <option value="person">Persona</option>
          <option value="family">Familia</option>
          <option value="institution">Institución</option>
        </select>
        {props.method === "edit" && <input type="text"></input>}
        <input type="submit" />
      </form>
    );
  }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        method: "create",
        consult: "person"
      };
    }

    onMethodChange = (event) => {
      this.setState({method: event.target.value});
    }

    onSearchChange = (event) => {
      this.setState({consult: event.target.value});
    }

    render() {
      return (
        <div>
          <SelectForm 
            method={this.state.method} 
            consult={this.state.consult} 
            onMethodChange={this.onMethodChange}
            onSearchChange={this.onSearchChange}
          />
          <CreationForm consult={this.state.consult}/>
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));
})();
