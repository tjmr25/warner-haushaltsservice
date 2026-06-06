import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // Add Astro configuration
  ...eslintPluginAstro.configs.recommended,
  
  // Add React/JSX/Astro Accessibility configuration
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      // You can add project-specific accessibility rules here
    },
  },

  // Additional project-specific rules
  {
    rules: {
      // Define custom rules manually here if needed
    }
  }
];
