(function() {
  "use strict";

  function Stat(props) {
    return (
      <div class="mayor-info">
        <h2 className="stat">{props.stat}</h2>
        <p className="stat-description">{props.description}</p>
      </div>
    );
  }

  function App() {
    return (
      <div className="content column">
        <Stat
          stat={
            /*En estos espacios se agrega la variable tomada de mayor.view.php*/
          }
          description="salario promedio de las personas."
        />
        <Stat stat={} description="salario promedio de las personas." />
        <Stat stat={} description="enfermedad más frecuente." />
      </div>
    );
  }

  ReactDOM.render(<App />, document.getElementById("root"));
})();
