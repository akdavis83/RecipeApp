import { Field, Form, Formik } from "formik"
import { Button, HeaderContainer } from "../styles/Header.styles"
import { Card, Stack } from "../styles/UI.styles"

const Header = ({fetchRecipes}) => {

    const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
    const initialValues = {query:"", meal:mealTypes[0].toLocaleLowerCase()}

    const submitHandler = (values)=>{

        fetchRecipes(values.query, values.meal)
    }

  return (

    <HeaderContainer>
        <h2 className="text-secondary text-center"> Recipe App</h2>
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            <Form>
                <Card bgcolor="#efefef" shadow={true}>
                    <Stack gap="1rem" >
                        <Field type="search" placeholder="E.g. Pizza" autoComplete="off" style={{flex:1}} name="query"/>
                        <Field as="select" name="meal"> 
                            {mealTypes.map((meal, index)=>(
                                <option key={index} value={meal.toLowerCase()}> {meal}</option>
                            ))}
                        </Field>
                        <Button>
                            Search
                        </Button>
                    </Stack>
                </Card>
            </Form>
        </Formik>
    </HeaderContainer>
  )
}

export default Header