const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::user-app.user-app", ({ strapi }) => ({
    async login(ctx) {
        const { email, password } = ctx.request.body;
        // Buscar usuario en la base de datos
        const user = await strapi.db.query("api::user-app.user-app").findOne({
            where: { email }
        });

        if (!user) {
            return ctx.badRequest("Usuario no encontrado");
        }

        // Verificar la contraseña
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return ctx.badRequest("Contraseña incorrecta");
        }

        // Generar el token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );

        return ctx.send({
            message: "Login exitoso",
            user: {
                id: user.id,
                email: user.email
            },
            token
        });
    },
    async register(ctx) {
        const { name, email, password } = ctx.request.body;
        const check_user = await strapi.db.query("api::user-app.user-app").findOne(
            {
                where: { email }
            })
        if (check_user != null) {
            return ctx.send({
                message: "Usuario existente"
            }, 400);
        }

        const password_encrpyt = await bcrypt.hash(password, 10);
        const user = await strapi.db.query("api::user-app.user-app").create(
            {
                data: {
                    name: name,
                    email: email,
                    password: password_encrpyt,
                    rol: "user",
                },
            }
        );
        const token = jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: "2h" }
        );
        return ctx.send({
            message: "Registro exitoso",
            token
        })
    }
}));
