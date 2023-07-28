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

### REPO ON GITHUB

create repo vegan-tbd on github

```bash
git add .
git commit
git remote add origin https://github.com/steinbergpeter/vegan-tbd.git
git remote -v
git push -u origin main
```

### SOME ORGANIZATION

clean up page.tsx
create folders: src/styles, src/components
add shortcuts to tsconfig.json

### SHADCN/UI

```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button
npm i next-themes
```

components/theme-provider.tsx

```javascript
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```
