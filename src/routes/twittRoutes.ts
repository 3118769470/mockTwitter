import { Router } from "express";
const routes = Router();


//twitts CRUD
//create twitt
routes.post('/', (req, res) => {
    res.status(500).send(`not implemented`);
})
//search twitts
routes.get('/', (req, res) => {
    res.status(500).send(`not implemented`);
})
//get one twitt
routes.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(500).send(`not implemented ${id}`);
})
//Update one twitt
routes.post('/:id', (req, res) => {
    const id = req.params.id;
    res.status(500).send(`not implemented ${id}`);
})
//Delete one twitt
routes.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.status(500).send(`not implemented ${id}`);
})
export default routes;