## Project Information

- This project takes a list of users from https://jsonplaceholder.typicode.com/users.
- This list api call is run on the server
- The search component is then able to search on the server using a server action as the user types in the search input

## Notes for consideration

- The project also uses the new App file based routing architecture.
- I decided to use NextJS 13+ for this project to experiment with server components and fetching data on the server in lieu of the client. Submitting the request on the server adds an extra layer of protection for sensitive user information. Server actions can also produce an improved SEO score. It's worth noting that the benefits aren't necessarily visible with the current response size.

## Suggested next steps

- Add filter on server side
- Add animations/transitions for smoother UX (framer motion?)
- CV button
- Experience button
- Better API for images and all info
- Improved loading suspense component/s

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
- npm i
- yarn dev


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


```
