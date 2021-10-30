module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/cybersec_logo.png");
  eleventyConfig.addPassthroughCopy("./src/join.png");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
