const express = require('express');
const router = express.Router();
const {createOrder, getOrders, deleteOrder} = require('../controllers/orderController')

router.post('/', async (req, res) => {
  try {
   await createOrder(req, res);

  }catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
   await getOrders(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


router.delete('/', async (req, res) => {
  try {
    await deleteOrder(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
