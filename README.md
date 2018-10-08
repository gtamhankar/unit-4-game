# unit-4-game
assignment 4 - CrystalsCollector Game using jQuery

Submitted On: 10/08/2018

Technologies: HTML & CSS & Bootstrap & jQuery

This is assignment 4: https://unc.bootcampcontent.com/UNC-Coding-Boot-Camp/UNCHILL201808FSF3/blob/master/homework/04-jquery/Instructions/homework_instructions.md

Inputs/Files: index.html, README.md 
Css folder: style.css,  reset.css, uses bootstrap.css with web link
Images folder: crystal/orb images

Outputs: Basic game page 

This is a simple version of crystal/orb game.

Notes & Limitations:
--------------------
* Hardcoded range for random number generation range
* I have added styles in html page instead of separating it in style.css 
I understand that it causes terrible maintainance nightmares and scalability issues.
I plan to go back to change the styles and separate it in css file instead of html!

Future Scope:
-------------
The same program can be re-written using objects and its methods. 
Due to constraint of time, I have created a simple hangman game!
It could be made much mroe interesting and theme based and with level for difficulty and time based challenge!
It could be made better by adding minimum number of clicks generated to get to target score. 
Something that can be used for elementary school kids while learning additions...  

Logic:
The best technical aproach:
1) Creating a 'Crystal' class for each image. Assign 'val' attribute for each image. 
Val attribute is dynamically created and assigned by the random number generated for that particular crystal. 
This can help to handle on click event for all elements of this class. While adding the score on each click, we read val of 'this' element.
This will save redundant code & will add scalability to the application. 
One can go from 4 to 40 ... and so on crystals with this approach.


Run Instructions:
--------------
To run localy:

1) Clone or download this git repository.
2) Run index.html in your web browser.
3) click on the image of orbs to start playing!
4) to test, pls uncommnet the code for testing only from game.js and index.html if you would like to see the random number associated with each crystal/orb.