const express = require("express");
const router = express.Router();

const { handleUserSignup, handleUserSignin } = require("../controllers/user");

router.get("/", (req, res) => {
  return res.render("dashboard");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.post("/signup", handleUserSignup);
router.post("/signin", handleUserSignin);

module.exports = router;
