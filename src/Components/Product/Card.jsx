import React from 'react';

function Card({ imageSrc, title }) {
  return (
    <div className="bg-transparent rounded-lg overflow-hidden hover:shadow-xl transition duration-300 ease-in-out transform scale-100">
      <img src={imageSrc} alt={title} className="w-full h-60 object-cover" />
      <div className="p-3">
        <h3 className="text-xl font-normal" style={{ fontFamily: 'Poppins', height: '42px' }}>
          {title}
        </h3>
      </div>
    </div>
  );
}

function CardLayout() {
  const cards = [
    {
      imageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeFpWcPrripkiOAVCOX4kViYZimpQ_A6eMKA&s',
      title: 'For businesses and individual consultants',
    },
    {
      imageSrc:
        'https://cdn.educba.com/academy/wp-content/uploads/2019/09/What-is-Front-End-Developer.png',
      title: 'Flexible partnering models',
    },
    {
      imageSrc:
        'https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg',
      title: 'Co-branding, PR activities and full support',
    },
    {
      imageSrc:
        'https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1720224000&semt=sph',
      title: 'Up to 50% commission rates',
      description: '',
    },
  ];

  return (
    <div className="bg-white-500 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {cards.map((card, index) => (
            <div key={index} className="w-full">
              <div className="transform scale-100 hover:scale-105">
                <Card imageSrc={card.imageSrc} title={card.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardLayout;
