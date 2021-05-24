
const { User } = require("../models.old/Models");

const router = require("express").Router();  // --> creating the router

router.post("/", async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  const results = await User.findAll({where: {id: 1}});
  res.status(200).json({ results });

});

module.exports = router;
