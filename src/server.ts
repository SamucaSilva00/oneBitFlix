import express from "express";
import cors from "cors"
import { sequelize } from "./database";
import { adminJsRouter, adminjs } from "./adminjs";
import { router } from "./routes";

const app = express()

app.use(cors())
app.use(express.static('public'))
app.use(express.json())
app.use(adminjs.options.rootPath, adminJsRouter)
app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(()=>{
        console.log(`DB connection sucessfull`)
    })
    console.log(`Server started sucessfuly at port ${PORT}`)
});