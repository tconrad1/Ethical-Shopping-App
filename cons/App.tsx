
import './App.css';
import { useState } from 'react';
import React from 'react';
import {Text, TextInput, View} from 'react-native';



const companyArray = [ ['nestle', 'evil'], ['other', 'ok']
];

export function MainInput() {
   const [Company, setCompany] = useState('');
   var out = '';

   let i = 0;
   while (i<companyArray.length){
    if(companyArray[i][0] == Company){
     out = Company + " " + companyArray[i][1];
    }
    i+=1;
   }


  return (
    <>
    <label>
    Company/Product:
    <TextInput 
    value= {Company}
    onChangeText= { Company=> {setCompany(Company)}}
    
    
    />
    
    </label>
    <br></br>
    { out != '' && <a>
      Ethical Concerns:  {out} </a>}

     
    </>




  );
}



function App() {
  return (
   <div >
      
    {MainInput()}
    </div>
    
  );
}

export default App;
