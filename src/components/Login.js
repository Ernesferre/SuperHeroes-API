import {useContext, useState, useEffect} from 'react';
import  AppContext  from '../AppContext/AppContext';


const Login = ({history}) => {

    const context = useContext(AppContext);

    const { login, autenticado } = context

    const [user, setUser] = useState({
        email: '',
        password: ''
    });
  
    
    const [ emailError, setEmailError ] = useState(false);
    const [ passwordError , setPasswordError] = useState(false);
    



    function handleChange (e) {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })         
    };


    function handleSubmit(e) {
        e.preventDefault();
        login(user)

        if ( user.email !== "challenge@alkemy.org") {
            console.log("email incorrecto") 
            setEmailError(true); 
            setUser({
                email: '',
                password: ''
            })  
            return
        }
            setEmailError(false);

        if ( user.password !== "react") {
            console.log("password incorrecto") 
            setPasswordError(true);
            setUser({
                email: '',
                password: ''
            })
            return
        }
            setEmailError(false)


            

            

    };

    

    useEffect(() => {
        if (autenticado) {
            history.push('/Equipo')
        } 
    }, [history, autenticado])


    return ( 
        <div className="form-usuario bg-black">
            <div className="contenedor-form bg-warning mb-5">
                
                <h1>Iniciar Sesion</h1>

                <div className="d-flex justify-content-center mb-5">

                    {emailError &&
                    <label className="text-danger">  El Email igresado es incorrecto </label> }

                    {passwordError &&
                    <label className="text-danger">  El Password igresado es incorrecto </label> }

                </div>


                <form 
                    onSubmit={handleSubmit}
                    >
                    <div className="campo-form">
                        <label htmlFor="usuario" >Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            onChange={handleChange} 
                            value={user.email}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password" >password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </div>

                        <button
                            type="submit" 
                            className="btn btn-primario btn-block"
                            disabled={[user.email, user.password].includes('')}
                            
                        >
                            Iniciar Sesion
                        </button>                  
                </form>
                                  
            </div>
        </div>
     );
}
 
export default Login;