import axios from "axios";
import { useState, useEffect } from "react";

const Dashboard = () => {

    const BASE_URL = process.env.REACT_APP_BASE_URL
    const APP_ID = process.env.REACT_APP_ID
    const APP_KEY= process.env.REACT_APP_KEY

    const [ingredientList, setIngredientList] = useState([])

    const [currentIngredient, setCurrentIngredient] = useState("")

    const [recipeList, setRecipeList] = useState({})

    async function fetchRecipes() {
        
        //might need to map over the query terms here
        try{
            const res = await axios.get(`${BASE_URL}&q=${ingredientList}&app_key=${APP_KEY}&app_id=${APP_ID}`)

            setRecipeList(res.data);


        } catch ( err ){
            console.log('There has been an error trying to access the API', err);
        }

    }

    function handleChange(e) {
        setCurrentIngredient(e.target.value)
        

    }

    function addIngredient(e){
        //prevent refresh
        e.preventDefault()
        setIngredientList([...ingredientList, currentIngredient])
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
                <button onClick={fetchRecipes}>What can I cook?</button>
            </div>
            <div className="ingredientList">
                <ul id="ingredients">

                </ul>

            </div>


        </div>
    
    )


};


export default Dashboard