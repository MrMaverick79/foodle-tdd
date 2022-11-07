import { useState } from "react";

const Dashboard = () => {

    const [ingredientList, setIngredientList] = useState([])

    const [currentIngredient, setCurrentIngredient] = useState("")



    function handleChange(e) {
        setCurrentIngredient(e.target.value)
        

    }

    function addIngredient(e){
        //prevent refresh
        e.preventDefault()

        //Add the ingredient to the DOM
        let ul = document.getElementById("ingredients")
        let li = document.createElement('li');
        li.classList.add('ingredient')
        li.appendChild(document.createTextNode(currentIngredient));
        ul.appendChild(li);   
       
       
        //Clear the input
        let input = document.getElementById('enterIngredient')
        input.value = ""
        

    }


    return (
        <div className="dashboard">
            <h1>Welcome to Foodle</h1>
            <div className="search">
                <input type='text'
                id="enterIngredient"
                onChange={handleChange}
                placeholder='What is in your fridge?
                '></input>
                <button
                onClick={addIngredient}>Add Ingredient</button>
                <button>What can I cook?</button>
            </div>
            <div className="ingredientList">
                <ul id="ingredients">

                </ul>

            </div>


        </div>
    
    )


};

export default Dashboard