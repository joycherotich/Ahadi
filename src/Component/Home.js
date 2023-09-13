import React, { useState } from 'react';
import './Home.css';
import SkizaTune from './SkizaTunes';

const Home = () => {
  const skizaTunesData = [
     {
       title: "Konon",
       skizaCode: "1234567",
       price: "KES 10",
       imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShKBYj9MVNJsjFgktPPqeJqRy1SKsQjL1zaQ&usqp=CAU",
     },
    {
      title: "ex",
      skizaCode: "7654321",
      price: "KES 15",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEsyVBRhEW5O03qsUTjuJCJlolhlXYTI144w&usqp=CAU",
    },
  ];

  const [filteredSkizaTunes, setFilteredSkizaTunes] = useState(skizaTunesData);

  const handleSearch = () => {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const filteredTunes = skizaTunesData.filter(tune => tune.title.toLowerCase().includes(searchTerm));
    setFilteredSkizaTunes(filteredTunes);
  };

  return (
    <div className="home-container">
      
      <h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1sWCdWK16qoesaNc-GSv0Wqv6Q9AlxQeI9g&usqp=CAU"
          alt="Website Title"
          className="website-title-image"
        />
      </h1>
      <div className="search-bar">
        <input id="search-input" type="text" placeholder="Search Skiza Tunes" />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="skiza-tune-list">
        {filteredSkizaTunes.map((tune, index) => (
          <SkizaTune
            key={index}
            title={tune.title}
            skizaCode={tune.skizaCode}
            price={tune.price}
            imageUrl={tune.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
