const studentControllers = require('../student-cntl');
const express = require('express')
const router = express.Router()

router.get('/', studentControllers.gelAllStudent)

router.get('/:id', studentControllers.getById)

router.post('/', studentControllers.postMethod)

router.put('/:id', studentControllers.putMethod)

router.delete('/:id', studentControllers.deleteMethod)

module.exports = router;