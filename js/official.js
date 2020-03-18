(function() {
  "use strict";

  const fields = {
    person: ["name", "document", "birth_place", "address"],
    institution: ["name", "address", "phone", "activity", "neighborhood"]
  };

  const names = {
    name: "Nombre",
    document: "Documento",
    birth_place: "Lugar de nacimiento",
    address: "Dirección",
    phone: "Teléfono",
    activity: "Tipo de actividad",
    neighborhood: "Barrio",
    create: "crear",
    edit: "actualizar"
  };

  function DinamicField(props) {
    return (
      <React.Fragment>
        <label className="create-input">
          {names[props.attribute]} <br />
          <input type="text" name={props.attribute} value={props.value}></input>
          <br />
        </label>
      </React.Fragment>
    );
  }

  function CreationForm(props) {
    const inputs = fields[props.consult];

    return (
      <form action="" method="post" class="central-form">
        {inputs.map(input => (
          <DinamicField attribute={input} value={props.element[input]}/>
        ))}

        <input type="submit" value="Actualizar" class="submit-button"></input>
      </form>
    );
  }

  function SelectForm(props) {
    return (
      <form className="central-form">
        <select
          name="method"
          value={props.method}
          onChange={props.onMethodChange}
          className="multi-secondary"
        >
          <option value="create">Crear</option>
          <option value="edit">Editar</option>
        </select>
        <select
          name="search"
          value={props.consult}
          onChange={props.onSearchChange}
          className="multi-secondary"
        >
          <option value="person">Persona</option>
          <option value="institution">Institución</option>
        </select>
        {props.method === "edit" && (
          <input type="text" name="key" onChange={props.onInputChange} class="hidden-input"></input>
        )}
      </form>
    );
  }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        method: "create",
        consult: "person",
        value: "",
        element: ""
      };
    }

    onMethodChange = event => {
      this.setState({ method: event.target.value });
    };

    onSearchChange = event => {
      this.setState({ consult: event.target.value });
    };

    onInputChange = event => {
      const url = '';

      this.setState({ 
        value: event.target.value,
        element: await fetch(url) //hacer la consulta en este punto
      });
    };

    render() {
      return (
        <div>
          <SelectForm
            method={this.state.method}
            consult={this.state.consult}
            onMethodChange={this.onMethodChange}
            onSearchChange={this.onSearchChange}
            onInputChange={this.onInputChange}
          />
          <CreationForm consult={this.state.consult} element={this.state.element} />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));
})();
