# Blastlewark
Front-End code assessment

How To Run the Proyect:

1) Clone the repository https://github.com/ManuelRios94/Blastlewark.git (If you need herl, visit https://help.github.com/en/articles/cloning-a-repository)

2) Go to the folder where it was installed and run the command "npm install"

3) Run the command "npm start"
    3.1) If you want to run unit test enter the command "npm test"

4) The application will run in http://localhost:3000/

How To Use:



Technical Notes:

- The Footer, Header and Content were not separated in component and container, since they did not present a representative complexity.

- It was decided not to use data-test as a search engine to verify if, in the unit test, the component was correctly rendered. On the other hand, being a simple and single-programmer application, it was decided to search by the name of the class.

- The paging of the data brought from the endpoint was not taken into account, since it does not support pagination. Always bring all the items.

- Js and css libraries were used for style and functionalities of external notifications that were declared in index.html. This is not the best practice. Ideally, the necessary files are downloaded and placed in the public folder and associated with them, but for reasons of time it was not done.