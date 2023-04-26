import React from 'react';
import useForm from '../hooks/useForm';
import validate from '../utils/validate';

const  FormSignUp = () => {

  const {handleChange,values,handleSubmit,errors} = useForm(validate);

  //when the 'submit' btn is clicked , 'handleSubmit' method is called
  //whenever the error cause , it will be displayed in paragraph tags
  return (
    <div className='form-content'>

   

    <form className='form' onSubmit={handleSubmit}>
       <h1>SignUp Form</h1>
       <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>Username</label>
          <input type='text' 
                 className='form-input' 
                 name='username' 
                 id='username'
                 placeholder='Enter username'
                 value={values.username}
                 onChange={handleChange}/>
              
                {errors.username && <p>{errors.username}</p>}
       </div>
       <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='text' 
                 className='form-input' 
                 name='email' 
                 id='email'
                 placeholder='Enter your email'
                 value={values.email}
                 onChange={handleChange}/>
                 {errors.email && <p>{errors.email}</p>}
       </div>
       <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' 
                 className='form-input' 
                 name='password' 
                 id='password'
                 placeholder='Enter your password'
                 value={values.password}
                 onChange={handleChange}/>
                 {errors.password && <p>{errors.password}</p>}
       </div>
       <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>Password</label>
          <input type='password' 
                 className='form-input' 
                 name='password2' 
                 id='password2'
                 placeholder='confirm password'
                 value={values.password2}
                 onChange={handleChange}/>
                {errors.password2 && <p>{errors.password2}</p>}
       </div>
       <button className='form-input-btn'>Submit</button>
       <span className='form-input-login'>Already have an account ? Login <a href='#'>Here</a></span>
    </form>
  </div>
  )
}

export default FormSignUp;
