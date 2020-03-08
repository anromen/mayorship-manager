(function() {
  'use strict';

  class Neighborhood extends React.Component {
    render() {
      return (
        <div>
          <div>
            <h1>Chapinero</h1>
            <div>
              <p>Área</p>
              <p>Tip</p>
              <p>Estrato</p>
            </div>
            <div>
              <p>Centro</p>
              <p>Comercial</p>
              <p>4</p>
            </div>
          </div>

          <div>
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