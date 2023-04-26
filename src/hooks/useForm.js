import React, { useState } from 'react';

// store values of the form in state variables and update their values by using
// 'setValues()'

const useForm = (validate) => {
   const[values,setValues] = useState(
       {
        username : " ",
        email : " ",
        password :" ",
        password2 :" ",
       }
   );


// store error values of the form inputs in state variables and update their values by using
// 'setErrors()'
const [errors,setErrors] = useState({});

//whenever the user enters value in the input field , 'handleChange()' is called
const handleChange=(e)=>{
   //Get value of the input by using event handlers i.e, (e.target)
   //and store it as name(name of the input) and value(value of the input which entered by the user) 

   const {name,value} =e.target;
   
   //after getting value , call 'setValues()'
   // add the current input value into the array (...prevValues)
   //[name] => if [] is not included , then the text 'name' will be return by setValues() instead of
   //name of the input 

   setValues((prevValues)=>{
    
    return{
        ...prevValues,
        [name]:value,
    };
      
   }); 

   };

   const handleSubmit =(event)=>{
      //prevent default loading when button is clicked
      event.preventDefault();
      
      //call validate function and pass values (state variable)
      //validate function will return errors (variable), returned erros will be pass to the function
      //setErrors to updaate errors(state variable)

      // ====> setErrors function has callback function "validate(values)"
      setErrors(validate(values));
   }

   return{handleChange,handleSubmit,values,errors};
};

  
export default useForm;
