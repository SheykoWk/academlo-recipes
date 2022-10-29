const Categories = require('../models/categories.models')

//? Ver todas las categorias
//? Ver una categoria en especifico
//? Crear categoria
//? Eliminar categoria

const getAllCategories = async () => {
    const data = await Categories.findAll()
    return data
}

const getCategoryById = async (id) => {
    const data = await Categories.findOne({
        where: {
            id
        }
    })
    return data
}

const createCategory = async (name) => {
    const data = await Categories.create({
        name
    })
    return data
}

const deleteCategory = async (id) => {
    const data = await Categories.destroy({
        where: {
            id
        }
    })
    return data
}

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    deleteCategory
}
