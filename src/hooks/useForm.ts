import { useState } from "react";


export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState( initialForm );

    
    // desestructuro el evento porque solo necesito el target
    const onInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        // del target necesito name y value
        const { name, value } = target;

        setFormState({
            ...formState,
            [name]: value
        });

    }


    return {
        // desestructuramos el formState para poder enviar todas las propiedades
        ...formState,
        
        formState,
        onInputChange,

  }
  
}
