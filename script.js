const baseUrl = "https://pokeapi.co/api/v2";

/* axios async await */
async function getPokemonAPI(pokemonName) {
  const endpoint = `${baseUrl}/pokemon/${pokemonName}`;

  try {
    const response = await axios.get(endpoint);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error: error };
  }
}

// group1 exercise1: Pikachu name and type
async function logPikachu() {
  const result = await getPokemonAPI("pikachu");

  if (result.success) {
    const data = result.data;
    console.log("---- Pikachu ----");
    console.log("Pikachu's name is:", data.name);
    const typeName = data.types[0].type.name; // pikachu only has 1
    console.log("Pikachu's type is:", typeName);
  } else {
    console.log("Error fetching Pikachu:", result.error.message);
  }
}

// group1 exercise2: Jigglypuff name & weight
async function logJigglypuff() {
  const result = await getPokemonAPI("jigglypuff");

  if (result.success) {
    const data = result.data;
    console.log("---- Jigglypuff ----");
    console.log("Jigglypuff's name is:", data.name);
    console.log("Jigglypuff's weight is:", data.weight);
  } else {
    console.log("Error fetching Jigglypuff:", result.error.message);
  }
}

// group1 exercise3: Meowth name, height & weight
async function logMeowth() {
  const result = await getPokemonAPI("meowth");

  if (result.success) {
    const data = result.data;
    console.log("---- Meowth ----");
    console.log("Meowth's name is:", data.name);
    console.log("Meowth's height is:", data.height);
    console.log("Meowth's weight is:", data.weight);
  } else {
    console.log("Error fetching Meowth:", result.error.message);
  }
}

// group2 exercise1: second Pokémon
async function getPokemonListAPI() {
  const endpoint = `${baseUrl}/pokemon/`;

  try {
    console.log("---- Pokémon List ----");

    const response = await axios.get(endpoint);
    const data = response.data;

    const pokemonList = data.results;
    const secondPokemon = pokemonList[1]; // index1 = second Pokémon

    console.log("The second Pokémon is:", secondPokemon.name);

  } catch (error) {
    console.log("Error fetching Pokémon list:", error.message);
  }
}

// group2 exercise2: name & cost of first Item
async function getFirstItem() {
  const URL = `${baseUrl}/item/1/`; // item with ID 1

  try {
    console.log("---- First Item ----");

    const response = await axios.get(URL);
    const data = response.data;

    console.log("The name of the first item is " + data.name + ".");
    console.log("The price of the first item is " + data.cost + ".");
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

// group2 exercise3: flavor of the first Berry
async function getFirstBerryFlavor() {
  const URL = `${baseUrl}/berry/1/`; // ID 1 cheri berry

  try {
    console.log("---- First Berry ----");

    const response = await axios.get(URL);
    const data = response.data;

    console.log("The name of the first berry is " + data.name + ".");

    // log only the flavor names
    console.log("Flavors of this berry:");
    data.flavors.forEach(f => {
      console.log(" - " + f.flavor.name);
    });
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

// group3 exercise1: ability data by ID, log ability name & effect
async function logAbilityById(id) {
  const endpoint = `${baseUrl}/ability/${id}/`;

  try {
    const response = await axios.get(endpoint);
    const data = response.data;

    console.log("---- Ability ----");
    console.log("Ability name is:", data.name);

    // pick the first English one
    const effectEntry = data.effect_entries.find(entry => entry.language.name === "en");
    console.log("Ability effect is:", effectEntry.effect);
  } catch (error) {
    console.log("Error fetching ability:", error.message);
  }
}

// group3 exercise2: item data by ID, log the item name & category
async function logItemById(id) {
  const endpoint = `${baseUrl}/item/${id}/`;

  try {
    const response = await axios.get(endpoint);
    const data = response.data;

    console.log("---- Item ----");
    console.log("Item name is:", data.name);
    console.log("Item category is:", data.category.name);
  } catch (error) {
    console.log("Error fetching item:", error.message);
  }
}

// group3 exercise3: data by ID, log the type name & its damage relations
async function logTypeById(id) {
  const endpoint = `${baseUrl}/type/${id}/`;

  try {
    const response = await axios.get(endpoint);
    const data = response.data;

    console.log("---- Type ----");
    console.log("Type name is:", data.name);
    console.log("-- Damage Relations --");

    console.log("Double Damage From:");
    data.damage_relations.double_damage_from.forEach(item => {
      console.log(" -", item.name);
    });

    console.log("Double Damage To:");
    data.damage_relations.double_damage_to.forEach(item => {
      console.log(" -", item.name);
    });

    console.log("Half Damage From:");
    data.damage_relations.half_damage_from.forEach(item => {
      console.log(" -", item.name);
    });

    console.log("Half Damage To:");
    data.damage_relations.half_damage_to.forEach(item => {
      console.log(" -", item.name);
    });

    console.log("No Damage From:");
    if (data.damage_relations.no_damage_from.length === 0) {
      console.log(" - No Results");
    } else {
      data.damage_relations.no_damage_from.forEach(item => {
        console.log(" -", item.name);
      });
    }

    console.log("No Damage To:");
    if (data.damage_relations.no_damage_to.length === 0) {
      console.log(" - No Results");
    } else {
      data.damage_relations.no_damage_to.forEach(item => {
        console.log(" -", item.name);
      });
    }

  } catch (error) {
    console.log("Error fetching type:", error.message);
  }
}

/* run exercises */
logPikachu();
logJigglypuff();
logMeowth();

getPokemonListAPI();  // ivysaur
getFirstItem();  // master-ball  
getFirstBerryFlavor(); 

logAbilityById(65); 
logItemById(1);    
logTypeById(10);   