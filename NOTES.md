# HISTORY

## SET-UP

### CREATE

```bash
npx create-next-app@latest
```

"yes" to typescript, eslint, tailwindcss, src (dir), app router

### PRETTIER

```bash
npm i --save-dev --save-exact prettier
echo {}> .prettierrc.json
npm install --save-dev eslint-config-prettier
```

package.json:

```json
{
    "scripts": {
        "format": "prettier --write ."
    }
}
```

eslintrc.json:

```json
{
    "extends": ["next/core-web-vitals", "plugin:prettier/recommended"]
}
```

prettierrc.json:

```json
{
    "trailingComma": "es5",
    "tabWidth": 4,
    "semi": false,
    "singleQuote": true
}
```
