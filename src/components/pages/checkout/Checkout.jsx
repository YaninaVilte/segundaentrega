import { TextField } from "@mui/material";
import "./Checkout.css"

const Checkout = ({ handleSubmit, handleChange, errors }) => {
    return (
        <div className="checkoutContainer" style={{ paddingTop: "50px" }}>
            <h1>Datos de contacto</h1>

            <form className="dataCheckout" onSubmit={handleSubmit}>
                <TextField
                    label="Nombre"
                    variant="outlined"
                    name="name"
                    onChange={handleChange}
                    helperText={errors.name}
                    error={errors.name ? true : false}
                />
                <TextField
                    label="Télefono"
                    variant="outlined"
                    name="phone"
                    onChange={handleChange}
                    helperText={errors.phone}
                    error={errors.phone ? true : false}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    onChange={handleChange}
                    helperText={errors.email}
                    error={errors.email ? true : false}
                />
                <TextField
                    label="Repetir Email"
                    variant="outlined"
                    name="repeatEmail"
                    onChange={handleChange}
                    helperText={errors.repeatEmail}
                    error={errors.repeatEmail ? true : false}
                />
                <button type="submit">
                    Comprar
                </button>
            </form>
        </div>
    );
};

export default Checkout;
