# Bi-Lingual School Website (Backend)

A complete solution built using Node.js, Express, MongoDB, and Cloudinary for the backend, with a frontend powered by Next.js, and Tailwind CSS.

## Project Overview

**Objective:** Develop a bilingual (English and Chinese) website for a school based in Taipei, Taiwan.

**Background:** The school wanted a bilingual platform both for potential customers and for the attraction of new teaching and administrative staff. The journey of this project involved multiple stages and iterations. It started with a CMS-based approach, transitioned into a React app hosted on GitHub Pages using a HashRouter, and culminated in its current version powered by Next.js with a robust backend.

### Features

**Security & Authentication:**

- **Token-Based Authorization:** Secure routes and CRUD actions protected using tokens.
- **Password Encryption:** Enhanced security using bcrypt for password hashing and verification.
- **JWT Authentication:** Leveraging JSON Web Tokens (JWT) for user session management and identity verification.
- **Token Expiry:** Time-limited session tokens to enhance security.

**Database & File Handling:**

- **MongoDB Integration:** Efficient API communication with MongoDB for data storage and retrieval.
- **Cloudinary Integration:** Streamlined management of image assets using Cloudinary.
- **CRUD Operations:** Comprehensive GET, POST, PATCH, and DELETE functions for both content and images.

**Architecture & Design Patterns:**

- **MVC Pattern:** Organized architecture adhering to the Model-View-Controller (MVC) pattern for clearer separation of concerns.
- **Async Functions:** Employing asynchronous operations for better performance and responsiveness.
- **Custom Middleware:** Tailored middleware functions to handle specific tasks and enhance request processing.

**Error Management:**

- **Robust Error Handling:** Efficient detection and response mechanisms for unexpected issues.

## Customization

This project serves as a showcase in my public portfolio, thanks to the client's agreement. If you intend to adapt this project for your own needs, ensure all associated logos and brand names are modified accordingly.

## Reporting Bugs & Improvements

Encountered an issue or have a suggestion?

1. Use the **issues tab** above to submit any discrepancies or proposals.
2. If you've addressed an issue and want to contribute, raise a PR. Don't forget to reference the corresponding issue!

## Known Issues

Currently, changes in the `ContentContext` and `WebImageContext` states do not trigger an immediate reload upon submission from the admin panel. I'm actively looking into this.

## Preview

![English Homepage](https://github.com/jakovid/sky-frontend/assets/59522704/dc120f71-ec16-4f1b-969d-f464aa5f4c4f)

![Chinese Homepage](https://github.com/jakovid/sky-frontend/assets/59522704/2ff44812-608e-4338-800e-2f0654fa3572)

![Admin Content Page](https://github.com/jakovid/sky-frontend/assets/59522704/30bf2705-b763-4259-81f0-a5d5736dc5b7)

![Admin Image Page](https://github.com/jakovid/sky-frontend/assets/59522704/ad2e3d47-a6d4-4587-b274-16af0e4e85ca)
