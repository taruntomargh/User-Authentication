const User = require("../models/user");

async function handleUserSignup(req, res) {
  const { fullname, email, password } = req.body;
  console.log(fullname, email, password);

  const user = await User.create({
    fullname: fullname,
    email: email,
    password: password,
  });

  if (!user) {
    return res.render("/signup", { error: "User not created. Try Again" });
  }

  return res.redirect("/signin");
}

async function handleUserSignin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });

  if (!user) {
    return res.render("/signin", { error: "User not found. Try Again" });
  }

  return res.redirect("/");
}

module.exports = {
  handleUserSignup,
  handleUserSignin,
};
