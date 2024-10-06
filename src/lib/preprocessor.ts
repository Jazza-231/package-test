import type { PreprocessorGroup } from 'svelte/compiler';
import MagicString from 'magic-string';

export const preprocess = () => {
	const replacer: PreprocessorGroup = {
		name: 'replacer',
		markup: ({ content }) => {
			const s = new MagicString(content);
			s.replaceAll('Replace me!', 'Replace you!');

			return { code: s.toString(), map: s.generateMap() };
		}
	};

	return replacer;
};
