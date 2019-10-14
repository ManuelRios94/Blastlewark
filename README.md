# Blastlewark
Front-End code assessment

How To Run the Proyect:

1) Clone the repository https://github.com/ManuelRios94/Blastlewark.git

2) Go to the folder where it was installed and run npm install

3) Run npm start

4) The application will run in http://localhost:3000/

Technical Notes:

- The Footer, Header and Content were not separated in component and container, since they did not present a representative complexity.

- It was decided not to use data-test as a search engine to verify if, in the unit test, the component was correctly rendered. On the other hand, being a simple and single-programmer application, it was decided to search by the name of the class.

- The paging of the data brought from the endpoint was not taken into account, since it does not support pagination. Always bring all the items.

- Js and css libraries were used for style and functionalities of external notifications that were declared in index.html. This is not the best practice. Ideally, the necessary files are downloaded and placed in the public folder and associated with them, but for reasons of time it was not done.