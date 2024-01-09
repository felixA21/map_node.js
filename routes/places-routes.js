const express = require("express");

const placeControllers = require("../controllers/places-controllers");

const router = express.Router();

router.get("/:pid", placeControllers.getPlaceById);

router.get("/user/:uid", placeControllers.getPlaceByUserId);

router.post("/", placeControllers.createPlace);

router.patch("/:pid", placeControllers.updatePlaceById);

router.delete("/:pid", placeControllers.deletePlace);

module.exports = router;
