 import React from 'react'
import GenderCheckbox from './GenderCheckbox'
 
 const Signup = () => {
    return (
      <div className= "flex flex-col items-center justify-center min-w-96 mx-auto">
          
          <div className="'w-full p-6 bg-red-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'">
          
          <h1 className='text-3xl font-semibold text-center text-gray-300'>
              Signup
          <span className='text-yellow-400'> ChatApp</span>
          </h1>
  
           <form>

                <div>
  
               <label className="label p-2">
               <span className='text-base  label-text'> Fullname</span>
               </label>

                <input type="text" placeholder=" jhon Doe" className="input input-bordered input-error w-full max-w-xs" />

               </div>

              <div>
  
              <label className="label p-2">
               <span className='text-base  label-text'> Username</span>
              </label>
  
              <input type="text" placeholder="jhonDoe" className="input input-bordered input-error w-full max-w-xs" />
  
              </div>
              
              <div>
  
              <label className="label p-2">
               <span className='text-base  label-text'> Password</span>
              </label>
  
              <input type="password" placeholder="Enter  Passwod" className="input input-bordered input-error w-full max-w-xs" />
              
              </div>
  

              <div>
  
              <label className="label p-2">
               <span className='text-base  label-text'> Confirm Password</span>
              </label>
  
              <input type="password" placeholder="Confirm Passwod" className="input input-bordered input-error w-full max-w-xs" />
              
              </div>

                {/* gender check box */}
                <GenderCheckbox/>
    
              <a href="#" className='text-sm  hover:underline hover:text-yellow-400 mt-2 inline-block'>
                          {"Already"} have an account?
  
             </a>
  
             <div>
              <button className='btn  border-error btn-block btn-sm mt-2'>
                Signup
              </button>
             </div>
           </form>
  
          </div>
          
      </div>
    )
  }
  
 
 export default Signup
 

 