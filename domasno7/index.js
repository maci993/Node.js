// Napravete GET i POST ruta so pomos na express 
// bibliotekata kade sto ke zemate recepti i ke 
// dodavate
// novi vo data.json fajlot.

// Primer podatoci:
//  [{ "recept": "Alva", "sostojki":
//   { "jajca": 2, "mleko": 1 } }]

// *Bonus: Probajte da napravite i PUT ruta.

const express = require("express");
const {
    getRecipe,
    addRecipe,
    editRecipe
} = require ("./recipes");

const app = express();
app.use(express.json());

app.get("/recipes", getRecipe);
app.post("/recipes", addRecipe);
app.put("/recipes", editRecipe);

// await editRecipe(0, {
//     recept: "Lesni i brzi kolaci"
// });

app.listen(3000, () => console.log("Server started at port 3000"));