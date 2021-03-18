const app = require('./config/express')();
const port = app.get('port');
var axios = require("axios").default;

const handlebars = require('express-handlebars');

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.get("/", function(req, res) {

    res.render('form')
});
app.listen(port, () => {
    console.log(`Servidor a rodar na porta ${port}`)
});