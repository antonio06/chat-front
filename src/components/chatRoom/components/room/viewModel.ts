export interface Conversation {
	user: string;
	message: string;
};

export const DefaultConversation = (): Conversation => ({
	user: '',
	message: '',
});
