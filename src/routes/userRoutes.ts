import { Router } from "express";
import { PrismaClient } from "@prisma/client";
const routes = Router();
const prisma = new PrismaClient();

//user CRUD
//create user
routes.post('/', async (req, res) => {
    try {
        const { email, name, username } = req.body;
        console.log(email, name, username);
        const result = await prisma.user.create({
            data: {
                email,
                name,
                username,
                bio: "hello i'm new one "
            }
        })
        res.json(result);
    }
    catch (e) {
        res.status(400).json({ error: "username should be unique" })
    }

})
//search users
routes.get('/', async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
})
//get one user
routes.get('/:id', async (req, res) => {
    const id = req.params.id;
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    })
    res.json(user);
})

//Delete one user
routes.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await prisma.user.delete({
            where: { id: Number(id) },
        })
        res.status(200).json({ result: `${id} deleted` });
    }
    catch (e) {
        res.status(400).json({ error: "update resource failed" })
    }

})
//update one user
routes.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const { bio, name, image } = req.body;
        const result = await prisma.user.update({
            where: { id: Number(id) },
            data: { bio, name, image }
        })
        res.json(result);
    }
    catch (e) {
        res.status(400).json({ error: "update resource failed" })
    }
})

export default routes;