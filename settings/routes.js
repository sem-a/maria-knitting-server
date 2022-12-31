'use strict';

module.exports = (app) => {
  const indexController = require('../controller/IndexController');
  const userController = require('../controller/UserController');
  const productController = require('../controller/ProductsController');

  app.route('/').get(indexController.index);
  app.route('/user/registration').get(userController.registration);
  app.route('/user').get(userController.user);
  app.route('/products/changeCategory').get(productController.changeCategory);
  app.route('/products/newproducts').get(productController.newproducts);
  app.route('/products/popularproducts').get(productController.popularproducts);
  app.route('/products/category').get(productController.categories);
}