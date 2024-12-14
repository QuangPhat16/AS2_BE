const express = require('express');
const router = express.Router();
const {createEmployee, updateEmloyee, getEmployees, deleteEmployee} = require('../controllers/employeeController')

router.post('/', async (req, res) => {
  try {
   await createEmployee(req, res);

  }catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
   await getEmployees(req, res);

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


router.put('/', async (req, res) => {
  try {
     await updateEmloyee(req, res);

  } catch (err) {
     console.error(err);
     res.status(500).json({ error: err.message });
  }
});

router.delete('/', async (req, res) => {
  try {
     await deleteEmployee(req, res);

  } catch (err) {
     console.error(err);
     res.status(500).json({ error: err.message });
  }
});

module.exports = router;
