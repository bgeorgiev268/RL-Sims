const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user/user");
// API Routes
router.use("/user", userRoutes);
// If no API routes are hit, send the React app


router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})

router.get('*', function(request, response) {
  response.sendFile("../client/publci/index.html");
});

router.use(function(req, res) {
  res.sendFile("../client/publci/index.html");
});

module.exports = router;