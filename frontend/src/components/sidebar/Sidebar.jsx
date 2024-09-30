import React, { useState } from 'react';
import SearchInput from './SearchInput.jsx';
import Conversations from './Conversations.jsx';
import LogoutButton from './LogoutButton.jsx';

const Sidebar = () => {
  const [isSearching, setIsSearching] = useState(false); // State to track if searching

  const handleSearchToggle = (searching) => {
    setIsSearching(searching);
  };

  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput onSearchToggle={handleSearchToggle} />
      <div className='divider px-3'></div>
      {/* Conditionally render Conversations only if not searching */}
      {!isSearching && <Conversations />}
      <div className='divider px-3'></div>
      <LogoutButton />
    </div>
  );
};

export default Sidebar;


// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-500 p-4 flex flex-col'>
      
//       <SearchInput/>
//       <div className='divider px-3'></div>
//       <Conversations/>
//       <div className='divider px-3'></div>
//       <LogoutButton/>
      
//     </div>
//   )
// }

// export default Sidebar
