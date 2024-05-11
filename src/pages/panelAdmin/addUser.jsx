import React from 'react';
import { useEffect, useState } from 'react';
import { supabaseConfig } from '../../utils/supabaseConfig'

const AddUser = () => {


 const [User , setUser]=useState([]);

 async function getUser() {
    const { data } = await supabaseConfig.from("User").select();
    if(data.length>1){
        setUser(data);
    }
    else{
        console.log("le tableau est vide");
    }
    console.log(data);
  }

  useEffect(()=>{
    getUser();
  
   },[]);
  
  

  return (
    <div>

<h1> Liste des utilisateurs de la base de donnée : </h1>

<div className='user'>

{
    User.map((user)=>{
      return(
        <tr key={user.id}>
        <td>{user.nom}</td>
        <td>{user.email}</td>
        <td>{user.password}</td>
        <td>{user.role}</td>
      </tr>
      )
    })
   }
</div>


<h1>insertion des users</h1>
<div
  id="g_id_onload"
  data-client_id="<client ID>"
  data-context="signin"
  data-ux_mode="popup"
  data-callback="handleSignInWithGoogle"
  data-nonce=""
  data-auto_select="true"
  data-itp_support="true"
> google</div>
    </div>
  )
}

export default AddUser
