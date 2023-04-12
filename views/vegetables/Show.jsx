const React = require('react');

//using functional component
function Show(props){
    const {vegetable} = props;
    console.log(vegetable);
    return (
        <div>
            <h1>Hello Show Page</h1>
            <p>The {vegetable.name}  is  {vegetable.color}
            {vegetable.readyToEat 
                ? " Its ready to eat" 
                : " It is not ready to eat... Cant touch this"}
            </p>
        </div>
)
}

module.exports = Show;