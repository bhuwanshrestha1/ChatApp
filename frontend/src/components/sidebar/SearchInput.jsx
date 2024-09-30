import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation"; // Import the Conversation component

const SearchInput = ({ onSearchToggle }) => {
	const [search, setSearch] = useState("");
	const [filteredConversations, setFilteredConversations] = useState([]);
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSearch = (input) => {
		const trimmedSearch = input.trim();
		setSearch(trimmedSearch);

		// Update search state in Sidebar
		onSearchToggle(trimmedSearch.length > 0); // Enable searching if there's any input

		// If the input is empty, clear the filtered conversations
		if (trimmedSearch.length === 0) {
			setFilteredConversations([]);
			return;
		}

		// Find conversation matching the search term
		const matchedConversations = conversations.filter((c) => {
			const fullName = (c.fullName || c.fullname)?.trim().toLowerCase();
			return fullName && fullName.includes(trimmedSearch.toLowerCase());
		});

		setFilteredConversations(matchedConversations);
	};

	const handleConversationSelect = (conversation) => {
		setSelectedConversation(conversation);
		setFilteredConversations([]);
		onSearchToggle(false); // Reset search state on selection
	};

	return (
		<div>
			<form className='flex items-center gap-2' onSubmit={(e) => e.preventDefault()}>
				<input
					type='text'
					placeholder='Search…'
					className='input input-bordered rounded-full'
					value={search}
					onChange={(e) => handleSearch(e.target.value)}
				/>
				<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
					<IoSearchSharp className='w-6 h-6 outline-none' />
				</button>
			</form>
			{/* Render filtered conversations using the Conversation component */}
			{filteredConversations.length > 0 && (
				<ul className='mt-2'>
					{filteredConversations.map((conversation, idx) => (
						<Conversation
							key={conversation._id} // Use _id as key
							conversation={conversation}
							
							lastIdx={idx === filteredConversations.length - 1} // Check if this is the last index
						/>
					))}
				</ul>
			)}
		</div>
	);
};

export default SearchInput;
