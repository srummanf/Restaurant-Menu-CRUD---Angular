const express = require('express');
const app = express();
const menuRoute = express.Router();
// menu model

let menu = require('../models/menu');
// Add menu
menuRoute.route('/create').post((req, res, next) => {
  menu.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All menus
menuRoute.route('/').get((req, res) => {
  menu.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single menu
menuRoute.route('/read/:id').get((req, res) => {
  menu.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update menu
menuRoute.route('/update/:id').put((req, res, next) => {
  menu.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete menu
menuRoute.route('/delete/:id').delete((req, res, next) => {
  menu.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = menuRoute;
