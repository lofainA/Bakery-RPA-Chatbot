# Dough & Delight Bakery Chatbot

Welcome to the **Dough & Delight** Bakery Chatbot project! This application provides a conversational interface where customers can ask questions about our bakery's offerings, place orders, and get helpful information like store hours, menu items, and more.

## Description

**Dough & Delight** is a bakery chatbot that allows customers to interact with the bakery online. Whether they want to inquire about gluten-free options, custom cakes, delivery services, or track an order, this chatbot has all the answers! 

The chatbot is powered by a React frontend that communicates with a Flask backend. The backend handles queries by sedning the queries to UIPath which in turn mathces the queries with the a set of predefined responses and returns it back to the backend, which are stored in a JSON file.

### Key Features:
- Conversational interface to interact with the bakery.
- Ability to answer common questions about products, services, and bakery policies.
- Integration with a Flask API backend that serves dynamic responses based on the user’s query.
- Ability to handle multiple keyword responses and store input in `input.json`.

## Setup

### Prerequisites
To run the project locally, you'll need the following:
- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/)
- [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/)

### Steps to Run the Project

1. **Clone the Repository**
   First, clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/dough-and-delight.git
   cd dough-and-delight
   ```

2. **Frontend Setup (React)**
   - Navigate to the `frontend` directory and install the dependencies:
     
     `npm install`
 
   - Once the dependencies are installed, start the React development server:

     `npm run dev`

   - The frontend should now be running at `http://localhost:3000`.

3. **Backend Setup (Flask API)**
   - Run the Flask API server:

    `python server.py`

   - The Flask backend will be running at `http://127.0.0.1:5000`.

4. **Interact with the Chatbot**
   - Once both servers are running, visit `http://localhost:3000` to start interacting with the chatbot.

## How It Works

- **Frontend (React)**: The React app handles user input and displays the conversation. It sends the input to the Flask backend API for processing.
- **Backend (Flask)**: The Flask app processes the input, matches keywords with predefined responses from `responses.json`, and returns the appropriate message.
- **Responses**: The chatbot responses are stored in `responses.json`, including details like bakery hours, menu items, custom cakes, and more. Multiple keywords can map to the same response, allowing for flexible queries.

### Example Workflow:
1. The user types a query (e.g., "What are your store hours?").
2. The frontend sends the query to the Flask backend.
3. The backend processes the input, searches for matching keywords in the `responses.json`, and returns the appropriate response.
4. The frontend displays the response in the chatbox.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
