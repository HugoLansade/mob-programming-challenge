// const { request } = require("express");
const { application, request } = require("express");
const express = require("express");
const router = new express.Router();


const images = [
    "/img/greg-rakozy-oMpAz-DN-9I-unsplash.jpg", 
    "/img/joshua-aragon-FGXqbqbGt5o-unsplash.jpg", 
    "/img/kevin-ku-aiyBwbrWWlo-unsplash.jpg" ]

const users = [
    {name : "keridou",
    email : "simon@lekeridou",
    favoriteLangage : "foot"
    }
]


const homeController = (request, result) => {
    result.render("home.hbs", {images});
}

const squadController = (request, result)=> {
    result.render("allUsers.hbs", {users});
}

const addController = (request, result) => {
    result.render("formUser.hbs");
}




router.get("/", homeController);
router.get("/my-dev-squad", squadController);
router.get("/add-new-ironhacker", addController);



module.exports = router;
