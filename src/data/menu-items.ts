export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'vanilla-dream',
    name: 'Vanilla Dream',
    description: 'Rich and creamy Madagascar vanilla bean ice cream with a silky smooth texture',
    price: 150,
    image: '/images/vanilla.jpg'
  },
  {
    id: 'chocolate-bliss',
    name: 'Chocolate Bliss',
    description: 'Decadent dark chocolate ice cream made with premium cocoa',
    price: 180,
    image: '/images/chocolate.jpg'
  },
  {
    id: 'strawberry-delight',
    name: 'Strawberry Delight',
    description: 'Fresh strawberry ice cream with real fruit pieces',
    price: 200,
    image: '/images/strawberry.jpg'
  },
  {
    id: 'caramel-swirl',
    name: 'Caramel Swirl',
    description: 'Smooth vanilla ice cream with rich caramel ribbons',
    price: 170,
    image: '/images/caramel.jpg'
  },
  {
    id: 'mint-chocolate-chip',
    name: 'Mint Chocolate Chip',
    description: 'Cool mint ice cream studded with premium dark chocolate chips',
    price: 190,
    image: '/images/vanilla.jpg' // Reusing vanilla image for now
  },
  {
    id: 'mango-tango',
    name: 'Mango Tango',
    description: 'Tropical mango ice cream with sweet mango pieces and a hint of citrus',
    price: 220,
    image: '/images/strawberry.jpg' // Reusing strawberry image for now
  }
];
