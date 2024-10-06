import type { PreprocessorGroup } from 'svelte/compiler';

export const preprocess = () => {
	const replacer: PreprocessorGroup = {
		name: 'replacer',
		markup: ({ content }) => {
			const code = content.replaceAll('Replace me!', 'Replace you!');
			return { code };
		}
	};

	return replacer;
};
