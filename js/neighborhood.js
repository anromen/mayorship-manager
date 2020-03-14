(function() {
  'use strict';

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

  ReactDOM.render(
    <Neighborhood />,
    document.getElementById('root')
  );
})();