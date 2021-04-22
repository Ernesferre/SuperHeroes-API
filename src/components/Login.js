import {useContext, useState} from 'react';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';
// import Error from './Error'
// import axios from 'axios';


const Login = ({history}) => {

    const {dispatch}  = useContext(AuthContext);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError , setPasswordError] = useState(false);
    const [isLogin, setIsLogin ] = useState(false);
    const [ hasError , setHasError ] = useState(false);



    
    function handleChange (name, value) {
        if (name === 'email') {
            setUser(value)
            setHasError(false);
            setIsLogin(false)
        } else {
            setPassword(value);
            setHasError(false);
            setIsLogin(false);
            }         
    };

    console.log('usuario:', user);
    console.log('Password:', password);


    function ifMatch (param) {
        if(param.user.length > 0 && param.password.length > 0 ) {
            if (param.user === 'challenge@alkemy.org' && param.password === 'react') {
                console.log("usuario y contrasena validado con exito, ingreso a la home")
                const { user , password } = param;
                let ac = {user , password};
                let account = JSON.stringify(ac);
                localStorage.setItem('account', account);
                setIsLogin(true);
                history.replace('/')
                dispatch({
                    type: types.login,
                    payload: {
                        name: 'Ernesto'
                    }
                })
                
                

            } else {
                setIsLogin(false);
                setHasError(true);
            }
        } else {
            setIsLogin(false);
            setHasError(true);
        }
    }

    function handleSubmit() {
        let account = {user, password}
        if(account) { 
            // console.log("account:", account)
            // console.log(account.password)
            ifMatch(account);
        }
        if(account.password === 'react') {
            
            console.log('React fue ingresado correctamente');
            setPassword(account.password)
        } else {
            setPasswordError(true);
            console.log(passwordError);
            console.log('Se ingreso un valor diferente a React')
            setPassword(account.password);

        }

        // setPasswordError(false);
    };




    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                
                
                
                <h1>Iniciar Sesion</h1>

                {hasError &&
                <label>  Su Usuario o Contraseña son incorrectas o no existen en nuestra plataforma </label> 
            
                }

                {isLogin &&
                <label>Felicitaciones !!!! Ingresaste a HOME </label>
                }

                {/* Aqui debo renderizar un nuevo componente de Error */}
                {/* {passwordError && <label> Contraseña Invalida </label> } */}

                <form>
                    <div className="campo-form">
                        <label htmlFor="usuario" >Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Tu Email'
                            // value={email}
                            onChange={(e) => handleChange(e.target.name, e.target.value)} 
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password" >password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            // value={password}
                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                        />
                    </div>

                   

                </form>

                <div className="campo-form">
                        <button
                            // type="submit" 
                            onClick={handleSubmit}
                            className="btn btn-primario btn-block"
                            // value="Iniciar Sesion"
                        >
                            Iniciar Sesion
                        </button>

                    </div>

                

            </div>

        </div>
     );
}
 
export default Login;