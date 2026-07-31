import React, { useState } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  badge: string;
  bgColor: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  image,
  badge,
  bgColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: '235px',
        backgroundColor: bgColor,
        borderRadius: '22px',
        padding: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'all 0.3s ease-in-out',
        border: '1px solid rgba(255, 255, 255, 0.6)'
      }}
    >
      {/* Top Header: Rating & Badge */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', backgroundColor: '#ffffff', padding: '3px 8px', borderRadius: '20px', fontSize: '11px', fontWeight: 'bold' }}>
          <span style={{ color: '#fbbf24' }}>★</span>
          <span style={{ color: '#1f2937' }}>4.9</span>
        </div>
        <span style={{ backgroundColor: '#111827', color: '#ffffff', fontSize: '10px', fontWeight: '600', padding: '3px 8px', borderRadius: '20px' }}>
          {badge}
        </span>
      </div>

      {/* Product Image Container */}
      <div style={{ width: '100%', height: '130px', borderRadius: '14px', overflow: 'hidden', marginBottom: '12px', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: isHovered ? 'scale(1.08)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        />
      </div>

      {/* Title & Description */}
      <div style={{ marginBottom: '12px', flexGrow: 1 }}>
        <h3 style={{ fontSize: '14px', fontWeight: 'bold', color: '#1f2937', marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {title}
        </h3>
        <p style={{ fontSize: '11px', color: '#6b7280', lineHeight: '1.3', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {description}
        </p>
      </div>

      {/* Price and Add to Cart Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid rgba(0,0,0,0.04)' }}>
        <span style={{ fontSize: '15px', fontWeight: '900', color: '#111827' }}>
          {price}
        </span>
        <button style={{ backgroundColor: '#111827', color: '#ffffff', border: 'none', padding: '5px 10px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', cursor: 'pointer' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};