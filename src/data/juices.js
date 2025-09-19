// src/data/juices.js

import greenJuice from '../assets/images/green-juice.png';
import pineappleJuice from '../assets/images/pineapple-juice.png';
import carrotJuice from '../assets/images/carrot-juice.png';
import beetJuice from '../assets/images/beet-juice.png';

export const juices = [
    {
      id: 'green-goodness', // A URL-friendly ID
      name: 'Green Goodness',
      description: 'A refreshing blend of green vegetables to kickstart your day.',
      image: greenJuice,
      color: '#2dcd17bb',
      price: 180,
      benefits: [
        'Deeply detoxifies and cleanses the body.',
        'Boosts energy levels and mental clarity.',
        'Rich in antioxidants to fight free radicals.'
      ],
      nutrition: { Calories: 110, Sugar: '15g', VitaminC: '80%' }
    },
    {
      id: 'pineapple-power',
      name: 'Pineapple Power',
      description: 'A sweet and tangy mix that transports you to a tropical paradise.',
      image: pineappleJuice,
      color: '#f1ef40ff',
      price: 180,
      benefits: [
        'Excellent source of Vitamin C for immunity.',
        'Contains enzymes that aid in digestion.',
        'Promotes a healthy, glowing complexion.'
      ],
      nutrition: { Calories: 130, Sugar: '22g', VitaminC: '150%' }
    },
    {
      id: 'carrot-kick',
      name: 'Carrot Kick',
      description: 'Get your daily dose of vitamins with this vibrant and earthy carrot blend.',
      image: carrotJuice,
      color: '#f26b16ff',
      price: 180,
      benefits: [
        'High in Beta-Carotene to support vision.',
        'Promotes radiant skin and a natural glow.',
        'Supports a healthy immune system.'
      ],
      nutrition: { Calories: 120, Sugar: '18g', VitaminA: '250%' }
    },
    {
      id: 'beet-boost',
      name: 'Beet Boost',
      description: 'A powerful and detoxifying juice to energize your body and mind.',
      image: beetJuice,
      color: '#c90d10ff',
      price: 180,
      benefits: [
        'Increases stamina and athletic performance.',
        'Supports cardiovascular and heart health.',
        'A natural detoxifier for the blood and liver.'
      ],
      nutrition: { Calories: 125, Sugar: '20g', Iron: '15%' }
    }
];