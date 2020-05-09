const express = require('express')
const router = express.Router()
const User = require("../../database/models/user")
const Fav = require("../../database/models/favorites")
const passport = require('../../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password
            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})



router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
})

router.post("/favorites", (req, res) => {
    const newFav = new Fav ({
        user: req.body.user,
        name: req.body.name,
        location: req.body.location,
        star: req.body.star,
        url: req.body.url,
        image: req.body.image
    });

    newFav.save((err, saveFav) => {
        if (err) return res.json(err);
        res.json(saveFav);
    })

})

// Currently not functioning as intended
// router.get('/favorites', (req, res, next) => {
//     console.log('===== Favorites!!======')
//     console.log(res.req)
//     // res.json({ favorites: res.data })
    
// })

router.get("/favorites", function(req, res) {
// Find all Users
    Fav.find({})
        .then(favorites => {
            // If all Users are successfully found, send them back to the client
            console.log(favorites)
            res.json(favorites);
        })
        .catch(err => {
            // If an error occurs, send the error back to the client
            res.json(err);
        });
});

router.get('/profile:user', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})
module.exports = router