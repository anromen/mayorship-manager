(function() {
  'use strict';

  class Family extends React.Component {
    render() {
      return(
        <div>
          <div>
            <h1>Calle siempre viva</h1>
            <div>
              <p>Teléfono</p>
              <p>Tipo de vivienda</p>
              <p>Ingreso familiar</p>
            </div>
            <div>
              <p>3121564</p>
              <p>Casa</p>
              <p>$3.800.000</p>
            </div>
          </div>

          <div>
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

  ReactDOM.render(
    <Family />,
    document.getElementById('root')
  );
})();