import { Router } from "express";
const routes = Router();

//user CRUD
//create user
routes.post('/', (req, res) => {
    res.status(500).send(`not implemented`);
})
//search user
routes.get('/', (req, res) => {
    res.status(500).send(`not implemented`);
})
//get one user
routes.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(500).send(`not implemented ${id}`);
})
//Update one user
routes.post('/:id', (req, res) => {
    const id = req.params.id;
    res.status(500).send(`not implemented ${id}`);
})
//Delete one user
routes.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(500).send(`not implemented ${id}`);
})
export default routes;