# MiroClone App

Demo - [miroClone.uk](https://miroclone.uk/)

## Introduction
MiroClone is a web-based collaboration tool inspired by Miro, allowing teams to create organizations, invite members, and work together on digital whiteboards in real-time. Users can add sticky notes, shapes, images, and files, fostering brainstorming, project planning, and visual organization, ultimately improving team communication, creativity, and project management.

## Features
- Create organizations and invite/kick people.
- Create Boards.
- Real time colaboration in boards.
- Featuers like adding shapes, drawings, sticky notes.

## Tech Stack

- **Next.js 14**: Powering the frontend and server-side rendering.
- **Toasts**: Utilizing React Toast for feedback messages.
- **Authentication**: Managed by Clerk, supporting Google OAuth.
- **Components**: Shadcn
- **CSS**: Styled with Tailwind CSS.
- **Icons**: Leveraging Lucide React.
- **Database and Backend**: Convex.
- **Realtime Management**: Liveblocks.

## Running Locally

To run the project locally, follow these steps:

1. Clone the repository: `https://github.com/yashUcr773/miroClone.git`.
2. Navigate to the project directory: `cd miroClone`.
3. Install dependencies: `npm install`.
4. Run the development server: `npm run dev`.
5. Run the convex backend server: `npx convex dev`.
5. The application will be accessible at `http://localhost:3000` by default.

## Environment Variables

The MiroClone application relies on the following environment variables. Ensure these variables are properly set up before running the application.

- CONVEX_DEPLOYMENT
- NEXT_PUBLIC_CONVEX_URL
- NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
- CLERK_SECRET_KEY
- LIVEBLOCKS_SECRET_KEY
- NEXT_CLERK_JWT_ISSUER


## Attribution

- The project idea was inspired by [Code with Antonio](https://www.youtube.com/watch?v=ADJKbuayubE).

## Planned Features

[] Add color picker sub menu for tools
[x] Move auth to clerk
[x] Teams and organizations
[] Recent boards
[x] Favourite Boards
[] Redirect back in case of not authorized instead of infinite spinner
[] Add Max layers in canvas?


Feel free to contribute and enhance the project!
