const Item = require('../models/item');

module.exports = {
  // Gets a list of items from the database
  getAll: (req, res) => {
    Item.find({}, (err, items) => {
      if (err) {
        return res.status(500).json({ error: 'Error getting items' });
      }
      res.json(items);
    });
  },

  // Creates a new item in the database
  create: (req, res) => {
    const newItem = new Item(req.body);
    newItem.save((err, item) => {
      if (err) {
        return res.status(500).json({ error: 'Error saving item' });
      }
      res.json(item);
    });
  },

  // Updates an existing item in the database
  update: (req, res) => {
    Item.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, item) => {
      if (err) {
        return res.status(500).json({ error: 'Error updating item' });
      }
      res.json(item);
    });
  },

  // Deletes an item from the database
  delete: (req, res) => {
    Item.findByIdAndRemove(req.params.id, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting item' });
      }
      res.json({ message: 'Item deleted' });
    });
  },
};
