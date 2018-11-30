module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "es6": true,
        "mocha": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules":true,
            "arrowFunctions":true,
            "classes":true,
            "spread":true
        },
        "ecmaVersion": 6,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console":[
            "off"
        ],
        "no-unused-vars":[
            "warn"
        ],
        "react/jsx-filename-extension": [
          1,
          { "extensions": [".js", ".jsx"] }
        ],
        "react/jsx-uses-react": [
          "error"
        ],
        "react/jsx-uses-vars": [
          "error"
        ],
        "comma-dangle": [
          0
        ],
        "react/display-name": [
          0
        ],
        "react/prop-types": [
          0
      ]
    }
};
