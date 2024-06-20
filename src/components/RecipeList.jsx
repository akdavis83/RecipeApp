import { RecipesContainer, StyledCard } from "../styles/Recipe.styles"
import { Stack } from "../styles/UI.styles"

const RecipeList = ({recipes}) => {
  return (
    <RecipesContainer>
      <Stack gap="1rem" justify="center">
        {recipes.map((r, index)=>(
            <StyledCard key={index} bgcolor="#efefef" shadow title={r.recipe.label}>
                <h5 className="text-primary">{r.recipe.label}</h5>
                <img src={r.recipe.image} alt={r.recipe.label}/>
            </StyledCard>
        ))}

      </Stack>
    </RecipesContainer>
  )
}

export default RecipeList