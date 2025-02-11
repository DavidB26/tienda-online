import { useState, useEffect } from 'react';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const [items, setItems] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data));
  }, []);
  console.log("Producto seleccionado:", selectedProduct); // 👉 Verifica si cambia en la consola

  return (
    <div className='relative flex w-full max-w-screen-lg gap-4'>
      {/* Lista de productos */}
      <div className='grid grid-cols-4 gap-4'>
        {items?.map(item => (
          <Card key={item.id} data={item} onClick={() => setSelectedProduct(item)} /> 
        ))}
      </div>

      {/* Product Detail Sidebar */}
      {selectedProduct && (
        <ProductDetail data={selectedProduct} onClose={() => setSelectedProduct(null)} /> 
      )}
    </div>
  );
}

export default Home;