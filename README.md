**Issue Tracker Application**
Welcome to the issue tracker repository! This application was built with JavaScript using the REACT framework, and it utilizes Firebase to persist and store all user data.

**General Notes**
In order for the application to have access to Firebase, you will need to input user credentials in the "base.js" component file. Currently, there are Firebase credentials present in the base file but the API is not present and hidden in a .env file that is referenced in the .gitignore file.
**
The Sign-In and Authentication Functionality**
I've purposely kept the sign-in process to only use a username so no email or authentication is required. This is only meant to allow people to view the functionality of the application without requiring a lengthy sign-in/authentication process. Keep in mind that this is a portfolio project and not meant to be used in the real world, hence the lack of security and authentication.

**To Install and Run the Application on Your Local Server**
If you would like to spin up the application on your own system, it should be fairly straightforward. Follow these steps:

In your terminal or command line, navigate to your desired directory and run the command:
git clone https://github.com/WaterColours02/Responsive-Porfolio-Website.git
Once the repository has been cloned, navigate to the new directory.

From the new directory, be sure you have npm installed by running the command:

npm -v
This will check which version of npm is installed on your system. If the return does not show an installation of npm, you can run:

npm install -g npm
To spin up the app, you will need to run:


npm start
This should open the app in your browser from your local server.

**About the Application**
In the application, you are able to create issues with the initial input fields and drop-down menus. The user can mark the issues as complete, delete the issues from user data, or edit the issue through the edit modal accessible via the "edit" button present on each issue card. In addition, users are able to search through all their active and completed issues using the search bar. The search field will search all present data fields in each issue.

I hope that helps! If you have any further questions or concerns, please feel free to ask.
