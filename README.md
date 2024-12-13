# Za Adriana

Mozda je iskomplikovano u delovima, ali sam insistirao zbog sebe da bih neke stvari naucio i unapredio, tako da sam npr radio dosta sa RHF i koristio je kao neki mini state management tool, jer mi je app SPA i mislim da bi bilo previse komplikovano da koristim i redux. Redux bih koristio da sam imao odvojene rute. 
Insistirao sam i da radim SCSS i da radim sa Moduilma. Bilo je verovatno nepotrebno ali zeleo sam da probam da radim sa modulima i BEM metodologijom da video kako ce to da ispadne na kraju ( mislim da je redundant ali zeleo sam da provezbam ) 
Posto nemam fetch i na kraju da postujem neku datu nisam implementirao zbog vremena ali bih koristio tanstack query i ako imam previse useQuery ili useMutation hooks splitovao bih logiku u custom hookove)

1. Da li bi trebalo da setujem font-size u Rem jedinicama kao i margine i paddinge? Da li je ok da se onda setuje html font-size na 62.5%; da bih imao 1rem = 10px
2. Da li je ok koristiti ovako react hook form kao neki state management lib i koristiti njihov API ili je bolji redux + RHF npr.
3. Da li je ok ovaj pristim scss modules + BEM metodologija, ili je previse i treba da se odlucim za jednu opciju?

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
