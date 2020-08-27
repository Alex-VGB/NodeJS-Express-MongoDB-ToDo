const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

async function start() {
    try {
        await mongoose.connect('mongodb+srv://alex:alexalex1@cluster0.l1m9d.mongodb.net/todos', {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log('Server has been Started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()