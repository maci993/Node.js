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

const editRecipe = async (req, res) => {
    
    const { index } = req.params;
    let recipes = await read("data.json");
    recipes = recipes.map((recipes , i) => {
        if (i === Number(index)) {
            return {
                ...recipes,
                ...req.body,
            };
        }
        return recipes;
    });
    await write("data.json", recipes);
    res.status(200).send("Recipe edited successfully!")
};

const editRecipe1 = async (req, res) => {

};





module.exports = {
    getRecipe,
    addRecipe,
    editRecipe

}