# Next.js 15 Runtime Error: Cannot read properties of undefined (reading 'someData')

This repository demonstrates a common runtime error in Next.js 15 applications related to accessing `pageProps` before checking for its existence.

## Problem
The `about.js` file attempts to access `pageProps.someData` without checking if `pageProps` is defined. This results in a runtime error when `pageProps` is undefined.

## Solution
The `aboutSolution.js` file demonstrates a corrected approach that checks for the existence of `pageProps` before accessing its properties. This prevents the runtime error.

## How to Reproduce
1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Navigate to `/about`.
5. Observe the runtime error in the console.
6. Replace `/pages/about.js` with `/pages/aboutSolution.js` and run the app again. The error should be gone.
