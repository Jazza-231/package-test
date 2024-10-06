import type { PreprocessorGroup } from 'svelte/compiler';

export const preprocess = () => {
	const replacer: PreprocessorGroup = {
		name: 'replacer',
		markup: ({ content }) => {
			content.replace(/me/g, 'you');

			return { code: content };
		}
	};

	return replacer;
};
