# JavaScript Practice Week 6
[CodeX Assignment](https://codexacademy.moodlecloud.com/mod/assign/view.php?id=3277) to practice making requests to the [Pokémon API](https://pokeapi.co/) using [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) and [Axios](https://axios-http.com/docs/intro). Logged my results using `console.log`.

## Exercises
Group 1: Pokémon Data Fetching
- Exercise 1: Fetch and log the name and type of Pikachu.  
- Exercise 2: Fetch and log the name and weight of Jigglypuff.  
- Exercise 3: Fetch and log the name, height, and weight of Meowth.  

Group 2: Miscellaneous/List API Calls
- Exercise 1: Fetch and log the name of the second Pokémon.  
- Exercise 2: Fetch and log the name and cost of the first Item.  
- Exercise 3: Fetch and log the flavor of the first Berry.  

Group 3: Advanced API Calls by ID
- Exercise 1: Fetch ability data by ID and log the ability name and effect.  
- Exercise 2: Fetch item data by ID and log the item name and category.  
- Exercise 3: Fetch type data by ID and log the type name and its damage relations.  

## Resources
- [Axios Documentation](https://axios-http.com/docs/intro)  
- [Pokémon API Documentation](https://pokeapi.co/docs/v2)  
- [CodeX Week 5 & 6 Resource Files](https://codexacademy.moodlecloud.com/course/view.php?id=64)
      - JavaScript Practice Week 6 Examples.js in Week 6 Resource Folder)
- W3Schools ([https://www.w3schools.com/jsref/jsref_find.asp](https://www.w3schools.com/jsref/jsref_find.asp)) for checking nested property to select the English entry (`language.name === "en"`) 

## To Run
1. Clone this project to your computer and use only these 2 files: `index.html` and `script.js`.  
2. Open `index.html` in your browser.  
3. Open the developer console (right‑click → Inspect → Console tab).  

## Expected Output
All data is fetched live from [PokéAPI](https://pokeapi.co/), so if it updates, the output may change.  
Using the current data for Pikachu, Jigglypuff, Meowth, the Pokémon list, the first item, the first berry, ability ID 65, item ID 1, and type ID 10, the console will show:
- Pikachu's name is: pikachu
- Pikachu's type is: electric

- Jigglypuff's name is: jigglypuff
- Jigglypuff's weight is: 55

- Meowth's name is: meowth
- Meowth's height is: 4
- Meowth's weight is: 42

- The second Pokémon is: ivysaur
- The name of the first item is master-ball.
- The price of the first item is 0.

- The name of the first berry is cheri.
Flavors of this berry: spicy, dry, sweet, bitter, sour

Ability name is: overgrow
Ability effect is: Powers up Grass-type moves when the Pokémon's HP is low.

Item name is: master-ball
Item category is: standard-balls

Type name is: fire
Double Damage From:
 - water
 - ground
 - rock
Double Damage To:
 - grass
 - ice
 - bug
 - steel
Half Damage From:
 - fire
 - grass
 - ice
 - bug
 - steel
 - fairy
Half Damage To:
 - fire
 - water
 - rock
 - dragon
No Damage From:
 - No Results
No Damage To:
 - No Results


