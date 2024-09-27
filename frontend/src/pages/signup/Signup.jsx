import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
     
     <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
        SignUp 
        <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form >
            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Full Name</span>
                </label>
                <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-text'>Username</span>
                </label>
                <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-password'>Password</span>
                </label>
                <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
            </div>

            <div>
                <label className='label p-2'>
                    <span className='text-base label-password'>Confirm Password</span>
                </label>
                <input type="password" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
            </div>

            <GenderCheckbox/>


            <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
                Already have an account?
            </a>

            <div>
                <button className='btn btn-block btn-sm mt-2'>SignUp</button>
            </div>

        </form>
    </div>

    </div>
  )
}

export default Signup;


//Starter code for this page

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
     
//      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20'>
        
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//         SignUp 
//         <span className='text-blue-500'> ChatApp</span>
//         </h1>

//         <form >
//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Full Name</span>
//                 </label>
//                 <input type="text" placeholder='Enter Full Name' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-text'>Username</span>
//                 </label>
//                 <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-password'>Password</span>
//                 </label>
//                 <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//             </div>

//             <div>
//                 <label className='label p-2'>
//                     <span className='text-base label-password'>Confirm Password</span>
//                 </label>
//                 <input type="password" placeholder='Enter Confirm Password' className='w-full input input-bordered h-10' />
//             </div>

//             <GenderCheckbox/>


//             <a href="#" className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
//                 Already have an account?
//             </a>

//             <div>
//                 <button className='btn btn-block btn-sm mt-2'>SignUp</button>
//             </div>

//         </form>
//     </div>

//     </div>
//   )
// }

// export default Signup
