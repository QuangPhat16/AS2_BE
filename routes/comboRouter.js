const express = require('express');
const router = express.Router();
const {getCombos, createCombo, updateCombo, deleteCombo} = require('../controllers/food_drink_comboController')

router.post('/', async (req, res) => {
  try {
   await createCombo(req, res);

  }catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
   await getCombos(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


router.put('/', async (req, res) => {
  try {
    await updateCombo(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    await deleteCombo(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
