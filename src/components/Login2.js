import { useState } from 'react';


const Login2 = () => {
    
    const [user, setUser] = useState('');
    
    function handleChange (name, value) {
        if (name === 'usuario') {
            setUser(value)
        }
    }

    console.log("Usuariooooo:", user);

    
    
    return ( 
        <div className= "form-usuario" >
            <label> Usuario </label>
            <input
                id="usuario"
                type="text"
                name="usuario"
                placeholder="Ingrese su Usuario"
                onChange = {(e) => handleChange(e.target.name, e.target.value)} 
            />

            
        </div>
     );
}
 
export default Login2 ;