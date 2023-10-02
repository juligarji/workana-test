// jest.config.js
module.exports = {
	preset: "ts-jest",
	setupFilesAfterEnv: ["@testing-library/react/dont-cleanup-after-each", "@testing-library/jest-dom/extend-expect"],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
	},
	moduleNameMapper: {
		"\\.css$": "identity-obj-proxy",
	},
	testMatch: ["<rootDir>/src/**/*.test.{ts,tsx}"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
