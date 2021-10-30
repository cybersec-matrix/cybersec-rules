module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/media");
  eleventyConfig.addPassthroughCopy("./src/favicon");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
