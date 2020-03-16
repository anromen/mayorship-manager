(function() {
  "use strict";

  function DescriptiveInfo(props) {
    const attributes = props.attributes.map(a => <p>{a}</p>);
    const values = props.values.map(v => <p>{v}</p>);

    return (
      <>
        <div class="column-2">{attributes}</div>
        <div class="column-2">{values}</div>
      </>
    );
  }

  function ListInfo(props) {
    return (
      <>
        {props.values.map(v => <p>{v}</p>)}
      </>
    );
  }

  function Header(props) {
    return (
      <div class="result-top column">
        <h1 class="header">{props.name}</h1>
        <DescriptiveInfo attributes={props.attributes} values={props.values} />
      </div>
    );
  }

  function ExtraInfo(props) {
    return (
      <>
        <h2>{props.title}}</h2>
        {props.descriptive 
          ? <DescriptiveInfo attributes={props.attributes} values={props.values} />
          : <ListInfo values={props.values} />}
      </>
    );
  }

  class Person extends React.Component {
    render() {
      return (
        <div class="content column">
          <Header
            name="Juan Carlos Moreno Martínez"
            attributes={["Documento", "Lugar de nacimiento", "Fecha de nacimiento"]}
            values={["10101010", "Bogotá, Colombia", "18 / 02 / 1975"]}
          />
          <div class="central column">
            <ExtraInfo 
              title="Información laboral"
              attributes={['Empresa', 'Cargo', 'Jornada', 'Sueldo']}
              values={['Unidos S.A.S', 'Operario de máquina', 'Diurna', '$2.000.000']}
            />


            <h2>Información laboral</h2>
            <div class="column-2">
              <p>Empresa</p>
              <p>Cargo</p>
              <p>Jornada</p>
              <p>Sueldo</p>
            </div>
            <div class="column-2">
              <p>Unidos S.A.S</p>
              <p>Operario de máquina</p>
              <p>Diurna</p>
              <p>$2.000.000</p>
            </div>
          </div>

          <div class="side">
            <h2>Familiares</h2>
            <p>Sandra marcela Bohorquez Caro</p>
            <p>Sara Martínez Bohorquez</p>
            <p>Juan Martínez Bohorquez</p>
          </div>
        </div>
      );
    }
  }

  class Family extends React.Component {
    render() {
      return (
        <div class="content column">
          <div class="result-top column">
            <h1 class="header">Calle siempre viva</h1>
            <div class="column-2">
              <p>Teléfono</p>
              <p>Tipo de vivienda</p>
              <p>Ingreso familiar</p>
            </div>
            <div class="column-2">
              <p>3121564</p>
              <p>Casa</p>
              <p>$3.800.000</p>
            </div>
          </div>

          <div class="central column">
            <h2>Familia</h2>
            <p>Carlos José Martínez Castillo</p>
            <p>Sandra marcela Bohorquez Caro</p>
            <p>Sara Martínez Bohorquez</p>
            <p>Juan Martínez Bohorquez</p>
          </div>
        </div>
      );
    }
  }

  class Neighborhood extends React.Component {
    render() {
      return (
        <div class="content column">
          <div class="result-top column">
            <h1 class="header">Chapinero</h1>
            <div class="column-2">
              <p>Área</p>
              <p>Tip</p>
              <p>Estrato</p>
            </div>
            <div class="column-2">
              <p>Centro</p>
              <p>Comercial</p>
              <p>4</p>
            </div>
          </div>

          <div class="central">
            <h2>Entidades</h2>
            <p>Unidos S.A.S</p>
            <p>Industrias Capital</p>
            <p>Banana Code</p>
          </div>
        </div>
      );
    }
  }

  class Institution extends React.Component {
    render() {
      return (
        <div class="content column">
          <div class="result-top column">
            <h1 class="header">Rappi</h1>
            <div class="column-2">
              ><p>Barrio</p>
              <p>Actividad economica</p>
            </div>
            <div class="column-2">
              ><p>Chapinero</p>
              <p>Privada</p>
            </div>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(<Person />, document.getElementById("root"));
})();
