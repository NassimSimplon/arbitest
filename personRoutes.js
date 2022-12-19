const router = require('express').Router();
const person = require('./personController')


router.get('/get/all',person.getAllPersons);
router.delete('/delete/:id',person.deletePerson);
router.put('/put/:id',person.updatePerson);
 router.delete('/delete/all',person.deleteAllPersons);
 router.get('/get/one/:id',person.getPersonById);
 router.get('/find/one/:id',person.findPerson);
 

module.exports = router;
 

