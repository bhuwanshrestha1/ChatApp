import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
        <div className='avatar online'>
          <div className='w-12 rounded-full'>
            <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316605.png" 
             alt="user avatar" />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>Virat Kohli</p>
            <span className='text-xl'>😀</span>
          </div>
        </div>
      </div>

      <div className='divider my-0 py-0 h-1'></div>
    </>
  )
}

export default Conversation



//Starter Code

// const Conversation = () => {
//   return (
//     <>
//       <div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
//         <div className='avatar online'>
//           <div className='w-12 rounded-full'>
//             <img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316605.png" 
//              alt="user avatar" />
//           </div>
//         </div>

//         <div className='flex flex-col flex-1'>
//           <div className='flex gap-3 justify-between'>
//             <p className='font-bold text-gray-200'>Virat Kohli</p>
//             <span className='text-xl'>😀</span>
//           </div>
//         </div>
//       </div>

//       <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default Conversation