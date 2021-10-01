const express = require('express')
const expressHandlebars = require('express-handlebars')

const app = express()

// configure Handlebars view engine
app.engine('hbs', expressHandlebars({
    defaultLayout: '00-main',
    extname: '.hbs',
  }))
app.set('view engine', 'hbs')

app.get('/', (req, res)=>res.render('00-home'))

const port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log(`Express가 http://localhost:${port} 에서 시작되었습니다.`+
    `종료하려면 Crtl+C를 누르세요.`)
})
