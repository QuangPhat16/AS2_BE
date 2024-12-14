const express = require('express');
const router = express.Router();
const {getFoodDrink, createFoodDrink, updateFoodDrink, deleteFoodDrink} = require('../controllers/food_drink_comboController')

router.post('/', async (req, res) => {
  try {
   await createFoodDrink(req, res);

  }catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
   await getFoodDrink(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


router.put('/', async (req, res) => {
  try {
    await updateFoodDrink(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    await deleteFoodDrink(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
