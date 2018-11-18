const express = require("express");
const os = require("os");
const fetch = require("node-fetch");

const app = express();

app.use(express.static("dist"));
app.get("/api/items", async (req, res) => {
  const { search } = req.query;

  try {
    const response = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}`
    ).then(response => response.json());
    const resultSpliced = response.results.splice(0, 4);
    const category = response.filters.filter(f => f.id === "category");
    const resultMapped = resultSpliced.map(product => {
      const {
        id,
        title,
        price,
        condition,
        shipping,
        thumbnail,
        currency_id,
        sold_quantity,
        address,
        category_id
      } = product;

      return {
        id,
        title,
        condition,
        price: {
          amount: price,
          currency: currency_id
        },
        picture: thumbnail,
        free_shipping: shipping.free_shipping,
        location: address.state_name
      };
    });

    res.send({
      categories: category[0] ? category[0].values[0].path_from_root : [],
      items: resultMapped
    });
  } catch (reject) {
    console.log(reject);
    res.status(500).send(reject);
  }
});
app.get("/api/items/:id", (req, res) =>
  res.send({ username: os.userInfo().username })
);
app.listen(8080, () => console.log("Listening on port 8080!"));
