import { createContext } from 'react';
export const InfoContext = createContext();


// const InfoProvider = ({children}) => {

//     const [datas, setDatas] = useState({
//         personajes: [],
//         equipo: [],
//     });


//     return ( 
//         <InfoContext.Provider
//             value={{
//                 datas,
//                 setDatas

//             }}

//         >
//             {children}
//         </InfoContext.Provider>
//      );
// }
 
// export default InfoProvider;