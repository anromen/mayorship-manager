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
    const age = (
      (new Date() - new Date(props.person.birth_day)) /
      31536000000
    ).toFixed(0);
    console.log(age);

    const institution = props.person.details.institution;
    const diseases = props.person.details.diseases;
    let attributes;
    let values;
    let title;

    if (institution) {
      title =
        age >= 7 && age < 18 ? "Información académica" : "Información laboral";
      attributes =
        age >= 7 && age < 18
          ? ["Escuela", "Tipo", "Jornada", "Grado"]
          : ["Empresa", "Cargo", "Jornada", "Sueldo"];
      values =
        age >= 7 && age < 18
          ? [
              institution.name,
              institution.type,
              institution.hours,
              institution.course
            ]
          : [
              institution.name,
              institution.position,
              institution.hours,
              institution.wage
            ];
    } else if (diseases) {
      title = "Enfermedades";
      attributes = diseases.map(disease => disease.date);
      values = diseases.map(disease => disease.name);
    }

    console.log(props.person.details.diseases);
    console.log(values);

    return (
      <div className="content column">
        <Header
          name={props.person.name}
          attributes={[
            "Documento",
            "Lugar de nacimiento",
            "Fecha de nacimiento"
          ]}
          values={[
            props.person.document,
            props.person.birth_place,
            props.person.birth_day
          ]}
        />
        <div className="central column">
          <ExtraInfo
            title={title}
            attributes={attributes}
            values={values}
          />
          {diseases && (
            <ExtraInfo
              title="Enfermedades"
              attributes={diseases.map(disease => disease.date)}
              values={diseases.map(disease => disease.name)}
            />
          )}
          }
        </div>

        <div className="side">
          <ExtraInfo
            title="Familiares"
            values={props.person.family.map(person => person.name)}
          />
        </div>
      </div>
    );
  }

  function Family(props) {
    return (
      <div className="content column">
        <Header
          name={props.family.name}
          attributes={["Teléfono", "Tipo de vivienda", "Ingreso familiar"]}
          values={[props.family.phone, props.family.type, props.family.income]}
        />

        <div className="central column">
          <ExtraInfo
            title="Familiares"
            values={props.family.members.map(member => member.name)}
          />
        </div>

        <div className="side">
          <ExtraInfo
            title="Rutas"
            values={props.person.routes.map(route => route.name)}
          />
        </div>
      </div>
    );
  }

  function Neighborhood(props) {
    return (
      <div className="content column">
        <Header
          name={props.neighborhood.name}
          attributes={["Área", "Tipo", "Estrato"]}
          values={[
            props.neighborhood.area,
            props.neighborhood.type,
            props.neighborhood.stratum
          ]}
        />

        <div className="central">
          <ExtraInfo
            title="Entidades"
            values={props.neighborhood.institutions.map(entity => entity.name)}
          />
        </div>
      </div>
    );
  }

  function Institution(props) {
    return (
      <div className="content column">
        <Header
          name={props.institution.name}
          attributes={["Barrio", "Actividad económica"]}
          values={[
            props.institution.neighborhood.name,
            props.institution.activity
          ]}
        />
      </div>
    );
  }

  function App() {
    switch (window.location.pathname.replace(/^\/|\/$/g, "")) {
      case "persona":
        return <Person person={} />;
      case "familia":
        return <Family family={} />;
      case "barrio":
        return <Neighborhood neighborhood={} />;
      case "entidad":
        return <Institution institution={} />;
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));
})();
