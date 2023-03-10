Welcome to my issue tracker repository. 

** general notes **
This application was built with JavaScript using the REACT framework. 
The application utilizes firebase to persist and store all user date. 

In order for the application to have access to firebase you will need to input user credetials in the "base.js" component file. Currently, there are firebase credentials present in the base file but the API is not present and hidden in a .env that is referenced in the ".gitignore" file. 


*** the sign-in and authentication functionality ***
I've perposefully kept the sign in process to only use a username so no email or authentication is required. This is only meant to allow people to view the fuctionality of the application without requiring a lengthly sign-in / authentication process.  Keep in mind this is a portfolio project and not meant to be in realworld usehense the lack of security and authentication. 


*** To install and run the application on your local server ***
If you would like to spin up the application on your own system it should fairly straight forward. 

In your terminal or command line navigate to your desired directory
run: "git clone https://github.com/WaterColours02/Responsive-Porfolio-Website.git"

Once the repository has been cloned navigate to the new directory. 
From the new directory be sure you have npm installed by running the command "npm -v" to check which version of npm is installed on your system. If the return doesnt not show an instalation on npm you can run "npm install -g npm"

To spin up the app you will need to run "npm start" This should open the app in your browser from your local server. 

*** about the application ***
In the application you are able to create issues with the initial input fields and drop down menus. The user can mark the issues as complete, delete the issues from user data or edit the issue through the edit modal accessible via the "edit" button present of each issue card. In addition, users are able to search through all their active and completed issues using the search back. The search field will search all present data fields in each issue. 








