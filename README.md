# Dineshkumar Scribbly - A MERN Stack Notes App 📝

![GitHub repo size](https://img.shields.io/github/repo-size/AnhDungdevhihi/Dineshkumar_Scribbly_Using_MERN)
![GitHub stars](https://img.shields.io/github/stars/AnhDungdevhihi/Dineshkumar_Scribbly_Using_MERN)
![GitHub issues](https://img.shields.io/github/issues/AnhDungdevhihi/Dineshkumar_Scribbly_Using_MERN)

Welcome to the Dineshkumar Scribbly repository! This project is a notes application built using the MERN stack. It allows users to create, view, update, and delete notes efficiently. The application also incorporates rate limit handling and toast notifications for a smooth user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
- [Release Information](#release-information)

## Features

- **Create Notes**: Easily add new notes with a user-friendly interface.
- **View Notes**: Browse through your notes in a clear and organized manner.
- **Update Notes**: Modify existing notes to keep your information up to date.
- **Delete Notes**: Remove notes that you no longer need.
- **Rate Limit Handling**: Protects the app from abuse by limiting the number of requests.
- **Toast Notifications**: Provides instant feedback on actions performed.

## Technologies Used

This project utilizes the following technologies:

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsive design.
- **DaisyUI**: A component library for Tailwind CSS that speeds up development.
- **Lucide React**: For scalable vector icons.
- **Node.js**: For server-side logic.
- **Express**: For building the API.
- **MongoDB**: For data storage.
- **Upstash Redis**: For caching and rate limiting.
- **dotenv**: For environment variable management.
- **React Hot Toast**: For displaying toast notifications.

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/AnhDungdevhihi/Dineshkumar_Scribbly_Using_MERN.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd Dineshkumar_Scribbly_Using_MERN
   ```

3. **Install dependencies**:

   For the client-side:

   ```bash
   cd client
   npm install
   ```

   For the server-side:

   ```bash
   cd server
   npm install
   ```

4. **Set up environment variables**:

   Create a `.env` file in the server directory and add the necessary configurations, such as MongoDB URI and Redis credentials.

5. **Run the application**:

   Start the server:

   ```bash
   cd server
   npm start
   ```

   Start the client:

   ```bash
   cd client
   npm start
   ```

Now, open your browser and navigate to `http://localhost:3000` to see the app in action!

## Usage

Once the application is running, you can:

- Create a new note by clicking the "Add Note" button.
- View all your notes in a list format.
- Click on any note to edit it.
- Use the delete button to remove a note.

The application provides toast notifications to inform you of successful actions or errors.

## API Endpoints

The application exposes several API endpoints for note management. Here are the key ones:

- **GET /api/notes**: Fetch all notes.
- **POST /api/notes**: Create a new note.
- **PUT /api/notes/:id**: Update a note by ID.
- **DELETE /api/notes/:id**: Delete a note by ID.

Ensure to implement proper error handling and status codes in your API responses.

## Contributing

We welcome contributions to this project! If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your branch to your forked repository.
5. Open a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Release Information

You can find the latest releases and download the application from the [Releases section](https://github.com/AnhDungdevhihi/Dineshkumar_Scribbly_Using_MERN/releases). Be sure to check it out for updates and new features!

## Conclusion

Thank you for checking out the Dineshkumar Scribbly repository! We hope you find this notes app useful. If you have any questions or suggestions, feel free to reach out or open an issue on GitHub. Happy coding!