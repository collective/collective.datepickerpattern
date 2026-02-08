module.exports = {
    // Use jsdom to simulate a browser environment
    testEnvironment: "jsdom",

    // Set the root directory for Jest to look for files.
    roots: ["<rootDir>/resources"],

    // Automatically import jest-dom matchers like .toBeInTheDocument()
    setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],

    // Mock CSS/SCSS imports to prevent errors
    moduleNameMapper: {
        "\\.(css|scss)$": "identity-obj-proxy",
    },

    // By default, jest doesn't transform node_modules.
    // We need to whitelist packages that are published as ESM and need transformation.
    transformIgnorePatterns: [
        "/node_modules/(?!(@patternslib|@plone/mockup|react-aria-components|@internationalized|lucide-react)/)",
    ],
};