const studentsDb = require('./Models/students-model')

const gelAllStudent = (req, res) => {
  studentsDb
    .find()
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ massage: err }))
}

const getById = (req, res) => {
  studentsDb
    .findById(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ massage: err }))
}

const postMethod = (req, res) => {
  studentsDb
    .create(req.body)
    .then(result => res.send(`Add id ${req.body}`))
    .catch(err => res.status(404).send({ massage: err }))
}

const putMethod = (req, res) => {
  studentsDb
    .findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ massage: err }))
}

const deleteMethod = (req, res) => {
  studentsDb.findByIdAndDelete(req.params.id, req.body)
.then(result=>res.res(result))}

module.exports = { gelAllStudent, getById, postMethod, putMethod, deleteMethod }