import { Button, TextField } from "@mui/material";
import "./Checkout.css"

const Checkout = ({ handleSubmit, handleChange, errors }) => {
    return (
        <div className="checkoutContainer" style={{ paddingTop: "50px" }}>
            <h1>Datos de contacto</h1>

            <form className="dataCheckout" onSubmit={handleSubmit}>
                <TextField 
                    label="Name"
                    variant="outlined"
                    name="name"
                    onChange={handleChange}
                    helperText={errors.name}
                    error={errors.name ? true : false}
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
                    label="Phone"
                    variant="outlined"
                    name="phone"
                    onChange={handleChange}
                    helperText={errors.phone}
                    error={errors.phone ? true : false}
                />
                <button type="submit">
                    Comprar
                </button>
            </form>
        </div>
    );
};

export default Checkout;
