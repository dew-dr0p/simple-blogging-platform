# Simple Blog Platform with Next.js, React, TypeScript, Zustand, Axios, and CKEditor 5

A web application built with Next.js, React, TypeScript, Zustand, Axios, and CKEditor 5 that allows users to create, edit, delete, view, and comment (coming later) on blog posts. This project also incorporates Firebase for data storage and Vercel for deployment.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [State Management](#state-management)
- [Firebase Setup](#firebase-setup)
- [Code Examples](#code-examples)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)
<!-- - [License](#license) -->
- [Contact Information](#contact-information)

## Prerequisites

- Node.js (v14 or higher)
- Firebase project with the Realtime Database enabled

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/dew-dr0p/simple-blogging-platform
   ```

2. Change to the project directory:

    ```bash
    cd simple-blogging-platform
    ```

3. Install the dependencies

    ```bash
    npm install
    ```

4. Create an `.env.local` file in the project root and add your Firebase credentials:

    ```env
    FIREBASE_API_KEY=your-api-key
    FIREBASE_AUTH_DOMAIN=your-auth-domain
    FIREBASE_DATABASE_URL=your-database-url
    FIREBASE_PROJECT_ID=your-project-id
    FIREBASE_STORAGE_BUCKET=your-storage-bucket
    FIREBASE_MESSAGING_SENDER_ID=your-sender-id
    FIREBASE_APP_ID=your-app-id
    ```

5. Run the application

    ```bash
    npm run dev
    ```

## Usage

Live Site Url: [www.simple-blogging-app-lovat.vercel.app](https://www.simple-blogging-app-lovat.vercel.app)

This web application allows you to:

- Create new blog posts with titles, content, images, and categories.
- Edit and update existing blog posts.
- Delete blog posts.
- View a list of blog posts with pagination.
- View the full content of individual blog posts.
- Comment in blog posts (coming soon)

## Features

- Create, edit, and delete blog posts.
- List and view blog posts.
- Firebase integration for data storage.
- Zustand for state management.
- CKEditor 5 for a rich text editor.
- Pagination to display blog posts.
- Comment functionality (to be implemented).
- User authentication (to be implemented).
- Responsive and clean UI with Tailwind CSS.

## State Management

State is managed using the Zustand library. The store contains the current user and blog posts data.

## Firebase Setup

1. Set up a Firebase project.
2. Initialize the Firebase Admin SDK with your service account credentials.
3. Enable the Realtime Database service in your Firebase project.
4. Create a Vercel environment variable to securely load your Firebase service account key.

## Code Examples

Refer to the `api` directory for serverless functions that interact with Firebase.
The `store` directory contains Zustand store setup.

## Testing

Testing will be implemented in the future using the [testing framework].

## Deployment

Deploy the application to Vercel using the vercel command.


## Contributing

Guidelines for contributing would be made available later.
<!-- Contributions are welcome. Please follow the guidelines in [CONTRIBUTING.md] and the [code of conduct]. -->

## Author

Wisdom-Daniel Efe
- Linkedin - [Wisdom-Daniel Efe](https://www.linkedin.com/in/efe-wisdom-daniel)
- Twitter - [@_D_e_w_D_r_0_p_](https://www.twitter.com/_D_e_w_D_r_0_p_)
- Github - [Wisdom-Daniel Efe](https://github.com/dew-dr0p)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Zustand](https://github.com/pmndrs/zustand)
- [CKEditor 5](https://ckeditor.com/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)

<!-- License
This project is licensed under the MIT License - see the LICENSE file for details. -->

## Contact Information

For questions or feedback, please contact [efewisdomd01@gmail.com].