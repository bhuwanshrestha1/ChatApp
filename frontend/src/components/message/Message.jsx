import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end '>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full '>
                <img src={"https://publish-p47754-e237306.adobeaemcloud.com/adobe/dynamicmedia/deliver/dm-aid--914bcfe0-f610-4610-a77e-6ea53c53f630/_330603286208.app.webp?preferwebp=true&width=312"}
                 alt="Tailwind CSS chat bubble component" />
            </div>

        </div>
      <div className={`chat-bubble text-white bg-blue-500`}>Hi! What's up?</div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>12:42 pm</div>
    </div>
  )
}

export default Message
