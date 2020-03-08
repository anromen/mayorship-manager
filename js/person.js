(function() {
  'use strict';

  class Person extends React.Component {
    render() {
      return (
        <div>
          <div>
            <h1>Carlos José Martínez Castillo</h1>
            <div>
              <p>Documento</p>
              <p>Lugar de nacimiento</p>
              <p>Fecha de nacimiento</p>
            </div>
            <div>
              <p>10101010</p>
              <p>Bogotá, D.C</p>
              <p>18 / 02 / 1975</p>
            </div>
          </div>

          <div>
            <h2>Información laboral</h2>
            <div>
              <p>Empresa</p>
              <p>Cargo</p>
              <p>Jornada</p>
              <p>Sueldo</p>
            </div>
            <div>
              <p>Unidos S.A.S</p>
              <p>Operario de máquina</p>
              <p>Diurna</p>
              <p>$2.000.000</p>
            </div>
          </div>

          <div>
            <h2>Familiares</h2>
            <p>Sandra marcela Bohorquez Caro</p>
            <p>Sara Martínez Bohorquez</p>
            <p>Juan Martínez Bohorquez</p>
          </div>
        </div>
      );
    }
  }

  ReactDOM.render(
    <Person />,
    document.getElementById('root')
  );
})();