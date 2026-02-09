export type ProductItem = {
  id: string
  name: string
  description: string
  image: string
  price: string
  mrp?: string
}

export type ProductCategory = {
  id: string
  title: string
  items: ProductItem[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 'tv',
    title: 'TV',
    items: [
      {
        id: 'tv-1',
        name: 'Smart LED TV',
        description: 'Netflix, YouTube ready. Picture crisp aur sound loud.',
        image: '/products/tv1.png',
        price: '₹14,990',
        mrp: '₹18,990',
      },
      {
        id: 'tv-2',
        name: 'Budget HD Ready',
        description: 'Chhote ghar ke liye perfect, power saving.',
        image: '/products/led2.png',
        price: '₹9,990',
        mrp: '₹12,990',
      },
      {
        id: 'tv-3',
        name: '4K Smart TV',
        description: 'Badi screen, vivid colors, cinema feel.',
        image: '/products/led3.png',
        price: '₹24,990',
        mrp: '₹29,990',
      },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    items: [
      {
        id: 'mob-1',
        name: 'Android Smartphones',
        description: 'Badi battery, fast charging, clear camera.',
        image: '/products/mobile1.png',
        price: '₹15,999',
        mrp: '₹19,999',
      },
      {
        id: 'mob-2',
        name: 'Feature Phones',
        description: 'Simple calling, extra battery backup.',
        image: '/products/mobile2.png',
        price: '₹19,999',
        mrp: '₹21,999',
      },
      {
        id: 'mob-3',
        name: 'Camera Focus Phone',
        description: 'Clear photos, daily use ke liye best.',
        image: '/products/mobile3.png',
        price: '₹26,999',
        mrp: '₹34,999',
      },
    ],
  },
  {
    id: 'appliances',
    title: 'Home Appliances',
    items: [
      {
        id: 'app-1',
        name: 'Fridge & Washing',
        description: 'Family size options, energy efficient models.',
        image: '/products/washing.png',
        price: '₹12,990',
        mrp: '₹16,990',
      },
      {
        id: 'app-2',
        name: 'Mixer & Kitchen',
        description: 'Daily use ke liye durable models.',
        image: '/products/mixer.png',
        price: '₹1,699',
        mrp: '₹2,499',
      },
      {
        id: 'app-3',
        name: 'Cooler & Fan',
        description: 'Garmi ke liye best cooling options.',
        image: '/products/fan.png',
        price: '₹2,799',
        mrp: '₹3,499',
      },
    ],
  },
  {
    id: 'accessories',
    title: 'Accessories',
    items: [
      {
        id: 'acc-1',
        name: 'Charger & Cable',
        description: 'Fast charging, original quality.',
        image: '/products/charger.png',
        price: '₹299',
        mrp: '₹499',
      },
      {
        id: 'acc-2',
        name: 'Earbuds & Speaker',
        description: 'Music clear, price local market best.',
        image: '/products/buds1.png',
        price: '₹1,599',
        mrp: '₹1,999',
      },
      {
        id: 'acc-3',
        name: 'Smart Watch',
        description: 'Steps, calls, battery backup strong.',
        image: '/products/watch.png',
        price: '₹1,499',
        mrp: '₹1,999',
      },
    ],
  },
]
