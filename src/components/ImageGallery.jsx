import React, { useState } from 'react';
import SearchBar from './SearchBar';
import CategoryButtons from './CategoryButtons';
import ImageCard from './ImageCard';
import './ImageGallery.css';


import animal1Img from '../assets/Animals/bear.jpg';
import animal2Img from '../assets/Animals/lion.jpg';
import animal3Img from '../assets/Animals/squirrel.jpg';
import animal4Img from '../assets/Animals/tiger.jpg';
import animal5Img from '../assets/Animals/zebra.jpg';
import art1Img from '../assets/Arts/Girl with a Pearl Earring.jpg'
import art2Img from '../assets/Arts/Mona Lisa.jpg'
import art3Img from '../assets/Arts/The Starry Night.jpg'
import human1Img from '../assets/Human/Evolution.jpg'
import human2Img from '../assets/Human/Happy.jpg'
import human3Img from '../assets/Human/Iraq.jpg'
import human4Img from '../assets/Human/Model.jpg'
import human5Img from '../assets/Human/Vancouver.jpg'
import nature1Img from '../assets/Nature/Beach.jpg'
import nature2Img from '../assets/Nature/Cave.jpg'
import nature3Img from '../assets/Nature/Flower.jpg'
import nature4Img from '../assets/Nature/Forest.jpg'
import nature5Img from '../assets/Nature/Lavender.jpg'
import nature6Img from '../assets/Nature/Mountain.jpg'



const imagesData = [
  { title: 'Bear', category: 'Animal', src: animal1Img },
  { title: 'Lion', category: 'Animal', src: animal2Img },
  { title: 'Squirrel', category: 'Animal', src: animal3Img },
  { title: 'Tiger', category: 'Animal', src: animal4Img },
  { title: 'Zebra', category: 'Animal', src: animal5Img },
  { title: 'Girl with a Pearl Earring', category: 'Art', src: art1Img},
  { title: 'Mona Lisa', category: 'Art', src: art2Img},
  { title: 'The Starry Night', category: 'Art', src: art3Img},
  { title: 'Evolution', category: 'Human', src: human1Img},
  { title: 'Happy', category: 'Human', src: human2Img},
  { title: 'Iraq', category: 'Human', src: human3Img},
  { title: 'Model', category: 'Human', src: human4Img},
  { title: 'Vancouver', category: 'Human', src: human5Img},
  { title: 'Beach', category: 'Nature', src: nature1Img},
  { title: 'Cave', category: 'Nature', src: nature2Img},
  { title: 'Flower', category: 'Nature', src: nature3Img},
  { title: 'Forest', category: 'Nature', src: nature4Img},
  { title: 'Lavender', category: 'Nature', src: nature5Img},
  { title: 'Mountain', category: 'Nature', src: nature6Img},


  // Add more images as needed
];

const ImageGallery = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = imagesData.filter(image => {
    return (selectedCategory === 'All' || image.category === selectedCategory) &&
      image.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="gallery-container">
      <h1>Gallery</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryButtons setSelectedCategory={setSelectedCategory} />
      <div className="image-grid">
        {filteredImages.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;