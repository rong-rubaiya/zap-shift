import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

   const {register , handleSubmit , formState:{errors}}=useForm();
   const {registerUser}=useAuth()

   const hadleRegister=(data)=>{
    console.log(data);
    registerUser(data.email,data.password)
    .then(res=>{
      console.log(res);
    })
    .catch(err=>{
      console.log(err);
    })

   }
  return (
   
    <div>
      <form onSubmit={handleSubmit(hadleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email',{ required:true})} className="input" placeholder="Email" />
           
          {errors.email?.type==="required" &&(
            <p className='text-red-500'>Email is required</p>
          )}

          <label className="label">Password</label>
          <input type="password"  {...register('password',{ required:true,
           
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          })} className="input" placeholder="Password" />
          {errors.password?.type==="required" &&(
            <p className='text-red-500'>Password is required</p>
          )}

           {errors.password?.type==="pattern" &&(
            <p className='text-red-500'>Password must have at least one lowercase letter,at least one uppercase letter,at least one digit,at least one special character ,minimum 8 characters</p>
          )}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;