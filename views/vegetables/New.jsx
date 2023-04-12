const React = require('react');

function New(){
    return (
            <div>
                <h1>New vegetable Page</h1>

                <form action='/vegetables' method='POST'>
                    Name: <input type="text" name="name"/>
                    <br/>
                    Color: <input type="text" name="color"/>
                    <br/>
                    Is ready to eat: <input type="checkbox" name="readyToEat"/>
                    <br/>
                    <input type="submit" value="Create new vegetable"/>
                </form>
        
            </div>
        )
}

module.exports = New;
