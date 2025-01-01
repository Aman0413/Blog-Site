import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable or adjust specific rules
      "@typescript-eslint/ban-ts-comment": "off", // Disables @ts-comment rule
      "@typescript-eslint/no-explicit-any": "off", // Allows the use of 'any' type
    },
  },
];

export default eslintConfig;
