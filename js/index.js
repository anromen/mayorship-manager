(function() {
  'use strict';
  
  function SelectForm(props) {
    return (
        <label>
          ¿Qué estás buscando? <br />
          <select name="search" value={props.value} onChange={props.onChange}>
            <option value="person">Persona</option>
            <option value="family">Familia</option>
            <option value="neighborhood">Barrio</option>
            <option value="institution">Institución</option>
          </select>
        </label>
    );
  }


  class ConsultForm extends React.Component {
    constructor(props) {
      super(props)
      this.handleSelect = this.handleSelect.bind(this);
      this.handleInput = this.handleInput.bind(this);

      this.state = {
        selected: "person",
        message: "1010101010",
        type: "text"
      }
    }
    
    handleSelect(event) {
      const target = event.target.value;
      
      this.setState({
        selected: target,
        message: this.getMessage(target),
        type: (target === "person") ? "number" : "text"
      });
    }

    handleInput(event) {
      this.setState({message: event.target.value});
    }

    getMessage(target) {
      switch(target) {
        case 'person':
          return "1010101010";
        case 'family':
          return "Calle 94 #53-18";
        case 'neighborhood':
          return "Chapinero";
        case 'institution':
          return "Universidad Distrital"
      }
    }
    
    render() {
      return (
        <form action="view/person.view.php">
          <SelectForm value={this.state.selected} onChange={this.handleSelect}/>
          <input type={this.state.type} value={this.state.message} onChange={this.handleInput} />
          <button type="submit" id="submit"><img className="icon" src="../images/send.svg" /></button>
        </form>
      );
    }
  }

  ReactDOM.render(
    <ConsultForm />,
    document.getElementById('root')
  );
})();