import { addDoc, collection } from "@firebase/firestore"
import { products } from "./asyncMock"
import { database } from "./services/firebase/firebaseConfig"

const AgregarDocs = () => {

    const rellenar = () => {

        let itemsCollections = collection(database, "products")

        products.forEach((elemento) => {
            addDoc(itemsCollections, elemento)
        })

    }

    return (
        <div>
            <button onClick={rellenar}>Rellenar mi coleccion de productos</button>
        </div>
    )
}

export default AgregarDocs