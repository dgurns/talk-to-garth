import { type LoaderArgs as RemixLoaderArgs } from "@remix-run/cloudflare";

declare global {
	const YOUTUBE_API_KEY: string;
}

export default global;

export type LoaderArgs = RemixLoaderArgs & {
	context: {
		YOUTUBE_API_KEY: string;
	}
}