export default function validate(values){
    let errors={};

    //check whether the username field is not empty or filled by spaces
    if(!values.username.trim()){
        errors.username="Enter Valid Username";
    }

    //check whether the email field is not empty or filled by spaces
    //or else check whether the entered email is valid
    if(!values.email.trim()){
        errors.email="Email Id required";
    }
    else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
        errors.email="Invalid Email id";
    }

    //check whether the password field is not empty or filled by spaces
    // or else check the password'size is less than 8
    if(!values.password.trim()){
        errors.password="Password required";
    }
    else if(values.password.length <6){
        errors.password="Password's length should be less than 8 characters";
    }

    if(!values.password2.trim()){
        errors.password2="Password required";
    }
    else if(values.password!==values.password2){
         errors.password2="Passwords mismatch";
    }

    return errors;
}