(function() {
  "use strict";

  function DescriptiveInfo(props) {
    const attributes = props.attributes.map(a => <p>{a}</p>);
    const values = props.values.map(v => <p>{v}</p>);

    return (
      <React.Fragment>
        <div className="column-2">{attributes}</div>
        <div className="column-2">{values}</div>
      </React.Fragment>
    );
  }

  function ListInfo(props) {
    return (
      <React.Fragment>
        {props.values.map(v => (
          <p>{v}</p>
        ))}
      </React.Fragment>
    );
  }

  function Header(props) {
    return (
      <div className="result-top column">
        <h1 className="header">{props.name}</h1>
        <DescriptiveInfo attributes={props.attributes} values={props.values} />
      </div>
    );
  }

  function ExtraInfo(props) {
    return (
      <React.Fragment>
        <h2>{props.title}</h2>
        {props.attributes ? (
          <DescriptiveInfo
            attributes={props.attributes}
            values={props.values}
          />
        ) : (
          <ListInfo values={props.values} />
        )}
      </React.Fragment>
    );
  }

  function Person(props) {
    let details;
    let attributes = [];
    let values = [];

    const age = (new Date() - new Date('2000 01 05')) / 31536000000).toFixed(0);
    if(age < 7) {
      details = props.details.institution;
      attributes = ["Empresa", "Cargo", "Jornada", "Sueldo"];
      values = [details.name, details.name, details.name, details.name]
    } else if (age > 7 && age < 18) {

    } else {

    }


    return (
      <div className="content column">
        <Header
          name={props.name}
          attributes={[
            "Documento",
            "Lugar de nacimiento",
            "Fecha de nacimiento"
          ]}
          values={[props.document, props.birth_place, props.birth_day]}
        />
        <div className="central column">
          <ExtraInfo
            title="Información laboral"
            attributes={["Empresa", "Cargo", "Jornada", "Sueldo"]}
            values={[
              props.details.Institution,
              "Operario de máquina",
              "Diurna",
              "$2.000.000"
            ]}
          />
        </div>

        <div className="side">
          <ExtraInfo
            title="Familiares"
            values={[
              "Sandra marcela Bohorquez Caro",
              "Sara Martínez Bohorquez",
              "Juan Martínez Bohorquez"
            ]}
          />
        </div>
      </div>
    );
  }

  function Family() {
    return (
      <div className="content column">
        <Header
          name="Calle siempre viva"
          attributes={["Teléfono", "Tipo de vivienda", "Ingreso familiar"]}
          values={["3121564", "Casa", "$3.000.000"]}
        />

        <div className="central column">
          <ExtraInfo
            title="Familiares"
            values={[
              "Carlos José Martínez Castillo",
              "Sandra marcela Bohorquez Caro",
              "Sara Martínez Bohorquez",
              "Juan Martínez Bohorquez"
            ]}
          />
        </div>
      </div>
    );
  }

  function Neighborhood() {
    return (
      <div className="content column">
        <Header
          name="Chapinero"
          attributes={["Área", "Tipo", "Estrato"]}
          values={["Centro", "Comercial", "4"]}
        />

        <div className="central">
          <ExtraInfo
            title="Entidades"
            values={["Unidos S.A.S", "Industrias Capital", "Banana Code"]}
          />
        </div>
      </div>
    );
  }

  function Institution() {
    return (
      <div className="content column">
        <Header
          name="Rappi"
          attributes={["Barrio", "Actividad económica"]}
          values={["Chapinero", "Privada"]}
        />
      </div>
    );
  }

  function App() {
    switch (window.location.pathname.replace(/^\/|\/$/g, "")) {
      case "persona":
        return <Person />;
      case "familia":
        return <Family />;
      case "barrio":
        return <Neighborhood />;
      case "entidad":
        return <Institution />;
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));
})();
