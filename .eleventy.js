module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("node_modules");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};
