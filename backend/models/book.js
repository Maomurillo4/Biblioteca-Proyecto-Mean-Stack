import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    name:String,
    description:String,
    dbStatus:Boolean,
    registerDate:{type:Date, default: Date.now},
});

const book = mongoose.model("books", bookSchema);

export default book;