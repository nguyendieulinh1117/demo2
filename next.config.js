const nextTranslate = require("next-translate");
module.exports = nextTranslate({
    reactStrictMode: true,
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"],
    },
});
