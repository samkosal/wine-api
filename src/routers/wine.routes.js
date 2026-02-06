import { Router } from "express";
import * as wineController from "../controllers/wine.controller.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("default", {
        title: "MVC Starter App",
        subtitle: "Express + EJS + Static Assets"
    });
});


//http://localhost:3000/wines
router.get("/wines", wineController.getAllWines);

//http://localhost:3000/wines/3
//http://localhost:3000/wines/9999

router.get("/wines/:id", wineController.getWineById);

//http://localhost:3000/wines/9999
router.post("/wines", wineController.createWine);

router.put("/wines/:id", wineController.updateWine);

router.delete("/wines/:id", wineController.deleteWine);
export default router;