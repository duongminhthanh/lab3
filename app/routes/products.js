const { createProducts, getProducts } = require("./../controller/products");

module.exports = function (app) {
    app.get("/products", getProducts);
    app.post("/products", createProducts);
};
