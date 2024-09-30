import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-end' : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-blue-500' : "";

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        
        // Format the date
        const dateOptions = { year: 'numeric', month: '2-digit', day: '2-digit' }; 
        const formattedDate = date.toLocaleDateString([], dateOptions); // Format date

        // Format the time
        const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: false }; 
        const formattedTime = date.toLocaleTimeString([], timeOptions); // Format time

        return `${formattedDate} ${formattedTime}`; // Combine date and time
    };

    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src={profilePic} alt="User avatar" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bubbleBgColor}`}>
                {message.message}
            </div>
            <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
                {formatDateTime(message.createdAt)}
            </div>
        </div>
    );
};

export default Message;
