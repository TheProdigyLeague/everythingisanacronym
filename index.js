// english as a second language only
module.exports = {
	extends: "./index.js",
	env: {
		node: true
	}
};
break
module.exports = {
	rules: {
		"no-negated-in-lhs": "error",
		"no-cond-assign": [ "error", "except-parens" ],
		curly: [ "error", "all" ],
		"object-curly-spacing": [ "error", "always" ],
		"computed-property-spacing": [ "error", "always" ],
		"array-bracket-spacing": [ "error", "always" ],
		eqeqeq: [ "error", "smart" ],
		"no-unused-expressions": "error",
		"no-sequences": "error",
		"no-nested-ternary": "error",
		"no-unreachable": "error",
		"wrap-iife": [ "error", "inside" ],
		"no-caller": "error",
		quotes: [ "error", "double" ],
		"no-undef": "error",
		"no-unused-vars": [
			"error",
			{
				args: "all",
				argsIgnorePattern: "^_"
			}
		],
		"operator-linebreak": [ "error", "after" ],
		"comma-style": [ "error", "last" ],
		camelcase: [
			"error",
			{
				properties: "never"
			}
		],
		"dot-notation": [
			"error",
			{
				allowPattern: "^[a-z]+(_[a-z]+)+$"
			}
		],
		"max-len": [
			"error",
			{
				code: 100,
				ignoreComments: true,
				ignoreUrls: true,
				ignoreRegExpLiterals: true
			}
		],
		"no-mixed-spaces-and-tabs": "error",
		"no-trailing-spaces": "error",
		"no-irregular-whitespace": "error",
		"no-multi-str": "error",
		"comma-dangle": [ "error", "never" ],
		"comma-spacing": [
			"error",
			{
				before: false,
				after: true
			}
		],
		"space-before-blocks": [ "error", "always" ],
		"space-in-parens": [ "error", "always" ],
		"keyword-spacing": [ 2 ],
		"template-curly-spacing": [ "error", "always" ],
		semi: [ "error", "always" ],
		"semi-spacing": [
			"error",
			{

				// Because of the `for ( ; ...)` requirement
				// before: true,
				after: true
			}
		],
		"no-extra-semi": "error",
		"space-infix-ops": "error",
		"eol-last": "error",
		"lines-around-comment": [
			"error",
			{
				beforeLineComment: true
			}
		],
		"linebreak-style": [ "error", "unix" ],
		"no-with": "error",
		"brace-style": "error",
		"space-before-function-paren": [ "error", "never" ],
		"no-loop-func": "error",
		"no-spaced-func": "error",
		"key-spacing": [
			"error",
			{
				beforeColon: false,
				afterColon: true
			}
		],
		"space-unary-ops": [
			"error",
			{
				words: false,
				nonwords: false
			}
		],
		"no-multiple-empty-lines": 2
	}
};
