const { read, write} = require("./read-write");

//GET
const getRecipe = async (req, res) => {
    const recipes = await read("data.json");
    res.status(200).send(recipes);
};


//POST
const addRecipe = async (req, res) => {
    const recipes = await read ("data.json");
    recipes.push(req.body);
    await write("data.json", recipes);
    res.status(201).send("Recipes created successfully!");
};





module.exports = {
    getRecipe,
    addRecipe,

}