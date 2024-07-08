const User = require("../models/user");
const bcrypt = require("bcryptjs");

async function handleUserSignup(req, res) {
  try {
    const { fullname, email, password } = req.body;

  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, async function (err, hash) {
      if(err){
        console.log("Password not hashed");
      }
        await User.create({
        fullname: fullname,
        email: email,
        password: hash,
      });
    })
  });

  return res.redirect("/signin");
  
  } catch (err) {
    console.log("ERROR: User is not signed up.");
  }
}

async function handleUserSignin(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  bcrypt.compare(password, user.password, function (err, result) {
    try {
      if(result) {
        return res.redirect("/");
      } else {
        return res.render("/signin", { error: "incorrect Username/Password." });
      }
    } catch (err) {
      console.log("ERROR: Something went wrong. handleUserSignin");
    }
  });
}

module.exports = {
  handleUserSignup,
  handleUserSignin,
};
