
import { useState } from 'react';
import { product } from '../data/product';

export default function Checkout() {
  const [quantity, setQuantity] = useState(1);

  const total = (product.price * quantity).toFixed(2);

  return (
    <main style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Comprar {product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} style={{ width: 300 }} />
      <div style={{ marginTop: 20 }}>
        <label>Quantidade: </label>
        <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
      </div>
      <p>Total: R$ {total}</p>
      <button style={{ padding: 10, background: 'green', color: 'white' }}>
        Pagar com Mercado Pago
      </button>
    </main>
  );
}
