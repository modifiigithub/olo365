import CartItem from "../../components/CartItem";


export default function Carts() {
    return (
        <section className="container py-6">
            <h3 className="text-2xl font-semibold">Your Cart</h3>

            <div className="grid grid-cols-12 gap-8">
                <div className="col-span-8">
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                    <CartItem image="md" size="large" />
                </div>
                <div className="col-span-4">
                    <h3 className="text-2xl font-semibold">Order summary</h3>

                </div>
            </div>
        </section>
    )
}
