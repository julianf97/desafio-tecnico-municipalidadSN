import express from "express";
import { userModel } from "../db/database.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Server running");
});

router.get("/users/allusers", async (req, res) => {
    try {
        const users = await userModel.findAll({
            attributes: ["id_user", "name", "lastName", "email", "password", "admin"],
        });

        res.json(users);
    } catch (error) {
        console.error("Error al obtener la lista de usuarios:", error);
        res.status(500).json({ success: false, error: "Error al obtener la lista de usuarios" });
    }
});

router.post("/users", async (req, res) => {
    const { name, lastName, email, password, admin } = req.body;

    const existingUser = await userModel.findOne({
        where: {
            email: email,
        },
    });

    if (existingUser) {
        return res.status(400).json({ error: "El correo electrónico ya está registrado" });
    }

    try {
        const newUser = await userModel.create({
            name,
            lastName,
            email,
            password,
            admin,
        });

        res.status(201).json({ success: true, user: newUser.toJSON() });
    } catch (error) {
        console.error('Error al agregar un usuario:', error);
        res.status(500).json({ success: false, error: 'Error al agregar un usuario' });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({
            where: {
                email: email,
                password: password,
            },
        });

        if (user) {
            res.json({
                success: true,
                admin: user.admin,
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Credenciales inválidas",
            });
        }
    } catch (error) {
        console.error("Error en la autenticación:", error);
        res.status(500).json({
            success: false,
            message: "Error en la autenticación",
        });
    }
});

router.post("/users/check-email", async (req, res) => {
    const { email } = req.body;

    try {
        const existingUser = await userModel.findOne({
            where: {
                email: email,
            },
        });

        res.json({
            exists: existingUser ? true : false,
        });

    } catch (error) {
        console.error("Error al verificar el correo electrónico:", error);
        res.status(500).json({
            success: false,
            error: "Error al verificar el correo electrónico",
        });
    }
});

export default router;