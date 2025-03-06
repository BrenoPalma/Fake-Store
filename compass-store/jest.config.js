module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
    },
  };
  