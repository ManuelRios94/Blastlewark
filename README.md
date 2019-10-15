# Blastlewark
Front-End code assessment

How To Run the Proyect:

1) Clone the repository https://github.com/ManuelRios94/Blastlewark.git (If you need herl, visit https://help.github.com/en/articles/cloning-a-repository)

2) Go to the folder where it was installed and run the command "npm install"

3) Run the command "npm start"
    3.1) If you want to run unit test enter the command "npm test"

4) The application will run in http://localhost:3000/

How To Use:

1) In http://localhost:3000/ you can see a table with a list of citizen
    1.1) You can search by Name
    1.2) You can search by Hair Color
    1.3) You can sort ascending and descending by Name
    1.4) You can sort ascending and descending by Age
    1.5) You can sort ascending and descending by Hair Color

2) You can select a citizen and press the button "Details". This will redirect you to the citizen details information.

3) In this page, on the right, you can se the picture and the name of the citizen. On the left, you can see a Tabs, with Profile Tab, Profession Tab and Friends Tab. If you click in one of them, you will the the related information.

Technical Notes:

- The Footer, Header and Content were not separated in component and container, since they did not present a representative complexity.

- It was decided not to use data-test as a search engine to verify if, in the unit test, the component was correctly rendered. On the other hand, being a simple and single-programmer application, it was decided to search by the name of the class.

- The paging of the data brought from the endpoint was not taken into account, since it does not support pagination. Always bring all the items.

- Js and css libraries were used for style and functionalities of external notifications that were declared in index.html. This is not the best practice. Ideally, the necessary files are downloaded and placed in the public folder and associated with them, but for reasons of time it was not done.