const path = require("path");
const router = require("express").Router();
const userRoutes = require("./user/user");
// API Routes
router.use("/user", userRoutes);
// If no API routes are hit, send the React app


router.get('/', (req, res, next) => {
  console.log('===== user!!======')
  console.log("heroku is why I drink....")
  res.sendFile(path.join(__dirname, '../client/', 'index.html')),
  console.log(req.user)
  if (req.user) {
      res.json({ user: req.user })
  } else {
      res.json({ user: null })
  }
})



// router.get('*', function(request, response) {
//   response.sendFile(path.resolve(__dirname, '../client/', 'index.html'));
// });

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;