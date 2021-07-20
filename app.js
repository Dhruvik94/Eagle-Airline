const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const bookingRouter = require("./routes/BookingRoute")
const userRouter = require("./routes/UserRoute")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// app.use("/booking", bookingRouter)
// app.use("/user", userRouter)

app.get("/", (req, res) => {
    res.send("Hello World")
})

module.exports = app
