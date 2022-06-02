declare global {
	const YOUTUBE_API_KEY: string;
}

export default global;

export interface LoaderArgs {
	context: {
		YOUTUBE_API_KEY: string;
	}
}