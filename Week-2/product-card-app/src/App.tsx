import React from 'react';
import { ProductCard } from './components/ProductCard';

export function App() {
  const products = [
    {
      id: 1,
      title: 'Minimalist Classic Watch',
      description: 'An elegant and timeless design crafted with premium materials.',
      price: '$129.00',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60',
      badge: 'New',
      bgColor: '#fff8eb',
    },
    {
      id: 2,
      title: 'Wireless Studio Headphones',
      description: 'Immersive high-fidelity sound with active noise cancellation.',
      price: '$199.00',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
      badge: 'Sale',
      bgColor: '#eafaf1',
    },
    {
      id: 3,
      title: 'Professional DSLR Camera',
      description: 'Capture stunning moments with crystal clear clarity.',
      price: '$849.00',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&auto=format&fit=crop&q=60',
      badge: 'Popular',
      bgColor: '#fcefe8',
    },
    {
      id: 4,
      title: 'Ergonomic Smart Watch',
      description: 'Track your fitness goals and stay connected on the go.',
      price: '$159.00',
      image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&auto=format&fit=crop&q=60',
      badge: 'Hot',
      bgColor: '#f4f4f6',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf9f5', padding: '30px 10px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
        <header style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ fontSize: '32px', fontWeight: '900', color: '#111827', marginBottom: '6px' }}>
            Featured Products
          </h1>
          <p style={{ fontSize: '15px', color: '#6b7280' }}>
            Explore our latest collection of premium lifestyle items.
          </p>
        </header>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
              image={product.image}
              badge={product.badge}
              bgColor={product.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;