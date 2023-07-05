import { useEffect, useState } from "react"
import { Message } from "./Message";



export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'francisco',
        email: 'francisco@gmail.com'
    });

    const { username, email } = formState

    // desestructuro el evento porque solo necesito el target
    const onInputChange = ( {target} : React.ChangeEvent<HTMLInputElement> ) => {
        // del target necesito name y value
        const { name, value } = target;
        
        
        

        setFormState({
            ...formState,
            [ name ]: value
        });

    }

    // useEffect( () => {
    //     console.log('useEffect called!');
        
    // },[])

    // useEffect( () => {
    //     console.log('formState changed!');
        
    // },[formState])

    // useEffect( () => {
    //     console.log('email changed!');
        
    // },[email])





    return (
        <>
            <div>Formulario Simple</div>
            <hr />

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }

            />

            <input 
                type="email"
                className="form-control mt-3"
                placeholder="francisco@gmail.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />

            {
                (username === 'francisco2') && <Message/>
            }


        </>
    )
}
