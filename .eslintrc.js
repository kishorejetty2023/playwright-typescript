module.exports = {

	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	env: {
		browser: true,
		node: true,
	},
	rules: {
		'no-console': 0,
		'no-restricted-syntax': [
			'warn',
			{
				selector: 'callExpression[callee.property.name="only"]',
				message: 'test.only is not allowed in committed code.',
			},
		],
	},
};
