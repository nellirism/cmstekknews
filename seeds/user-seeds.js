const { User } = require('../models');

const userData = [{
        username: "alice",
        twitter: "alice50",
        github: "alice50.github.com",
        email: "alice@gmail.com",
        password: "password1"
    },
    {
        username: "evangeli",
        twitter: "evangelitweets",
        github: "evangeli.github.com",
        email: "evangeli@gmail.com",
        password: "password2"
    },
    {
        username: "maleficent",
        twitter: "darksecret",
        github: "darkmaleficent.github.com",
        email: "maleficent@gmail.com",
        password: "password3"
    },
    {
        username: "kate",
        twitter: "katebecktweets",
        github: "kate.github.com",
        email: "kateb@gmail.com",
        password: "password4"
    },
    {
        username: "eliadmanner",
        twitter: "eliadtwitters",
        github: "eliadmanner@github.com",
        email: "eliad@gmail.com",
        password: "password5"
    },
    {
        username: "bethlehem",
        twitter: "bethtwitter",
        github: "bethlehem.github.com",
        email: "bethlehem@gmail.com",
        password: "password6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;