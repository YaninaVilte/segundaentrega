import CartContainer from "../Cart/CartContainer.jsx"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer.jsx"
import ItemListContainer from "../ItemListContainer/ItemListContainer.jsx"
import CheckoutContainer from "../../components/pages/checkout/CheckoutContainer.jsx"
import Form from "../pages/Form/Form.jsx"
import FormFormik from "../pages/formFormik/FormFormik.jsx"

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
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
    {
        id: "form",
        path: "/form",
        Element: Form
    },
    {
        id: "formik",
        path: "/formik",
        Element: FormFormik
    }


]

