const React = require("react");
function Index(props) {
  const { vegetables } = props;
  console.log(vegetables);
  return (
    <div>
      <h1>vegetables Index Page</h1>
      <nav>
    <a href="/vegetables/new">Create a New Vegetable</a>
</nav>
      <ul>
        {vegetables.map((vegetable, i) => {
          return (
            <li key={vegetable._id}>
              The <a href={`/vegetables/${vegetable._id}`}>{ vegetable.name }</a>
                   is { vegetable.color}{" "}
              {vegetable.readyToEat 
              ? " Its ready to eat" 
              : " Its not ready to eat"}
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}

module.exports = Index;
