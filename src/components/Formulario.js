import { useState} from 'react';
import ErrorBusqueda from './ErrorBusqueda';



const Formulario = ({setBusqueda}) => {

    const [termino, setTermino] = useState('');
    const [error, setError] = useState(false);
    // const [ datas , setDatas ] = useContext (Info);

 
    const buscarHeroe = e => {
        e.preventDefault();

        // Validar
        if (termino.trim() === '' ) {
            setError(true);
            return;
        }
        setError(false);

        // enviar el termino de busqueda hacia el componente principal
        setBusqueda(termino);

    }

    return ( 
        <form
            onSubmit={buscarHeroe}
        >
            <div className="row">
                <div className="form-group col-md-4">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Buscar un Personaje"
                        onChange={ e => setTermino(e.target.value)}
                    />

                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />



                </div>
            </div>

            { error ? <ErrorBusqueda mensaje="Agrega un termino de busqueda"/> : null}
        </form>


     );
}
 
export default Formulario;