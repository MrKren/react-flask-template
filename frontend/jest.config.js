const config = {
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    ".+\\.(css|styl|less|sass|scss|png|jpg|svg|gif|ttf|woff|woff2)$":
      "jest-transform-stub",
  },
  testEnvironment: "jsdom",
};

module.exports = config;
