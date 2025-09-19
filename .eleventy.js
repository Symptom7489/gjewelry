module.exports = function(eleventyConfig) {
    // Passthrough copies for static assets and node_modules
    eleventyConfig.addPassthroughCopy("node_modules");
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/admin");
    eleventyConfig.addPassthroughCopy("src/css");

    // Explicitly add the gallery collection
    eleventyConfig.addCollection("gallery", function(collectionApi) {
        return collectionApi.getFilteredByGlob("src/gallery/*.md");
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};
