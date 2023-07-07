
import { useForm } from "../hooks/useForm"




export const FormWithCustomHook = () => {


    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const {username, email, password} = formState;





    return (
        <>
            <div>Formulario con custom Hook</div>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />

            <input
                type="email"
                className="form-control mt-3"
                placeholder="francisco@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className="form-control mt-3"
                placeholder="Contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>


        </>
    )
}
