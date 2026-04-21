# Twitter Clone

## Table of contents

1. [Next Features](#next-features)
2. [Technologies](#technologies)
3. [Create Next App](#create-next-app)
4. [Stop In-use PORT](#stop-in-use-port)
5. [Run Project](#run-project)
6. [TypeScript](#typescript)
7. [Icons](#icons)
8. [Modal State Management using Zustand](#modal-state-management-using-zustand)
9. [Forms using React Hook Form](#forms-using-react-hook-form)
10. [Notifications using React Hot Toast](#notifications-using-react-hot-toast)
11. [MongoDB](#mongodb)
12. [ORM using Prisma](#orm-using-prisma-read-docs)
13. [Authentication using Next Auth & Prisma](#authentication-using-next-auth--prisma)
14. [Password Hash using Bcrypt](#password-hash-using-bcrypt)
15. [Social Authentication with Github](#social-authentication-with-github)
16. [World Countries](#world-countries)
17. [Testing Using Jest](#testing-using-jest)
18. [Server-side Rendering(SSR)](#server-side-rendering)

## Next Features

    Server Side Rendering (SSR)
    SEO Optimization
    File-based Routing
    Full Stack Implementation

## Technologies

    Front-end Framework - Next JS | TypeScript
    Database(No SQL) - Mongo DB
    ORM - Prisma
    Containerization - Docker
    File upload - Cloudinary
    Testing - Jest

## Create Next App

    npx create-next-app .
    npx create-next-app@latest . --typescript
    npx create-next-app . -e <https://github.com/tomphill/nextjs-openai-starter>
    npx create-next-app --example with-mongodb . --typescript

## Stop In-use PORT

Retrieve PID: sudo lsof -i :3000
Execute Kill: kill -9 %PID%

## Run Project

    npm run dev

## TypeScript

Installation:

## Prettier [Read Blog](https://www.linkedin.com/pulse/setup-nextjs-app-directory-typescript-tailwindcss-project-nekfar/)

    npm install --save-exact prettier

<!-- This turns off all ESLint rules that are unnecessary or might conflict with Prettier. -->

    npm install --save-dev eslint-config-prettier eslint-plugin-prettier

<!-- To make Prettier cooperate with ESLint; add "prettier" to the extends array in your eslintrc.js file. -->

    extends: ["prettier", ...]

    touch .prettierrc .prettierignore

## Icons

    npm install react-icons

## Modal State Management using zustand

A small, fast and scalable bearbones state-management solution using simplified flux principles.

Installation:

    npm install zustand

Usage:

    import { create } from 'zustand'

## Forms using React Hook Form

Installation:

    npm install react-hook-form

## Using React Select

    npm install react-select

## Using React Date Range

    npm i react-date-range

    npm i --save-dev @types/react-date-range

## Loaders Using React Spinner

    npm i react-spinner

## Maps Using React Leaflet

    npm install leaflet react-leaflet

    npm install -D @types/leaflet

## Image Upload Using Cloudinary

    npm install next-cloudinary

Add Cloud name to ".env"

    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

Configure presets: Settings > Uploads > Upload presets > Add Upload preset > Unsigned

    import { CldUploadWidget } from "next-cloudinary";
    import Image from "next/image";
    import { TbPhotoPlus } from "react-icons/tb";

    <CldUploadWidget
        onUpload={uploadHandler}
        uploadPreset="gzp6natx"
        options={{ maxFiles: 1 }}
        >
        {({ open }) => (
            <div
            onClick={() => open?.()}
            className="relative border-dashed border-2 border-neutral-300 p-20 flex flex-col justify-center items-center gap-4 text-neutral-600 cursor-pointer transition hover:opacity-70"
            >
            <TbPhotoPlus size={50} />
            <div className="font-semibold text-lg">Click to upload</div>
            {value && (
                <div className="absolute w-full h-full">
                <Image
                    src={value}
                    alt="Upload"
                    fill
                    style={{ objectFit: "cover" }}
                />
                </div>
            )}
            </div>
        )}
    </CldUploadWidget>

## Notifications using React Hot Toast

Installation:

    npm install react-hot-toast

## Database using MongoDB

MongoDB Atlas
Security > Network Access > Allow access from anywhere > Confirm
Security > Database Access > Add New Database User > Specific Privileges > Add User
Deployment > Database > Build a Database > Create username & Password
Copy URI

npm i @prisma/client @next-auth/prisma-adapter mongodb

## ORM using Prisma ([Read Docs](https://www.prisma.io/docs/getting-started/quickstart))

Installation:

    npm i @prisma/client @next-auth/prisma-adapter mongodb
    npm install prisma --save-dev

VSCode Extension: Prisma

Initialize:

    npx prisma init

Update ".env"

    DATABASE_URL="mongodb://127.0.0.1:27017/airbnb"

Create Models & Run Migration

Mongo DB

    npx prisma db push

Others

    <!-- Run first migration after model creation -->
   <!-- The "prisma migrate" cmd does the following:
    i. Save the migration: Prisma Migrate will take a snapshot of your schema and figure out the SQL commands necessary to carry out the migration.
    ii. Prisma Migrate will execute the SQL in the migration file to create the underlying tables in your database.
    iii. Prisma will generate Prisma Client based on your latest schema. Since you did not have the Client library installed, the CLI will install it for you as well.-->
    npx prisma migrate dev --name first-migration

    <!-- Make change to table field then run migration -->
    npx prisma migrate dev --name add-fields-to-user-table

    <!-- Make change to table field then run migration -->
    npx prisma migrate dev --name created-at-type-change-on-user-table

Seeding Data in the Database ([Read Docs](https://www.prisma.io/docs/guides/migrate/seed-database#how-to-seed-your-database-in-prisma))

Configure package.json

    "prisma": {
        "seed": "ts-node --transpile-only prisma/seed.ts"
    },

    <!-- When using Next.js -->
    "prisma": {
        "seed": "ts-node --compiler-options {\"module\":\"CommonJS\"} prisma/seed.ts"
    },

Configure seed data ([Read Docs](https://www.prisma.io/docs/guides/migrate/seed-database#seeding-your-database-with-typescript-or-javascript))

Run Seed:

    npx prisma db seed

## Authentication using Next Auth & Prisma

    npm install next-auth @prisma/client @next-auth/prisma-adapter

## Password Hash using Bcrypt

    npm i bcrypt
    npm i --save-dev @types/bcrypt

## Social Authentication with Github

Github
Settings > Developer Settings > OAuth Apps > New OAuth App > Register application

## Social Authentication with Google

Google Cloud Platform

APIs & Services > OAuth Consent Screen
App name
User support email
email address

APIs & Services > Credentials > Create credentials > OAuth client ID
Application type: Web Application
Authorized redirect URIs: <http://localhost:3000/api/auth/callback/google>

Retrieve Client ID & Client Secret

## World Countries

    npm i world-countries

## Server-side Rendering

    type Data = { ... }

    export const getServerSideProps: GetServerSideProps<{ data: Data }> = async ({ res, req, params, query}) {
        const res = await fetch(`https://.../data`)
        const data: Data = await res.json()

        <!-- if (!data) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                },
            }
        } -->

        <!-- if (!data) {
            return {
            notFound: true,
            }
        } -->

        return {
            props: {
                data
            }, // will be passed to the page component as props
        }
    }

## Routing using Next Navigation

    router.push('/');
    router.refresh();

## Static-site Generation(SSR)

    import { GetStaticProps } from 'next'

    type Post = {
        author: string
        content: string
    }

    export const getStaticProps: GetStaticProps<{ posts: Post[] }> = async ({params}) => { // No access to req, res or query
        const res = await fetch('https://.../posts')
        const posts: Post[] = await res.json()

        <!-- if (!data) {
            return {
                notFound: true,
            }
        } -->

        <!-- if (!data) {
            return {
                redirect: {
                    destination: '/',
                    permanent: false,
                    // statusCode: 301
                },
            }
        } -->


        return {
            props: {
                posts,
            },
            revalidate: 1000 // Caching for 1000s after which any request for this page would lead to the page being re-requested
        }
    }

Development: npm run dev

## Images

Add the base URL of external images to your projects 'next.config.js' file

    images: {
        domains: ["s.gravatar.com"],
    },

    npm run dev

## Auth0

[NextJS Auth0 Documentation](https://www.npmjs.com/package/@auth0/nextjs-auth0)
Generate Auth0 Secret Key: openssl rand -hex 32

## Stripe

[Stripe Documentation](https://www.npmjs.com/package/@auth0/nextjs-auth0)

## Testing Using Cypress

Install the cypress package:

    npm install --save-dev cypress

Add Cypress to the package.json scripts field:

    "scripts": {
        ...
        "cypress": "cypress open",
    }

Run Cypress for the first time to generate examples that use their recommended folder structure:

    npm run cypress

## Testing Using Jest

    npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom

    import nextJest from 'next/jest.js'

Create "jest.config.mjs" & add the code below

    const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './',
    })

    // Add any custom config to be passed to Jest
    /** @type {import('jest').Config} */
    const config = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

    testEnvironment: 'jest-environment-jsdom',
    }

    // createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
    export default createJestConfig(config)

Running your test suite

    Run npm run test

## Dockerize

    touch Dockerfile Dockerfile.dev .dockerignore

Add the following to the .dockerignore file:

    Dockerfile
    Dockerfile.dev
    .dockerignore
    node_modules
    npm-debug.log
    README.md
    .next
    .git

Configure the Dockerfile file for Development:

Configure the Dockerfile file for Production ([Read Docs](https://github.com/vercel/next.js/tree/canary/examples/with-docker))

Update the file next.config.js to allow standalone output:

    {
        <!-- previous command here -->
        experimental: {
            outputStandalone: true,
        },
    }

Build the Docker image (Development):

    docker build -t airbnb-clone-dev:v1 -f Dockerfile.dev .

Build the Docker image (Production):

    docker build -t airbnb-clone:v1 .

Run the Docker image for either environment:

    docker run --rm -it -p 8080:3000 --name airbnb-clone <app-name>:v1

## Deployment => Vercel

Vercel does not require "npm run build", it would build the project on its own

## Deployment Using AWS Amplify

AWS Console > Amplify Hosting > Host your web app > Get started > New app > Host web app
