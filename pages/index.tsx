
import { products } from '../data/products';

export default function Home() {
  return (
    <main style={{
      padding: '2rem',
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundImage: 'url(/images/cpf-china.png)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      color: '#fff'
    }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', background: 'rgba(0,0,0,0.5)', padding: '1rem' }}>
        🛍️ Lojinha China
      </h1>

      <section style={{ display: 'flex', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} style={{
            maxWidth: 400,
            background: 'rgba(0,0,0,0.8)',
            borderRadius: 12,
            padding: 20,
            textAlign: 'center',
            boxShadow: '0 0 12px rgba(255, 0, 0, 0.2)'
          }}>
            <img src="/images/cpf-nome.png" alt={product.name} style={{ width: '100%', borderRadius: 8 }} />
            <h2 style={{ marginTop: 16 }}>{product.name}</h2>
            <p>{product.description}</p>
            <p style={{ fontWeight: 'bold', margin: '12px 0' }}>R$ {product.price.toFixed(2)}</p>
            <a href={product.fileUrl} download style={{
              background: 'red',
              color: '#fff',
              padding: '10px 20px',
              borderRadius: 6,
              textDecoration: 'none'
            }}>
              Baixar Produto
            </a>
          </div>
        ))}
      </section>
    </main>
  );
}
