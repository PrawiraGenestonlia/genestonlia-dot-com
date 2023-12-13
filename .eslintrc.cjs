module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended", // Recommended Prettier rules
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "prettier", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleQuote: true,
        trailingComma: "all",
      },
    ],
    // Rules for auto sort of imports
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // Side effect imports.
          ["^\\u0000"],
          // Packages.
          // Packages. `react` related packages come first.
          // Things that start with a letter (or digit or underscore), or
          // `@` followed by a letter.
          ["^react", "^@?\\w"],
          // Shared imports should be separate from application imports.
          ["^(@shared)(/.*|$)"],
          // Aliased imports
          [
            "^(@app)(/.*|$)",
            "^(@components)(/.*|$)",
            "^(@constants)(/.*|$)",
            "^(@contexts)(/.*|$)",
            "^(@errors)(/.*|$)",
            "^(@hooks)(/.*|$)",
            "^(@interfaces)(/.*|$)",
            "^(@modules)(/.*|$)",
            "^(@services)(/.*|$)",
            "^(@theme)(/.*|$)",
            "^(@utils)(/.*|$)",
          ],
          // assets  imports
          ["^(@assets)(/.*|$)"],
          // Parent imports. Put `..` last.
          ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
          // Other relative imports. Put same-folder imports and `.` last.
          ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
        ],
      },
    ],
  },
};
