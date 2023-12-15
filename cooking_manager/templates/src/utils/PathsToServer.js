const BASE_URL = 'http://localhost:8000/'

const PathsToServer = {
    recipeAll: `${BASE_URL}recipe/`,
    recipeCategoriesAll: `${BASE_URL}recipe/categories/`,
    recipeCategoryCreate: `${BASE_URL}recipe/category/create/`,
    recipeCategoryId: `${BASE_URL}recipe/category/:id/`,
}

export default PathsToServer;