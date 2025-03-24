import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default tseslint.config(
  { ignores: ["dist"] }, // Ignorar la carpeta de salida
  {
    extends: [
      js.configs.recommended, 
      ...tseslint.configs.recommended, 
      pluginReact.configs.flat.recommended
    ],
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], // Soporta JS y TS
    languageOptions: {
      ecmaVersion: 2020, // Soporta ECMAScript 2020
      globals: globals.browser, // Usa variables globales del navegador
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Aplica reglas recomendadas de React Hooks
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  }
);
