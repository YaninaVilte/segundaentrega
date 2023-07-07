import CartContainer from "../Cart/CartContainer.jsx"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx"

export const menuRoutes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "categories",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "itemDetail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },
    {
        id: "carrito",
        path: "/carrito",
        Element: CartContainer
    },


]

