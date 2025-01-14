import React from 'react';
import Card from '../../Components/Card'

const cardsData = [
  
    {
      id: 1,
      imageSrc:
        "https://images.pexels.com/photos/1113804/pexels-photo-1113804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: "headphones",
      title: "Headphones",
      price: 300,
    },
    {
      id: 2,
      imageSrc:
        "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      altText: "Laptop",
      title: "Laptop",
      price: 500,
    },
  ];

function App () {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {cardsData.map((card) => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          altText={card.altText}
          title={card.title}
          price={card.price}
        />
      ))}
    </div>
  );
};

export default App;