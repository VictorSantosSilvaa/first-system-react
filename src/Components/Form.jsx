import "./form.css";
import { useState } from "react";

const Form = () => {

    //Estado unucial do formulario
    const initialForm = {
        nome: "",
    }

    //Estado do formulario
    const [formState, setFormState] = useState(initialForm)

    //Funcao para lidar com a alteracao dos campos de entrada
    const handleInput = (event) => {
        //Obter o valor e o nome do campo de entrada
        const target = event.currentTarget;

        //Extrair o valor e o nome do campo de entrada
        const { value, name } = target;

        //atualizar o estado do formulario com os novos valores
        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome);

        setFormState({ ...initialForm })
    }

    return (
        <div className="containerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form__group_one">
                        <h1>Register</h1>
                        <label htmlFor="nome">Register your name:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formState.nome}
                            onChange={handleInput}
                            class="input"
                            placeholder="Insert here..."
                        />
                    </div>
                    <div className="form__group_one">
                        <button type="submit" class="text">
                            <span><b>
                                To Send
                            </b>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;