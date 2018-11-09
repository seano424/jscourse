Objects and Functions
-Everything is an object (Well, almost everything)
  `Primitives`
    Numbers
    Strings
    Booleans
    Undefined
    Null
  `Everything Else... is an object`
    Arrays
    Functions
    Objects
    Dates
    Wrappers for Numbers, Strings, Booleans

Objected Oriented Programming
  -Objects interact with one another through `methods` and `properties`
  -Used to store data, structure applications into modules, and keeping code clean
  `Constructors`:
  ----------------------
  -      Person        -

  -       name         -   
       yearOfBirth   
  -       job          -

  ----------------------
  `Inheritance`: When one object is based on another object
                 When one object gets access to another object
                 ----------------------
                 -      Athlete        -

                 -       olympics      -   
                      olympicMedals         
                 -----------------------

                ==>                  <==
                 ----------------------
                 -  Athlete / person  -

                 -     olympics       -   
                      olympicMedals         
                 -      Person        -

                 -       name         -   
                     yearOfBirth   
                 -       job          -
                 -----------------------

`Prototype`: JS is a Prototype bases language
Each and every object has a Prototype property
Inheritance is made possible throught the Prototype property
