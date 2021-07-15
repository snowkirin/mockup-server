const express = require('express')
const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const users = [
    { id: 1, name: "유저1" },
    { id: 2, name: "유저2" },
    { id: 3, name: "유저3" }
];

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get("/api/users", (req, res) => {
    res.json({users: users});
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})