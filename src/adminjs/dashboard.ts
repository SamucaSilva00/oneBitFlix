import AdminJS, { PageHandler } from "adminjs"
import { Category, Course, Episode, User } from "../models"

export const dashboardOptions: {
    handler?: PageHandler
    component?: string
} = {
    component: AdminJS.bundle("./components/Dashboard"),
    handler: async (req, res, context) => {
      const couses = await Course.count()
      const episodes = await Episode.count()
      const categories = await Category.count()
      const statndardUsers = await User.count({where: {role: "user"}})

      res.json({
        "Cursos": couses,
        "Episódios": episodes,
        "Categorias": categories,
        "Usuários": statndardUsers
      })
    }
   }