module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:import/errors",
        "plugin:import/react",
        "plugin:react/recommended"
    ],

    "parserOptions": {
        "ecmaVersion": 8,
        "sourceType": "module",
        "ecmaFeatures": {
            "impliedStrict": true,
            "jsx": true
        }
    },

    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true
    },

    "globals": {},

    "settings": {
        "import/resolver":{
            "node" :{
                "extensions": [".js",".jsx"]
            }
        }
    },

    "rules": {
        "no-console": 0, // disallow use of console (off by default in the node environment)
        "valid-jsdoc": 2, // Ensure JSDoc comments are valid (off by default)
        "no-unsafe-negation": 2, // disallow negation of the left operand of an in expression
        "comma-dangle": 2, // disallow or enforce trailing commas

        //
        // Best Practices
        //
        // These are rules designed to prevent you from making mistakes.
        // They either prescribe a better way of doing something or help you avoid footguns.
        //
        "consistent-return": 2, // require return statements to either always or never specify values
        "curly": 2, // specify curly brace conventions for all control statements
        "default-case": 2, // require default case in switch statements (off by default)
        "eqeqeq": 2, // require the use of === and !==
        "guard-for-in": 2, // make sure for-in loops have an if statement (off by default)
        "no-alert": 2, // disallow the use of alert, confirm, and prompt
        "no-caller": 2, // disallow use of arguments.caller or arguments.callee
        "no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression (off by default)
        "no-eq-null": 2, // disallow comparisons to null without a type-checking operator (off by default)
        "no-eval": 2, // disallow use of eval()
        "no-extend-native": 2, // disallow adding to native types
        "no-extra-bind": 2, // disallow unnecessary function binding
        "no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
        "no-implied-eval": 2, // disallow use of eval()-like methods
        "no-iterator": 2, // disallow usage of __iterator__ property
        "no-labels": 2, // disallow use of labeled statements
        "no-lone-blocks": 2, // disallow unnecessary nested blocks
        "no-multi-str": 2, // disallow use of multiline strings
        "no-global-assign": 2, // disallow reassignments of native objects
        "no-new": 2, // disallow use of new operator when not part of the assignment or comparison
        "no-new-func": 2, // disallow use of new operator for Function object
        "no-new-wrappers": 2, // disallows creating new instances of String,Number, and Boolean
        "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
        "no-proto": 2, // disallow usage of __proto__ property
        "no-return-assign": 2, // disallow use of assignment in return statement
        "no-script-url": 2, // disallow use of javascript: urls.
        "no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
        "no-sequences": 2, // disallow use of comma operator
        "no-throw-literal": 2, // restrict what can be thrown as an exception (off by default)
        // disallow usage of configurable warning terms in comments": 2, // e.g. TODO or FIXME (off by default)
        "no-warning-comments": [1, {"terms": ["todo", "fixme"], "location": "start"}],
        "no-with": 2, // disallow use of the with statement
        "radix": 2, // require use of the second argument for parseInt() (off by default)
        "vars-on-top": 2, // requires to declare all vars on top of their containing scope (off by default)
        "wrap-iife": 2, // require immediate function invocation to be wrapped in parentheses (off by default)
        "yoda": 0, // require or disallow Yoda conditions
        "semi": ["error", "always"],

        //
        // Variables
        //
        // These rules have to do with variable declarations.
        //
        "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
        "no-label-var": 2, // disallow labels that share a name with a variable
        "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
        "no-undef-init": 2, // disallow use of undefined when initializing variables
        "no-unused-vars": 2, // disallow declaration of variables that are not used in the code
        "no-use-before-define": ["error", {"functions": false, "classes": true}], // disallow use of variables before they are defined

        //
        // ECMAScript 6
        //
        // These rules are only relevant to ES6 environments and are off by default.
        //
        "no-useless-rename": 2,
        "no-var": 2, // require let or const instead of var (off by default)
        "generator-star-spacing": [2, "before"], // enforce the spacing around the * in generator functions (off by default)
        "no-duplicate-imports": 2,

        // React
        "react/prop-types": "warn"
    }
};
