import React from 'react'

const Login = () => {
  return (
    <div className= "flex flex-col items-center justify-center min-w-9 mx-auto">
        
        <div className="'w-full p-6 bg-red-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'">
        
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
			Login
		<span className='text-yellow-400'> ChatApp</span>
		</h1>

         <form>
            <div>

            <label className="label p-2">
             <span className='text-base  label-text'> Username</span>
            </label>

            <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />

            </div>
            
            <div>

            <label className="label p-2">
             <span className='text-base  label-text'> Password</span>
            </label>

            <input type="password" placeholder="Enter  Passwod" className="input input-bordered input-error w-full max-w-xs" />
            
            </div>

            <a href="#" className='text-sm  hover:underline hover:text-yellow-400 mt-2 inline-block'>
						{"Don't"} have an account?

           </a>

           <div>
            <button className='btn border-error  btn-block btn-sm mt-2'>
              Login
            </button>
           </div>
         </form>

        </div>
        
    </div>
  )
}

export default Login


// starter code 
//  const Login = () => {
//   return (
//     <div className= "flex flex-col items-center justify-center min-w-96 mx-auto">
        
//         <div className="'w-full p-6 bg-red-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'">
        
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
// 			Login
// 		<span className='text-yellow-400'> ChatApp</span>
// 		</h1>

//          <form>
//             <div>

//             <label className="label p-2">
//              <span className='text-base  label-text'> Username</span>
//             </label>

//             <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />

//             </div>
            
//             <div>

//             <label className="label p-2">
//              <span className='text-base  label-text'> Password</span>
//             </label>

//             <input type="password" placeholder="Enter  Passwod" className="input input-bordered input-error w-full max-w-xs" />
            
//             </div>

//             <a href="#" className='text-sm  hover:underline hover:text-yellow-400 mt-2 inline-block'>
// 						{"Don't"} have an account?

//            </a>

//            <div>
//             <button className='btn btn-block btn-sm mt-2'>
//               Login
//             </button>
//            </div>
//          </form>

//         </div>
        
//     </div>
//   )
// }