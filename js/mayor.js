(function() {
  'use strict';

  function Stat(props) {
    return(
      <div class="mayor-info">
        <h2 className="stat">{props.stat}</h2>
        <p className="stat-description">{props.description}</p>
      </div>
    );
  }

  function App() {
    return (
      <div className="content column">
        <Stat stat="89" description="niños muriendose de hambre"/>
        <Stat stat="89" description="niños muriendose de hambre"/>
        <Stat stat="89" description="niños muriendose de hambre"/>
      </div>
    );
  }

  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
})();