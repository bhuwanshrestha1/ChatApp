export const funEmojis = [
	"😀", // Grinning face
	"😁", // Beaming face with smiling eyes
	"😂", // Face with tears of joy
	"😊", // Smiling face with smiling eyes
	"😎", // Smiling face with sunglasses
	"😇", // Smiling face with halo
	"😜", // Winking face with tongue
	"🤔", // Thinking face
	"😶", // Face without mouth
	"😏", // Smirking face
	"🤗", // Hugging face
	"🙃", // Upside-down face
	"😛", // Face with tongue
	"😌", // Relieved face
	"😃", // Grinning face with big eyes
	"🥳", // Partying face
	"🤩", // Star-struck
];

export const getRandomEmoji = () => {
	return funEmojis[Math.floor(Math.random() * funEmojis.length)];
};