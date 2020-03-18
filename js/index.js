(function() {
  'use strict';
  
  function SelectForm(props) {
    return (
        <label className="select">
          ¿Qué estás buscando? <br />
          <select name="search" value={props.value} onChange={props.onChange}>
            <option value="persona">Persona</option>
            <option value="familia">Familia</option>
            <option value="barrio">Barrio</option>
            <option value="entidad">Institución</option>
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
        selected: "persona",
        message: "1010101010",
        type: "text"
      }
    }
    
    handleSelect(event) {
      const target = event.target.value;
      
      this.setState({
        selected: target,
        message: this.getMessage(target),
        type: (target === "persona") ? "number" : "text"
      });
    }

    handleInput(event) {
      this.setState({message: event.target.value});
    }

    getMessage(target) {
      switch(target) {
        case 'persona':
          return "1010101010";
        case 'familia':
          return "Calle 94 #53-18";
        case 'barrio':
          return "Chapinero";
        case 'entidad':
          return "Universidad Distrital"
      }
    }
    
    render() {
      return (
        <form action="redirect" className="center-form">
          <SelectForm value={this.state.selected} onChange={this.handleSelect}/>
          <input type={this.state.type} value={this.state.message} onChange={this.handleInput} className="big-input"/>
          <button type="submit" id="submit" className="icon-button"><img className="icon" src="../images/send.svg" /></button>
        </form>
      );
    }
  }

  function App() {
    return (
      <div className="full-page">
        <h1>MEJORAMOS PARA TI</h1>
        <ConsultForm />
      </div>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
})();