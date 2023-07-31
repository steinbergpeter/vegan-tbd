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

playing around w shadcn, light/dark toggle

### PRISMA (RAILWAY, MYSQL)

```bash
npm install prisma --save-dev
npx prisma
```

schema.prisma

```json
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider     = "mysql"
  url          = env("MYSQL_URL")
  relationMode = "prisma"
}
```

.env

```bash
DATABASEL_URL=mysql://root:CCBZmUEiKg3AKemvrVTX@containers-us-west-50.railway.app:5573/railway
```

### NEXT-AUTH IN PRISMA

```javascript
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

generator client {
  provider        = "prisma-client-js"
}

// NEXT AUTH MODELS
model Account {
  id                 String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?  @db.Text
  access_token       String?  @db.Text
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?  @db.Text
  session_state      String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String?   @unique
  emailVerified DateTime?
  image         String?
  accounts      Account[]
  sessions      Session[]
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}
```

pages/api/auth/[...nextauth].js

```typescript
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
})
```

npm install nodemailer

npm install zod
"@tailwindcss/forms": "^0.5.4"
