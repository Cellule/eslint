var ESLintTester = require("eslint-tester");

console.log("Use babel-eslint for test suite");
ESLintTester.setDefaultConfig({
    parser: "babel-eslint"
});
