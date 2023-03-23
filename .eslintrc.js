module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'object-curly-newline': 'off',
		indent: ['error', 'tab'],
		'import/no-extraneous-dependencies': [
			'error',
			{ devDependencies: true, optionalDependencies: true, peerDependencies: true },
		],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
	overrides: [
		{
			files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
			env: {
				jest: true,
			},
		},
	],
};
