const mongoose = require("mongoose");
const {
    dbURL
} = require('../config');
const Card = require("../api/card/card.model");
const List = require("../api/list/list.model");

mongoose.connect(dbURL)
    .then(() => console.log(`Connected to ${dbURL}`))
    .catch(e => console.log(e))

const lista = [
    {
        cards: ["5a93ef1c2c92f3151a46e300", "5a93ef1c2c92f3151a46e2ff"],

    }

];
List.collection.drop();

lista.forEach(lcard => {
    let newLcard = new List(lcard);
    newLcard

        .save(lcard)
        .then(newSavedLcard => console.log(newSavedLcard))
        .catch(err => console.log(err));
});