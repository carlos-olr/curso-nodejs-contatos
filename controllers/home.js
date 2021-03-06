module.exports = function (app) {
    return {
        index: function (req, res) {
            res.render('home/index');
        },
        login: function (req, res) {
            var nome = req.body.usuario.nome;
            var email = req.body.usuario.email;

            if (nome && email) {
                var usuario = req.body.usuario;
                usuario['contatos'] = [];
                req.session.usuario = usuario;
                res.redirect('/contatos');
            } else {
                res.redirect('/');
            }
        },
        logout: function (req, res) {
            req.session.destroy();
            res.redirect('/');
        }
    };
};