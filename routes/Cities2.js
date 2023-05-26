var express = require("express");
var router = express.Router();
const db = require("../model/helper");


router.get("/cities", (req, res) => {
  // Send back the full list of items
  db("SELECT * FROM cities ORDER BY id ASC;")
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

// Added optional get route by id
router.get("/cities/:id", async (req, res) => {
  let id = req.params.id;
  let sql = `SELECT * FROM cities WHERE id = ${id}`;
  // Send back the full list of items
  try {
    let result = await db(sql);
    let city = result.data;

    if (city.length === 0) {
      // if items array is empty... no item found
      res.status(404).send({ error: "City not found" });
    } else {
      res.send(city[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

/*router.post("/cities", async (req, res) => {
  // NOTE: No check for 404 because just inserting
  // The request's body is available in req.body
  let { text, complete } = req.body; // expect body to have text
  // & complete properties
  // req.body.text;
  // req.body.complete;
  let sql = `
    INSERT INTO items (text, complete)
    VALUES ("${text}", ${complete})
  `;

  try {
    await db(sql); // INSERTS new item

    // Return updated list of items
    let result = await db("SELECT * FROM items");
    // If the query is successful you should send back the full list of items
    res.status(201).send(result.data);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});/*

/*router.put("/cities/:city_id", async (req, res) => {
  // NOTE: PUT REPLACES THE ENTIRE ARRAY
  // The request's body is available in req.body
  let { text, complete } = req.body; // expect body to have text and complete properties
  // URL params are available in req.params
  let id = req.params.todo_id;
  // NOTE: if want to do restructuring, must give exact name of property you want to extract
  // let { todo_id } = req.params

  try {
    // check if item exists
    let result = await db(`SELECT * FROM items WHERE id = ${id}`); // does item exist?
    if (result.data.length === 0) {
      res.status(404).send({ error: "Item not found" });
    } else {
      let sql = `
      UPDATE items
      SET text = "${text}", complete = ${complete}
      WHERE id = ${id}
      `;

      await db(sql); // update item

      let result = await db("SELECT * FROM items");
      // need to request all items, if not will return just the updated object
      let items = result.data;
      res.status(201).send(items);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/cities/:city_id", async (req, res) => {
  // URL params are available in req.params
  let id = req.params.todo_id;

  try {
    let result = await db(`SELECT * FROM items where id = ${id}`);
    if (result.data.length === 0) {
      res.status(404).send({ error: "Item not found" });
    } else {
      let sql = `DELETE FROM items WHERE id = ${id}`;

      await db(sql);

      let result = await db("SELECT * FROM items");
      // need to request all items, if not will return deleted object
      let items = result.data;
      res.send(items); // return updated array
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});*/

module.exports = router;