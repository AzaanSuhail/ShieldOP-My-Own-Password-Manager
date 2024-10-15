# ShieldOP - Password Manager

## Project Overview

**ShieldOP** is a secure and efficient **password management app** built using the MERN stack. It allows users to save, copy, edit, and delete their passwords, providing a simple and secure solution for managing sensitive data.

## Features

- **Password CRUD Functionality**: Users can save, copy, edit, and delete their passwords, ensuring full control over their stored information.
- **Secure Storage**: Passwords are securely stored in **MongoDB** using a **REST API**, ensuring they remain safe and easily retrievable.
- **Interactive UI**: The app's user interface is styled with **Tailwind CSS** and features animated **Lord Icons**, creating an engaging and responsive design.
- **Real-time Notifications**: Implemented **React Toast** for real-time notifications, giving users feedback on their actions (e.g., password saved, copied, etc.).

## Tech Stack

- **Frontend**: React, Tailwind CSS, React Toast, Lord Icons
- **Backend**: Node.js, Express.js, MongoDB
- **Database**: MongoDB (local instance)
- **API**: RESTful API for handling password-related operations

## UI Preview

Here's a preview of the user interface:

![UI Screenshot](path-to-screenshot)  `<!-- Replace with actual screenshot path -->`

The UI is built for simplicity and efficiency, making it easy to manage your passwords with minimal effort.

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/shieldop-password-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd shieldop-password-manager
   ```
3. Install the necessary dependencies:
   ```bash
   npm install
   ```
4. Set up MongoDB on your machine (or use MongoDB Atlas for cloud storage).
5. Start the backend server:
   ```bash
   npm run server
   ```
6. Start the frontend:
   ```bash
   npm start
   ```
7. Open your browser and go to **http://localhost:3000** to access the password manager app.

## Usage

- **Add a New Password**: Enter your password details and save them securely.
- **Edit/Update a Password**: Modify any saved passwords directly from the dashboard.
- **Copy Password**: Use the copy functionality to quickly copy your password to the clipboard.
- **Delete Password**: Remove unwanted passwords from your storage.

## Future Enhancements

- Implement encryption for stored passwords for an additional layer of security.
- Add user authentication to allow multiple users to store passwords separately.
- Improve UI with dark mode and advanced customization options.

