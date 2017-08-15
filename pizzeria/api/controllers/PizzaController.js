/**
 * PizzaController
 *
 * @description :: Server-side logic for managing pizzas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  crearPizza: function (req, res) {
    var parametros = req.allParams();
    sails.log.info("Parametros", parametros);
    var nuevaPizza = {
      ingredientes: parametros.ingredientes,
    precio: parametros.precio

    };

    Pizza.create(nuevaPizza)
      .exec(function (error, pizzaCreado) {
        if (error) {
          return res.serverError(error);
        }
        else {
          return res.redirect("/");

        }
      });
  }
}

