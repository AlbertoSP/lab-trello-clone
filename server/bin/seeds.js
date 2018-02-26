const mongoose = require("mongoose");
const {dbURL} = require('../config');
const Card = require("../api/card/card.model");
const List = require("../api/list/list.model");

mongoose.connect(dbURL)
       .then(() => console.log(`Connected to ${dbURL}`))
       .catch(e => console.log(e))

const CardArray = [
 {
    title:"As de corazones4",
    description:"Con esa carta vas muy bien",
    position:2,
    list:"5a93f6daac90971c2056f58c",
   
 },
 {
    title:"As de picas",
    description:"Con esa carta vas muy bien",
    position:4,
    list:"5a93f6daac90971c2056f58c",
 },
 {
    title:"As de corazones1",
    description:"Con esa carta vas muy bien",
    position:3,
    list:"5a93f6daac90971c2056f58c",
 },
 {
    title:"As de corazones3",
    description:"Con esa carta vas muy bien",
    position:5,
    list:"5a93f6daac90971c2056f58c",
 }
];
Card.collection.drop();

CardArray.forEach(card => {
 let newCard = new Card(card);
 newCard
    
   .save(card)
   .then(newSavedCard => console.log(newSavedCard ))
   .catch(err => console.log(err));
});