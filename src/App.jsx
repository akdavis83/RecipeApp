import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import { Container } from "./styles/UI.styles"
import Header from "./components/Header"
import axios from "axios"
import RecipeList from "./components/RecipeList"


const App = () => {

  const [recipes, setRecipes] = useState([])

  const APP_ID = process.env.REACT_APP_ID;
  const APP_KEY = process.env.REACT_APP_KEY;
  const baseUrl = 'https://api.edamam.com'

  useEffect(()=>{
    fetchRecipes('any')
  }, [])


  const fetchRecipes = async(query, meal)=>{
    let url = `${baseUrl}/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    if(meal)
      url+=`&mealType=${meal}`
    if(query!==''){
      // Fetch the data 
      const {data} = await axios.get(url)
      console.log(data.hits)
     setRecipes(data.hits)
    }
  }

  return (

    <>
    <Navbar/>
    <Container>
        <Header fetchRecipes={fetchRecipes}/>
        <RecipeList recipes={recipes}/>
    </Container>
    </>
  )
}

export default App