const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000

//middle ware
app.use(cors())
app.use(express.json())


app.get('/', async (req, res) => {
    res.send("doctors portal node server is running now!")
})

app.listen(port, () => {
    console.log(`doctors portal running on port ${port}`);
})