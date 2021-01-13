const { check } = require('express-validator')
module.exports = function(app) {
    
    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).send('Something broke!')
    })

    app.get('/', function(req, res) {    
        res.render('index', {validacao:{}})
    })

    app.post('/validacao', 
	[
		check('nome', 'Preencha o campo Nome ').not().isEmpty(),
		check('senha', 'Preencha o campo Senha ').not().isEmpty()
	],
    function(req, res) {
        app.app.controllers.index.validacao(app, req, res)
    })
    app.get('/validacao', function(req, res) {
        
        res.redirect('/')
    })

    app.get('/sair', function(req, res) {
        req.session.destroy((err) => {
            res.render('index', {validacao:{}})
        })
    })

    /*
        A parte de rotas sera dividida em Adm e Norm

    */
   


}