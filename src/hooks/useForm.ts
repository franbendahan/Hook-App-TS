import { useState } from "react";
import { ITuInterface } from "../Interfaces/ITuInterfaz";


export const useForm = (initialForm: ITuInterface = {}) => {
    
    const [formState, setFormState] = useState( initialForm );

    
    // desestructuro el evento porque solo necesito el target
    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        // del target necesito name y value
        const { name, value } = target;

        setFormState({
            //desestructuro el formState para mantener todos los valores del formulario
            ...formState,
            
            [name]: value
        });

    }

    const onResetForm = () => {

        setFormState ( initialForm);
    }

    return {
        // desestructuramos el formState para poder enviar todas las propiedades
        ...formState,

        formState,
        onInputChange,
        onResetForm
  }
  
}
