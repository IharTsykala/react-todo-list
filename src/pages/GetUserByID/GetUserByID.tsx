
import React, { useEffect, useState } from "react"
import { getUserByID, exitHandler } from './serviceGetUserByID'
import { useHistory } from "react-router-dom"


export const GetUserByID: React.FC = (props: any) => {  
  const [user, setUsers]: any = useState([])
  const [load, setLoad]: any = useState('loading')
  const { id } = props.match.params
  const history = useHistory()

  useEffect(() => {
    
  getUserByID(setUsers, setLoad, id)

  },[])  
  
  if (load ==='loading'){    
    return (        
        <>         
        <h1>Ожидайте ответа</h1>
        </>  
      ) 
  } 
  if (load ==='loaded') {       
    return (   
       <>
        <ul>
        {user.map((fild: any, index: any) =>
          <li key={index}><p>{`${fild[0]}: ${fild[1]}`}</p></li>)
        }
        </ul>
        <i 
              className="material-icons blue-text edit"
              // onClick={event => editHandler(event, user, history)}
            >edit                
            </i>     
         <i
         className="material-icons red-text"
         onClick={event => exitHandler(event, history)} 
       >  close     
       </i>
       </>                
    ) 
  } 
  else {    
    console.log('hi3')
    return (      
        <>
            <h1>ошибка</h1> 
        </>
    )
  }
}