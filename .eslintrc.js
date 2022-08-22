module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true
		},
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'react',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],

		// React
		'react/boolean-prop-naming': [
			'error',
			{
				'validateNested': true
			}
		],
		'react/jsx-indent-props': [
			'error',
			'tab'
		],
		'react/jsx-max-props-per-line': ['error'],
		'react/jsx-closing-tag-location': ['error'],
		'react/jsx-closing-bracket-location': ['error'],
		'react/jsx-boolean-value': [
			'error',
			'never'
		],
	}
};
