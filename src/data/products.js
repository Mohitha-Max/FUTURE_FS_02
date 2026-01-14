import laptop from "../assets/images/electronics/dell_laptop.png";
import speaker from "../assets/images/electronics/speaker.jpg";
import tv from "../assets/images/electronics/tv.jpg";
import washingMachine from "../assets/images/electronics/washing_machine.jpg";

import earbuds from "../assets/images/wearables/earbuds.jpg";
import fitnessTracker from "../assets/images/wearables/fitness_tracker.jpg";
import headphones from "../assets/images/wearables/headphones.jpg";
import smartwatch from "../assets/images/wearables/smartwatch.jpg";

import moneyPlant from "../assets/images/indoor_plants/money_plant.jpg";
import peaceLily from "../assets/images/indoor_plants/peace_lily.jpg";
import snakePlant from "../assets/images/indoor_plants/snake_plant.jpg";
import chineseMoneyPlant from "../assets/images/indoor_plants/chinese_money_plant.jpg";

const products = [
  {
    id: 1,
    name: "Dell Laptop",
    price: 55999,
    originalPrice: 59999,
    image: laptop,
    category: "Electronics",
    rating: 5,
    badge: "HOT",
  },
  {
    id: 2,
    name: "Bluetooth Speaker",
    price: 3499,
    image: speaker,
    category: "Electronics",
    rating: 4,
  },
  {
    id: 3,
    name: "Smart TV",
    price: 29999,
    image: tv,
    category: "Electronics",
    rating: 5,
  },
  {
    id: 4,
    name: "Washing Machine",
    price: 18999,
    image: washingMachine,
    category: "Electronics",
    rating: 4,
  },

  {
    id: 5,
    name: "Wireless Earbuds",
    price: 1999,
    image: earbuds,
    category: "Wearables",
    rating: 4,
    badge: "NEW",
  },
  {
    id: 6,
    name: "Fitness Tracker",
    price: 2499,
    image: fitnessTracker,
    category: "Wearables",
    rating: 5,
  },
  {
    id: 7,
    name: "Wireless Headphones",
    price: 2999,
    image: headphones,
    category: "Wearables",
    rating: 4,
  },
  {
    id: 8,
    name: "Smart Watch",
    price: 3999,
    image: smartwatch,
    category: "Wearables",
    rating: 5,
  },

  {
    id: 9,
    name: "Money Plant",
    price: 399,
    image: moneyPlant,
    category: "Indoor Plants",
    rating: 4,
  },
  {
    id: 10,
    name: "Peace Lily",
    price: 699,
    image: peaceLily,
    category: "Indoor Plants",
    rating: 5,
  },
  {
    id: 11,
    name: "Snake Plant",
    price: 599,
    image: snakePlant,
    category: "Indoor Plants",
    rating: 4,
  },
  {
    id: 12,
    name: "Chinese Money Plant",
    price: 499,
    image: chineseMoneyPlant,
    category: "Indoor Plants",
    rating: 5,
    badge: "BEST",
  },
];

export default products;
