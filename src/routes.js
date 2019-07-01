const express = require('express');
const multer = require("multer");
const files = require('../src/config/Files');
const photograph = multer(files);
const uploadConfig = require("../src/config/upload");
const routes = new express.Router();
const upload = multer(uploadConfig);
const portifolioController = require("./Controllers/portifolioController");
const skillsController = require("./Controllers/skillsController");
const sobreController = require("./Controllers/sobreControler");
const homeController = require('./Controllers/homeController');
const blogController = require ("./Controllers/blogController");
const contactController = require("./Controllers/contactController");
const footerController = require("./Controllers/footerController");
const homeInfosController = require("./Controllers/homeInfosController");
const blogInfosController = require("./Controllers/blogInfosController");

routes.get("/portifolio", portifolioController.index);
routes.post("/portifolio", upload.single('image'), portifolioController.store);
routes.get("/portifolio/:id", portifolioController.show);
routes.put("/portifolio/:id", upload.single('image'), portifolioController.update);
routes.delete("/portifolio/:id", portifolioController.delete);

routes.get('/home', homeController.index);
routes.post('/home', photograph.fields([{ name: 'photograph', maxCount: 1} , {name: 'curriculum', maxCount: 1}]), homeController.store);
routes.get('/home/:id', homeController.show);
routes.put('/home/:id', homeController.update);
routes.delete('/home/:id', homeController.delete);

routes.get("/sobre", sobreController.index);
routes.post("/sobre", sobreController.store);
routes.get("/sobre/:id", sobreController.show);
routes.put("/sobre/:id", sobreController.update);
routes.delete("/sobre/:id", sobreController.delete);

routes.get("/skills", skillsController.index);
routes.post("/skills", skillsController.store);
routes.get("/skills/:id", skillsController.show);
routes.put("/skills/:id", skillsController.update);
routes.delete("/skills/:id", skillsController.delete);

routes.get("/blog", blogController.index);
routes.post("/blog", blogController.store);
routes.get("/blog/:id", blogController.show);
routes.put("/blog/:id", blogController.update);
routes.delete("/blog/:id", skillsController.delete);


routes.get("/contact", contactController.index);
routes.post("/contact", contactController.store);
routes.get("/contact/:id", contactController.show);
routes.put("/contact/:id", contactController.update);
routes.delete("/contact/:id", contactController.delete);

routes.get("/footer", footerController.index);
routes.post("/footer", footerController.store);
routes.get("/footer/:id", footerController.show);
routes.put("/footer/:id", footerController.update);
routes.delete("/footer/:id", footerController.delete);

routes.get("/infos", homeInfosController.index);
routes.post("/infos", homeInfosController.store);
routes.get("/infos/:id", homeInfosController.show);
routes.put("/infos/:id", homeInfosController.update);
routes.delete("/infos/:id", homeInfosController.delete);

routes.get("/infosb", blogInfosController.index);
routes.post("/infosb", upload.single('image'), blogInfosController.store);
routes.get("/infosb/:id", blogInfosController.show);
routes.put("/infosb/:id", upload.single('image'), blogInfosController.update);
routes.delete("/infosb/:id", blogInfosController.delete);


module.exports = routes;