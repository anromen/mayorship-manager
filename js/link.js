(function() {
  "use strict";

  function InstitutionInput(props) {
    if (props.age >= 18) {
      return (
        <React.Fragment>
          <input type="text" name="name" value="nombre" />
          <input type="text" name="hours" value="jornada" />
          <input type="text" name="position" value="posición" />
          <input type="text" name="wage" value="$10000" />
        </React.Fragment>
      );
    } else if (props.age < 18 && props.age >= 7) {
      return (
        <React.Fragment>
          <input type="text" name="name" value="nombre" />
          <input type="text" name="hours" value="jornada" />
          <input type="text" name="course" value="curso" />
          <input type="text" name="type" value="tipo" />
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <input type="text" name="name" value="nombre" />
          <input type="text" name="hours" value="jornada" />
          <input type="text" name="course" value="curso" />
        </React.Fragment>
      );
    }
  }

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: "institution",
        person: { age: "17" }
      };
    }

    onSelectChange = event => {
      this.setState({ value: event.target.value });
    };

    onInputChange = event => {
      this.setState({ person: { age: "6" } });
    };

    render() {
      return (
        <form>
          <input type="text" onChange={this.onInputChange}></input>
          <select
            name="search"
            value={this.state.value}
            onChange={this.onSelectChange}
          >
            <option value="address">Dirección</option>
            <option value="institution">Institución</option>
            {this.state.person.age < 7 && (
              <option value="disease">Enfermedad</option>
            )}
          </select>
          {this.state.value === "address" ? (
            <input type="text" name="address" />
          ) : this.state.value === "disease" ? (
            <input type="text" name="address" />
          ) : (
            <InstitutionInput age={this.state.person.age} />
          )}

          <input type="submit" name="submit" />
        </form>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));
})();
