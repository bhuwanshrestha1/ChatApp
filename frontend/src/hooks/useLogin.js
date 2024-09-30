import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async (username, password) => {
		const success = handleInputErrors(username, password);
		if (!success) return;

		setLoading(true);
		try {
			const res = await fetch("/api/auth/login", {
				method: "POST", // Use POST instead of GET
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ username, password }), // Now sending the data correctly
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			// Store user info and update the auth state
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
			toast.success("Login successful!");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, login };
};

export default useLogin;

function handleInputErrors(username, password) {
	if (!username || !password) {
		toast.error("Please fill in all fields");
		return false;
	}
	return true;
}
