const mongoose = require("mongoose");
// import { Buffer } from 'buffer';

const recipeSchema = new mongoose.Schema({
    image: {
        data: Buffer, // Store image data as binary
        contentType: String, // Specify the content type (e.g., image/jpeg, image/png)
    },
    description: String, // Description of the recipe
}, {
    collection: "items" // Set the collection name to "items"
});
// window.Buffer = Buffer;
module.exports = mongoose.model("recipeSchema", recipeSchema);
