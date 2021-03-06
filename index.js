module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
    ],

    "plugins": ["promise"],

    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true
        }
    },

    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },

    "globals": {},

    "settings": {
        "import/resolver":{
            "node" :{
                "extensions": [".js"]
            }
        }
    },

    "rules": {
        "comma-dangle": "off", // disallow or enforce trailing commas
        "max-len": ["warn", 120],
        "no-console": "warn", // disallow use of console (off by default in the node environment)
        "no-extra-parens": "off",
        "no-unsafe-negation": "error", // disallow negation of the left operand of an in expression
        "valid-jsdoc": ["error", {"requireReturn": false}], // Ensure JSDoc comments are valid (off by default)

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //
        "consistent-return": "error", // require return statements to either always or never specify values
        "curly": "error", // specify curly brace conventions for all control statements
        "default-case": "error", // require default case in switch statements (off by default)
        "eqeqeq": ["error", "always", {"null": "ignore"}], // require the use of === and !==
        "guard-for-in": "error", // make sure for-in loops have an if statement (off by default)
        "no-alert": "error", // disallow the use of alert, confirm, and prompt
        "no-caller": "error", // disallow use of arguments.caller or arguments.callee
        "no-div-regex": "error", // disallow division operators explicitly at beginning of regular expression (off by default)
        "no-eq-null": "off", // disallow comparisons to null without a type-checking operator (off by default)
        "no-eval": "error", // disallow use of eval()
        "no-extend-native": "error", // disallow adding to native types
        "no-extra-bind": "error", // disallow unnecessary function binding
        "no-floating-decimal": "error", // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-implied-eval": "error", // disallow use of eval()-like methods
        "no-iterator": "error", // disallow usage of __iterator__ property
        "no-labels": "error", // disallow use of labeled statements
        "no-lone-blocks": "error", // disallow unnecessary nested blocks
        "no-multi-str": "error", // disallow use of multiline strings
        "no-global-assign": "error", // disallow reassignments of native objects
        "no-new": "error", // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": "error", // disallow use of new operator for Function object
        "no-new-wrappers": "error", // disallows creating new instances of String,Number, and Boolean
        "no-octal-escape": "error", // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-proto": "error", // disallow usage of __proto__ property
        "no-return-assign": "error", // disallow use of assignment in return statement
        "no-script-url": "error", // disallow use of javascript: urls.
        "no-self-compare": "error", // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": "error", // disallow use of comma operator
        "no-throw-literal": "error", // restrict what can be thrown as an exception (off by default)
        "no-warning-comments": ["error", {"terms": ["fixme"], "location": "start"}],
        "no-with": "error", // disallow use of the with statement
        "prefer-promise-reject-errors": "error", // reject() should always be called with an error.
        "radix": "error", // require use of the second argument for parseInt() (off by default)
        "vars-on-top": "error", // requires to declare all vars on top of their containing scope (off by default)
        "wrap-iife": "error", // require immediate function invocation to be wrapped in parentheses (off by default)
        "yoda": "off", // require or disallow Yoda conditions
        "semi": ["error", "always"],

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        "no-label-var": "error", // disallow labels that share a name with a variable
        "no-shadow-restricted-names": "error", // disallow shadowing of names such as arguments
        "no-undef-init": "error", // disallow use of undefined when initializing variables
        "no-unused-vars": "error", // disallow declaration of variables that are not used in the code
        "no-use-before-define": ["error", {"functions": false, "classes": true}], // disallow use of variables before they are defined

        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments and are off by default.
        //
        "no-useless-rename": "error",
        "no-var": "error", // require let or const instead of var (off by default)
        "generator-star-spacing": [2, "before"], // enforce the spacing around the * in generator functions (off by default)
        "no-duplicate-imports": "error",

        // eslint-plugin-promise
        "promise/catch-or-return": ["error", {allowThen: true}]
    }
};
