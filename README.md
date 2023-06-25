# Cricketers React Project

This project is a React application that displays a list of cricketers and provides various features such as pagination, sorting, filtering, and searching. It also includes a detailed view of each cricketer and the option to display similar players based on their type.

## Setup and Running the Application

To set up and run this application, please follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory using the command line.
3. Install the dependencies by running the following command: `npm install`
4. Once the dependencies are installed, start the application with the following command: `npm start`
5. Open your browser and access the application at [http://localhost:3000](http://localhost:3000).

## Project Details

### Screen: Cricketers

The "Cricketers" screen displays a list of cricketers with pagination support. Each item in the list includes the following details:

- Name
- Type
- Points
- Rank
- Age

The list can be sorted by Name, Rank, and Age. Additionally, there is an optional filter by Type and a search functionality by Name.

The filter and search criteria are retained on screen refresh.

Clicking on a cricketer's name opens the "Cricketer Details" screen.

### Screen: Cricketer Details

The "Cricketer Details" screen provides more detailed information about a specific cricketer. It includes the following details:

- Name
- Description
- Type
- Points
- Rank
- Date of Birth
- Age

The screen also includes a "Back to Cricketers" button/link to navigate back to the list of cricketers.

Additionally, there is an optional bonus feature to display similar players based on the cricketer's type. Up to 5 similar players are displayed, including their Name, Points, and Rank.
