import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Bell, Check, ChevronDown, ChevronLeft, ChevronRight, CircleUserRound,
  CreditCard, Heart, Home as HomeIcon, LayoutDashboard, Menu, Package, Plus, Search, Settings, ShieldCheck,
  ShoppingBag, ShoppingCart, SlidersHorizontal, Sparkles, Star, Trash2, Truck, UserRound, X,
} from 'lucide-react';

const images = {
  hero: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=85',
  beauty: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80',
  fashion: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=700&q=80',
  living: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80',
  tech: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&w=700&q=80',
  shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
  accessories: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=700&q=80',
  sports: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80',
  books: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=700&q=80',
  gaming: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=700&q=80',
  jewelry: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80',
  travel: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=80',
  stationery: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=80',
  wellness: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=700&q=80',
  kids: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=700&q=80',
};

const productImageVariants = {
  Electronics: [
    images.tech,
    'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=900&q=85',
  ],
  Fashion: [
    images.fashion,
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=85',
  ],
  'Beauty & Personal Care': [
    images.beauty,
    'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=900&q=85',
  ],
  'Home & Living': [
    images.living,
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=900&q=85',
  ],
  Shoes: [
    images.shoes,
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=85',
  ],
  Accessories: [
    images.accessories,
    'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=900&q=85',
  ],
  'Sports & Fitness': [
    images.sports,
    'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=85',
  ],
  Books: [
    images.books,
    'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=85',
  ],
  Gaming: [
    images.gaming,
    'https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85',
  ],
  Jewelry: [
    images.jewelry,
    'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=900&q=85',
  ],
  'Outdoor & Travel': [
    images.travel,
    'https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=900&q=85',
  ],
  Stationery: [
    images.stationery,
    'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?auto=format&fit=crop&w=900&q=85',
  ],
  Wellness: [
    images.wellness,
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85',
  ],
  Kids: [
    images.kids,
    'https://images.unsplash.com/photo-1599623560574-39d485900c95?auto=format&fit=crop&w=900&q=85',
    'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?auto=format&fit=crop&w=900&q=85',
  ],
};

const products = [
  { id: 1, name: 'The Minimalist Watch', brand: 'Nordgreen', category: 'Accessories', price: 189, original: 240, rating: 4.9, reviews: 128, stock: 14, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85', description: 'A beautifully balanced timepiece with a brushed steel case and Italian leather strap.', colors: ['#17191c', '#e3c6a8'], sizes: ['36mm', '40mm'] },
  { id: 2, name: 'Aster Everyday Tote', brand: 'Cuyana', category: 'Fashion', price: 165, original: 210, rating: 4.8, reviews: 86, stock: 21, tag: 'New', image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=85', description: 'An effortless carry-all in supple recycled leather, designed for every day.', colors: ['#20242b', '#b89172', '#e9e5dd'], sizes: ['One size'] },
  { id: 3, name: 'Arc Wireless Headphones', brand: 'Nothing', category: 'Electronics', price: 249, original: 299, rating: 4.7, reviews: 214, stock: 8, tag: 'Trending', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85', description: 'Immersive sound, all-day comfort, and a sculpted silhouette made for the commute.', colors: ['#f1f1ef', '#17191c'], sizes: [] },
  { id: 4, name: 'Cloud 5 Sneaker', brand: 'On Running', category: 'Shoes', price: 159, original: 179, rating: 4.8, reviews: 320, stock: 32, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85', description: 'Lightweight Swiss engineering for your everyday miles and everything after.', colors: ['#f8f6f1', '#d45b38'], sizes: ['US 7', 'US 8', 'US 9', 'US 10'] },
  { id: 5, name: 'Ceramic Pour-Over Set', brand: 'Fellow', category: 'Home & Living', price: 84, original: 110, rating: 4.6, reviews: 62, stock: 19, tag: 'Staff pick', image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85', description: 'Slow mornings, improved. A considered ceramic brewer for a richer ritual.', colors: ['#e6e0d5', '#293229'], sizes: [] },
  { id: 6, name: 'No. 03 Eau de Parfum', brand: 'Byredo', category: 'Beauty & Personal Care', price: 190, original: 220, rating: 4.9, reviews: 94, stock: 11, tag: 'New', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85', description: 'A warm, woody fragrance that lingers close and wears beautifully.', colors: [], sizes: ['50ml', '100ml'] },
  { id: 7, name: 'Daily Ritual Journal', brand: 'Moleskine', category: 'Books', price: 29, original: 36, rating: 4.7, reviews: 46, stock: 44, tag: 'Bestseller', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=900&q=85', description: 'A tactile space for the thoughts, plans, and small ideas worth keeping.', colors: ['#22262c', '#c56c45'], sizes: [] },
  { id: 8, name: 'Lumen Table Lamp', brand: 'Audo Copenhagen', category: 'Home & Living', price: 320, original: 390, rating: 4.8, reviews: 31, stock: 5, tag: 'Limited', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85', description: 'Soft, atmospheric light with a timeless form that earns its place.', colors: ['#ede5d7', '#2c3032'], sizes: [] },
  { id: 9, name: 'Trail Form Bottle', brand: 'LARQ', category: 'Sports & Fitness', price: 68, original: 80, rating: 4.5, reviews: 73, stock: 28, tag: 'Eco pick', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85', description: 'A self-cleaning bottle with a quiet silhouette for your daily miles.', colors: ['#1f3b3d', '#e5e0d5'], sizes: [] },
  { id: 10, name: 'Pocket Pixel Console', brand: 'Analogue', category: 'Gaming', price: 199, original: 229, rating: 4.6, reviews: 118, stock: 7, tag: 'Trending', image: 'https://images.unsplash.com/photo-1592840062661-3d7b998bce16?auto=format&fit=crop&w=900&q=85', description: 'A beautifully made pocket console for rediscovering your favorite worlds.', colors: ['#e1dfd8', '#d66a4d'], sizes: [] },
  { id: 11, name: 'Orbit Gold Hoops', brand: 'Oma The Label', category: 'Jewelry', price: 72, original: 90, rating: 4.8, reviews: 59, stock: 26, tag: 'New', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85', description: 'Sculptural everyday hoops finished in polished recycled brass.', colors: ['#c89b52'], sizes: ['Small', 'Large'] },
  { id: 12, name: 'Weekender Carry-On', brand: 'Away', category: 'Travel & Luggage', price: 275, original: 325, rating: 4.7, reviews: 141, stock: 12, tag: 'Travel edit', image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=900&q=85', description: 'A quietly capable weekender with room for the essentials and then some.', colors: ['#26393b', '#d8c6ac'], sizes: ['Carry-on'] },
  { id: 13, name: 'Field Notes Set', brand: 'Poketo', category: 'Stationery', price: 24, original: 30, rating: 4.7, reviews: 35, stock: 50, tag: 'Desk edit', image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85', description: 'Three tactile notebooks for ideas, lists, and the thoughts between.', colors: ['#c96343', '#274a4c'], sizes: [] },
  { id: 14, name: 'Restore Yoga Mat', brand: 'Manduka', category: 'Wellness', price: 96, original: 120, rating: 4.9, reviews: 88, stock: 17, tag: 'Best seller', image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=900&q=85', description: 'A supportive, grounded mat made for slower mornings and deeper practice.', colors: ['#a9b3a2', '#c68b72'], sizes: ['Standard'] },
  { id: 15, name: 'Little Explorer Kit', brand: 'Olli Ella', category: 'Kids', price: 58, original: 68, rating: 4.8, reviews: 42, stock: 23, tag: 'Giftable', image: 'https://images.unsplash.com/photo-1594784052697-85f9f9a1d9d6?auto=format&fit=crop&w=900&q=85', description: 'A playful collection of tactile treasures for curious little explorers.', colors: ['#e6b36e', '#70929a'], sizes: [] },
  { id: 16, name: 'Aero Camp Chair', brand: 'Snow Peak', category: 'Outdoor & Travel', price: 145, original: 175, rating: 4.6, reviews: 27, stock: 9, tag: 'Weekend ready', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=85', description: 'A considered folding chair for open-air dinners and slow weekends.', colors: ['#48564c', '#d6c3a2'], sizes: [] },
  { id: 17, name: 'Silk Sleep Set', brand: 'Slip', category: 'Beauty & Personal Care', price: 89, original: 105, rating: 4.7, reviews: 103, stock: 18, tag: 'Self care', image: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=900&q=85', description: 'A soft silk ritual for more restful nights and gentler mornings.', colors: ['#dcbab0', '#e5ddce'], sizes: ['One size'] },
  { id: 18, name: 'Everyday Linen Shirt', brand: 'Alex Mill', category: 'Fashion', price: 128, original: 160, rating: 4.6, reviews: 77, stock: 15, tag: 'New', image: 'https://images.unsplash.com/photo-1605763240000-7e93b172d754?auto=format&fit=crop&w=900&q=85', description: 'A relaxed linen layer with the kind of ease that gets better over time.', colors: ['#e8e1d5', '#718487'], sizes: ['S', 'M', 'L', 'XL'] },
  { id: 19, name: 'Studio Desk Speaker', brand: 'Marshall', category: 'Electronics', price: 179, original: 220, rating: 4.8, reviews: 64, stock: 10, tag: 'Staff pick', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=85', description: 'Room-filling sound in a compact form designed to live on your desk.', colors: ['#17191c', '#e5dfd3'], sizes: [] },
  { id: 20, name: 'Handwoven Accent Cushion', brand: 'The Citizenry', category: 'Home & Living', price: 64, original: 82, rating: 4.5, reviews: 29, stock: 20, tag: 'Home edit', image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85', description: 'Handwoven texture and a warm neutral palette for a softer corner.', colors: ['#d9c5a9', '#738278'], sizes: ['20 × 20'] },
];

const categories = [
  { name: 'Electronics', count: '240 items', image: images.tech }, { name: 'Fashion', count: '480 items', image: images.fashion },
  { name: 'Beauty & Personal Care', count: '180 items', image: images.beauty }, { name: 'Home & Living', count: '320 items', image: images.living },
  { name: 'Shoes', count: '210 items', image: images.shoes }, { name: 'Accessories', count: '165 items', image: images.accessories },
  { name: 'Sports & Fitness', count: '145 items', image: images.sports }, { name: 'Books', count: '390 items', image: images.books },
  { name: 'Gaming', count: '120 items', image: images.gaming }, { name: 'Jewelry', count: '95 items', image: images.jewelry },
  { name: 'Outdoor & Travel', count: '180 items', image: images.travel }, { name: 'Stationery', count: '130 items', image: images.stationery },
  { name: 'Wellness', count: '155 items', image: images.wellness }, { name: 'Kids', count: '220 items', image: images.kids },
];

const generatedNames = ['Essential', 'Studio', 'Form', 'Daily', 'Modern', 'Classic', 'Soft', 'Edition', 'Everyday', 'Archive', 'Core', 'Quiet'];
const brandCatalog = {
  Electronics: [
    { brand: 'Apple', origin: 'USA', products: ['AirPods Max', 'MacBook Air', 'Studio Display'], basePrice: 199 },
    { brand: 'Bang & Olufsen', origin: 'Denmark', products: ['Beoplay Speaker', 'Beoplay Headphones'], basePrice: 249 },
    { brand: 'Sony', origin: 'Japan', products: ['WH Headphones', 'Alpha Camera', 'LinkBuds'], basePrice: 149 },
    { brand: 'Bose', origin: 'USA', products: ['QuietComfort Headphones', 'SoundLink Speaker'], basePrice: 129 },
  ],
  Fashion: [
    { brand: 'Prada', origin: 'Italy', products: ['Re-Nylon Jacket', 'Saffiano Tote', 'Silk Shirt'], basePrice: 380 },
    { brand: 'Gucci', origin: 'Italy', products: ['Horsebit Loafer', 'GG Canvas Jacket', 'Silk Scarf'], basePrice: 320 },
    { brand: 'Armani', origin: 'Italy', products: ['Linen Blazer', 'Jersey Dress', 'Cotton Overshirt'], basePrice: 260 },
    { brand: 'Max Mara', origin: 'Italy', products: ['Camel Coat', 'Wool Trousers'], basePrice: 440 },
    { brand: 'Hermes', origin: 'France', products: ['Silk Twilly', 'Cashmere Cardigan', 'Cabas Tote'], basePrice: 520 },
  ],
  'Beauty & Personal Care': [
    { brand: 'Chanel', origin: 'France', products: ['Coco Mademoiselle', 'Hydra Beauty Cream', 'Rouge Allure'], basePrice: 110 },
    { brand: 'Dior', origin: 'France', products: ['Sauvage Parfum', 'Capture Totale Cream', 'Addict Lip Glow'], basePrice: 96 },
    { brand: 'La Mer', origin: 'USA', products: ['Moisturizing Cream', 'The Eye Concentrate'], basePrice: 280 },
    { brand: 'Byredo', origin: 'Sweden', products: ['Blanche Eau de Parfum', 'Bal d Afrique Body Wash'], basePrice: 135 },
    { brand: 'Tom Ford', origin: 'USA', products: ['Oud Wood', 'Soleil Blanc', 'Lip Color'], basePrice: 155 },
  ],
  'Home & Living': [
    { brand: 'B&B Italia', origin: 'Italy', products: ['Le Bambole Cushion', 'Tufty Chair', 'Outdoor Table'], basePrice: 340 },
    { brand: 'Kartell', origin: 'Italy', products: ['Bourgie Lamp', 'Componibili Storage', 'Masters Chair'], basePrice: 180 },
    { brand: 'Alessi', origin: 'Italy', products: ['Kettle', '9091 Whistle', 'Fruit Basket'], basePrice: 84 },
    { brand: 'Fendi Casa', origin: 'Italy', products: ['Logo Throw', 'Leather Tray'], basePrice: 240 },
    { brand: 'Audo Copenhagen', origin: 'Denmark', products: ['JWDA Lamp', 'Androgyne Table'], basePrice: 205 },
  ],
  Shoes: [
    { brand: 'Nike', origin: 'USA', products: ['Air Max Sneaker', 'Pegasus Runner', 'Blazer Mid'], basePrice: 110 },
    { brand: 'Puma', origin: 'Germany', products: ['Suede Classic', 'Palermo Sneaker', 'Velocity Nitro'], basePrice: 82 },
    { brand: 'Adidas', origin: 'Germany', products: ['Samba OG', 'Ultraboost Light', 'Gazelle Indoor'], basePrice: 105 },
    { brand: "Tod's", origin: 'Italy', products: ['Gommino Loafer', 'City Gommino'], basePrice: 285 },
    { brand: 'Salvatore Ferragamo', origin: 'Italy', products: ['Studio Loafer', 'Vara Pump'], basePrice: 360 },
  ],
  Accessories: [
    { brand: 'Louis Vuitton', origin: 'France', products: ['Monogram Wallet', 'Keepall Bandouliere', 'Initials Belt'], basePrice: 420 },
    { brand: 'Bottega Veneta', origin: 'Italy', products: ['Intrecciato Card Case', 'Cassette Belt', 'Leather Pouch'], basePrice: 350 },
    { brand: 'Montblanc', origin: 'Germany', products: ['Meisterstuck Pen', 'Leather Card Holder'], basePrice: 180 },
    { brand: 'Hermes', origin: 'France', products: ['Reversible Belt', 'Silk Scarf', 'Calvi Card Holder'], basePrice: 290 },
  ],
  'Sports & Fitness': [
    { brand: 'Nike', origin: 'USA', products: ['Dri-FIT Training Top', 'Air Zoom Trainer', 'Pro Leggings'], basePrice: 72 },
    { brand: 'Puma', origin: 'Germany', products: ['Run Ultra Shorts', 'Studio Training Set'], basePrice: 58 },
    { brand: 'Lululemon', origin: 'Canada', products: ['Align Leggings', 'Everywhere Belt Bag', 'Metal Vent Tech Tee'], basePrice: 88 },
    { brand: 'On Running', origin: 'Switzerland', products: ['Cloudswift Runner', 'Performance Jacket'], basePrice: 125 },
  ],
  Books: [
    { brand: 'Assouline', origin: 'USA', products: ['Travel from Home', 'Italian Riviera', 'The Impossible Collection'], basePrice: 95 },
    { brand: 'Penguin Classics', origin: 'United Kingdom', products: ['Classic Edition', 'Modern Library Set'], basePrice: 28 },
    { brand: 'Phaidon', origin: 'United Kingdom', products: ['Design Book', 'Art Book Collection'], basePrice: 55 },
  ],
  Gaming: [
    { brand: 'Nintendo', origin: 'Japan', products: ['Switch OLED', 'Joy-Con Pair', 'Pro Controller'], basePrice: 69 },
    { brand: 'Sony', origin: 'Japan', products: ['PlayStation Portal', 'DualSense Controller'], basePrice: 89 },
    { brand: 'Analogue', origin: 'USA', products: ['Pocket Console', 'Dock Station'], basePrice: 199 },
  ],
  Jewelry: [
    { brand: 'Cartier', origin: 'France', products: ['Love Bracelet', 'Trinity Ring', 'Panthere Pendant'], basePrice: 680 },
    { brand: 'Bvlgari', origin: 'Italy', products: ['Serpenti Pendant', 'B.zero1 Ring'], basePrice: 540 },
    { brand: 'Tiffany & Co.', origin: 'USA', products: ['Return to Tiffany Pendant', 'HardWear Link'], basePrice: 420 },
    { brand: 'Van Cleef & Arpels', origin: 'France', products: ['Alhambra Pendant', 'Perlee Bracelet'], basePrice: 790 },
  ],
  'Outdoor & Travel': [
    { brand: 'Rimowa', origin: 'Germany', products: ['Essential Cabin', 'Original Trunk', 'Packing Cube Set'], basePrice: 260 },
    { brand: 'Tumi', origin: 'USA', products: ['Alpha Backpack', '19 Degree Carry-On'], basePrice: 240 },
    { brand: 'Globe-Trotter', origin: 'United Kingdom', products: ['Centenary Case', 'Safari Vanity Case'], basePrice: 520 },
    { brand: 'Moncler', origin: 'Italy', products: ['Trail Puffer', 'Hiking Vest'], basePrice: 480 },
  ],
  Stationery: [
    { brand: 'Montblanc', origin: 'Germany', products: ['Meisterstuck Notebook', 'Leather Journal'], basePrice: 78 },
    { brand: 'Smythson', origin: 'United Kingdom', products: ['Panama Notebook', 'Desk Diary'], basePrice: 65 },
    { brand: 'Moleskine', origin: 'Italy', products: ['Classic Notebook', 'Weekly Planner'], basePrice: 25 },
  ],
  Wellness: [
    { brand: 'Aesop', origin: 'Australia', products: ['Geranium Leaf Body Cleanser', 'Resurrection Hand Balm'], basePrice: 42 },
    { brand: 'Therabody', origin: 'USA', products: ['Theragun Mini', 'SmartGoggles'], basePrice: 179 },
    { brand: 'Lululemon', origin: 'Canada', products: ['The Mat', 'Lifted Yoga Block'], basePrice: 76 },
  ],
  Kids: [
    { brand: 'Fendi Kids', origin: 'Italy', products: ['Logo Backpack', 'FF Sweatshirt'], basePrice: 160 },
    { brand: 'Gucci Kids', origin: 'Italy', products: ['Web Stripe Sneaker', 'Cotton Polo'], basePrice: 190 },
    { brand: 'Bonpoint', origin: 'France', products: ['Cashmere Cardigan', 'Liberty Dress'], basePrice: 145 },
  ],
};
const productCatalog = categories.flatMap((category, categoryIndex) => {
  const existing = products.filter((product) => product.category === category.name);
  const additionalCount = Math.max(0, 32 - existing.length);
  const generated = Array.from({ length: additionalCount }, (_, index) => {
    const nameStyle = generatedNames[(index + categoryIndex) % generatedNames.length];
    const brandProfile = brandCatalog[category.name][index % brandCatalog[category.name].length];
    const productType = brandProfile.products[index % brandProfile.products.length];
    const price = brandProfile.basePrice + ((categoryIndex * 17 + index * 13) % Math.max(36, Math.round(brandProfile.basePrice * 0.4)));
    return {
      id: 1000 + categoryIndex * 100 + index,
      name: `${productType} ${nameStyle} ${String(index + 1).padStart(2, '0')}`,
      brand: brandProfile.brand,
      origin: brandProfile.origin,
      category: category.name,
      price,
      original: price + 18 + (index % 5) * 7,
      rating: Number((4.3 + ((index + categoryIndex) % 7) / 10).toFixed(1)),
      reviews: 18 + ((categoryIndex * 23 + index * 17) % 190),
      stock: 6 + ((categoryIndex * 11 + index * 7) % 42),
      tag: index % 5 === 0 ? 'New' : index % 4 === 0 ? 'Popular' : 'Curated',
      image: productImageVariants[category.name][index % productImageVariants[category.name].length],
      description: `${brandProfile.brand}'s ${productType.toLowerCase()} is made for considered everyday use, with a refined finish and the signature character of its ${brandProfile.origin} design heritage.`,
      colors: ['#17191c', '#d8c3a8', '#738278'].slice(0, index % 3 + 1),
      sizes: category.name === 'Fashion' || category.name === 'Shoes' ? ['S', 'M', 'L'] : [],
    };
  });
  return [...existing, ...generated];
});

const initialUser = { name: 'Maya Chen', email: 'maya.chen@email.com', role: 'customer' };
const read = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const money = (value) => `$${value.toFixed(2)}`;

export default function App() {
  const [user, setUser] = useState(() => read('luxe-user', null));
  const [cart, setCart] = useState(() => read('luxe-cart', []));
  const [wishlist, setWishlist] = useState(() => read('luxe-wishlist', []));
  const [orders, setOrders] = useState(() => read('luxe-orders', []));
  const [view, setView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState('');
  const [authMode, setAuthMode] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => localStorage.setItem('luxe-user', JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem('luxe-cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('luxe-wishlist', JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem('luxe-orders', JSON.stringify(orders)), [orders]);
  useEffect(() => { if (!toast) return; const timer = setTimeout(() => setToast(''), 2600); return () => clearTimeout(timer); }, [toast]);

  const notify = (message) => setToast(message);
  const addToCart = (product, quantity = 1) => {
    setCart((items) => { const found = items.find((item) => item.id === product.id); return found ? items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) : [...items, { ...product, quantity }]; });
    notify(`${product.name} added to your bag`);
  };
  const toggleWish = (product) => { setWishlist((items) => items.some((item) => item.id === product.id) ? items.filter((item) => item.id !== product.id) : [...items, product]); notify(wishlist.some((item) => item.id === product.id) ? 'Removed from wishlist' : 'Saved to wishlist'); };
  const navigate = (next) => { setView(next); setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const logout = () => { setUser(null); notify('You have been logged out'); navigate('home'); };
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return <div className="app-shell">
    <Announcement />
    <Header user={user} cartCount={cartCount} search={search} setSearch={setSearch} navigate={navigate} setAuthMode={setAuthMode} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    <main>
      {view === 'home' && <Home navigate={navigate} products={products} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist} setSelectedProduct={setSelectedProduct} />}
      {view === 'shop' && <Shop products={productCatalog} search={search} setSearch={setSearch} addToCart={addToCart} toggleWish={toggleWish} wishlist={wishlist} setSelectedProduct={setSelectedProduct} navigate={navigate} />}
      {view === 'wishlist' && <Wishlist items={wishlist} addToCart={addToCart} toggleWish={toggleWish} setSelectedProduct={setSelectedProduct} navigate={navigate} />}
      {view === 'cart' && <Cart cart={cart} setCart={setCart} navigate={navigate} />}
      {view === 'checkout' && <Checkout cart={cart} setCart={setCart} setOrders={setOrders} navigate={navigate} notify={notify} />}
      {view === 'account' && <Account user={user} orders={orders} wishlist={wishlist} logout={logout} navigate={navigate} />}
      {view === 'admin' && <Admin navigate={navigate} orders={orders} setOrders={setOrders} />}
    </main>
    {view === 'home' && <Footer navigate={navigate} />}
    {selectedProduct && <ProductModal product={selectedProduct} close={() => setSelectedProduct(null)} addToCart={addToCart} toggleWish={toggleWish} wished={wishlist.some((item) => item.id === selectedProduct.id)} />}
    {authMode && <AuthModal mode={authMode} setMode={setAuthMode} login={(data) => { setUser(data); setAuthMode(null); notify(`Welcome back, ${data.name.split(' ')[0]}`); }} />}
    {toast && <div className="toast"><Check size={17} />{toast}</div>}
  </div>;
}

function Announcement() { return <div className="announcement"><span><Sparkles size={14} /> Complimentary shipping on orders over $150</span><span className="announcement-right">New York · London · Everywhere</span></div>; }

function Header({ user, cartCount, search, setSearch, navigate, setAuthMode, mobileOpen, setMobileOpen }) {
  return <header className="header"><div className="header-inner">
    <button className="mobile-menu icon-btn" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Open menu"><Menu size={21} /></button>
    <button className="logo" onClick={() => navigate('home')}>Luxe<span>Store</span></button>
    <nav className={`main-nav ${mobileOpen ? 'open' : ''}`}>
      <button onClick={() => navigate('shop')}>Shop</button><button onClick={() => navigate('shop')}>New Arrivals</button><button onClick={() => navigate('shop')}>Best Sellers</button><button onClick={() => navigate('shop')}>Collections</button>
    </nav>
    <div className="header-actions"><label className="search-box"><Search size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && navigate('shop')} placeholder="Search the edit" /></label><button className="icon-btn desktop-action" aria-label="Notifications"><Bell size={19} /></button><button className="icon-btn" onClick={() => user ? navigate(user.role === 'admin' ? 'admin' : 'account') : setAuthMode('login')} aria-label="Profile"><CircleUserRound size={20} /></button><button className="cart-button" onClick={() => navigate('cart')} aria-label="Cart"><ShoppingBag size={20} /><b>{cartCount}</b></button></div>
  </div></header>;
}

function Home({ navigate, products, addToCart, toggleWish, wishlist, setSelectedProduct }) {
  return <>
    <section className="hero"><div className="hero-image" /><div className="hero-copy"><p className="eyebrow light">The Autumn Edit · 2025</p><h1>Good taste<br /><em>is timeless.</em></h1><p className="hero-sub">A considered collection of objects, essentials, and everyday luxuries for the way you live now.</p><button className="button button-light" onClick={() => navigate('shop')}>Explore the collection <ArrowRight size={16} /></button></div><div className="hero-meta"><span>01</span><div className="hero-line"><i /></div><span>03</span></div></section>
    <section className="intro section"><div><p className="eyebrow">Why LuxeStore</p><h2>Less, but better.</h2></div><p className="intro-text">We seek out the beautifully made and quietly useful. Pieces with a point of view, selected to bring more intention to your everyday.</p><button className="text-link" onClick={() => navigate('shop')}>Our point of view <ArrowUpRight size={16} /></button></section>
    <section className="section"><SectionHeading eyebrow="Curated for you" title="The edit" action="View all" onAction={() => navigate('shop')} /><div className="product-grid featured-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} toggleWish={toggleWish} wished={wishlist.some((item) => item.id === product.id)} setSelectedProduct={setSelectedProduct} />)}</div></section>
    <section className="category-band"><div className="section category-inner"><SectionHeading eyebrow="Browse by mood" title="Find your next favorite" action="All categories" onAction={() => navigate('shop')} /><div className="category-grid">{categories.map((category) => <button className="category-card" key={category.name} onClick={() => navigate('shop')}><img src={category.image} alt="" /><span><small>{category.count}</small><strong>{category.name}</strong></span><ArrowUpRight size={19} /></button>)}</div></div></section>
    <section className="split-feature section"><div className="split-image"><img src={images.living} alt="Warmly styled modern living room" /></div><div className="split-copy"><p className="eyebrow">The considered home</p><h2>Objects that make<br /><em>space for living.</em></h2><p>From the first sip to the last light, bring a little more ritual to the everyday with pieces selected for their form, function, and feeling.</p><button className="button button-dark" onClick={() => navigate('shop')}>Shop home <ArrowRight size={16} /></button></div></section>
    <section className="section"><SectionHeading eyebrow="Just in" title="Fresh perspective" action="See new arrivals" onAction={() => navigate('shop')} /><div className="product-grid">{products.slice(4, 8).map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} toggleWish={toggleWish} wished={wishlist.some((item) => item.id === product.id)} setSelectedProduct={setSelectedProduct} />)}</div></section>
    <Newsletter />
  </>;
}

function SectionHeading({ eyebrow, title, action, onAction }) { return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div><button className="text-link" onClick={onAction}>{action} <ArrowRight size={16} /></button></div>; }

function ProductCard({ product, addToCart, toggleWish, wished, setSelectedProduct }) { return <article className="product-card"><div className="product-image-wrap" onClick={() => setSelectedProduct(product)}><img src={product.image} alt={product.name} /><span className="tag">{product.tag}</span><button className={`wish-btn ${wished ? 'active' : ''}`} onClick={(e) => { e.stopPropagation(); toggleWish(product); }} aria-label="Save to wishlist"><Heart size={18} fill={wished ? 'currentColor' : 'none'} /></button><button className="quick-add" onClick={(e) => { e.stopPropagation(); addToCart(product); }}>Quick add <Plus size={15} /></button></div><div className="product-info"><div><p className="product-brand">{product.brand}</p><h3 onClick={() => setSelectedProduct(product)}>{product.name}</h3></div><div className="price-line"><strong>{money(product.price)}</strong><del>{money(product.original)}</del></div></div><div className="rating"><Star size={13} fill="currentColor" /> {product.rating} <span>({product.reviews})</span></div></article>; }

function Shop({ products: allProducts, search, setSearch, addToCart, toggleWish, wishlist, setSelectedProduct, navigate }) {
  const [sort, setSort] = useState('Featured'); const [category, setCategory] = useState('All'); const [maxPrice, setMaxPrice] = useState(400); const [showFilters, setShowFilters] = useState(false);
  const filtered = useMemo(() => allProducts.filter((p) => (!search || `${p.name} ${p.brand} ${p.category}`.toLowerCase().includes(search.toLowerCase())) && (category === 'All' || p.category === category) && p.price <= maxPrice).sort((a, b) => sort === 'Price: Low to High' ? a.price - b.price : sort === 'Price: High to Low' ? b.price - a.price : sort === 'Highest Rated' ? b.rating - a.rating : 0), [allProducts, search, category, maxPrice, sort]);
  return <section className="shop-page section"><div className="shop-hero"><div><p className="eyebrow">The full collection</p><h1>Shop the edit.</h1><p>Thoughtful things for considered living, all in one place.</p></div><div className="shop-count">{filtered.length}<span> pieces</span></div></div><div className="shop-toolbar"><button className="filter-toggle" onClick={() => setShowFilters(!showFilters)}><SlidersHorizontal size={16} /> Filters</button><div className="breadcrumbs"><button onClick={() => navigate('home')}>Home</button><ChevronRight size={14} /> Shop</div><label className="sort">Sort by <select value={sort} onChange={(e) => setSort(e.target.value)}><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option><option>Highest Rated</option></select><ChevronDown size={14} /></label></div><div className="shop-layout"><aside className={showFilters ? 'filters visible' : 'filters'}><div className="filter-head"><strong>Filter by</strong><button onClick={() => { setCategory('All'); setMaxPrice(400); }}>Clear all</button></div><div className="filter-block"><p>Category</p>{['All', ...categories.map((c) => c.name), 'Shoes', 'Accessories', 'Sports & Fitness', 'Books', 'Gaming'].map((item) => <button className={category === item ? 'selected' : ''} onClick={() => setCategory(item)} key={item}>{item}<span>{item === 'All' ? allProducts.length : allProducts.filter((p) => p.category === item).length}</span></button>)}</div><div className="filter-block"><p>Price range</p><div className="price-values"><span>$0</span><span>${maxPrice}</span></div><input className="range" type="range" min="0" max="400" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} /></div><div className="filter-block"><p>Availability</p><label className="check"><input type="checkbox" defaultChecked /> In stock</label></div></aside><div className="shop-results"><div className="mobile-search search-box"><Search size={18} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products" /></div>{filtered.length ? <div className="product-grid">{filtered.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} toggleWish={toggleWish} wished={wishlist.some((item) => item.id === product.id)} setSelectedProduct={setSelectedProduct} />)}</div> : <Empty title="Nothing matched your search" text="Try a broader search or clear one of the filters." action="Clear filters" onAction={() => { setSearch(''); setCategory('All'); setMaxPrice(400); }} />}</div></div></section>;
}

function Wishlist({ items, addToCart, toggleWish, setSelectedProduct, navigate }) { return <section className="section page-min"><div className="page-title"><p className="eyebrow">Your saved pieces</p><h1>Wishlist</h1><p>{items.length} items you might want to make yours.</p></div>{items.length ? <div className="product-grid">{items.map((product) => <ProductCard key={product.id} product={product} addToCart={addToCart} toggleWish={toggleWish} wished setSelectedProduct={setSelectedProduct} />)}</div> : <Empty title="Your wishlist is waiting" text="Save the things that catch your eye and find them all here." action="Explore the collection" onAction={() => navigate('shop')} />}</section>; }

function Cart({ cart, setCart, navigate }) { const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); const shipping = subtotal > 150 || subtotal === 0 ? 0 : 12; const discount = subtotal * .1; return <section className="section page-min"><div className="page-title compact"><p className="eyebrow">Ready when you are</p><h1>Your bag <span>({cart.reduce((s, i) => s + i.quantity, 0)})</span></h1></div>{cart.length ? <div className="cart-layout"><div className="cart-items">{cart.map((item) => <div className="cart-item" key={item.id}><img src={item.image} alt="" /><div className="cart-item-info"><p className="product-brand">{item.brand}</p><h3>{item.name}</h3><p className="cart-variant">One size · In stock</p><div className="quantity"><button onClick={() => setCart(cart.map((i) => i.id === item.id ? { ...i, quantity: Math.max(1, i.quantity - 1) } : i))}>−</button><span>{item.quantity}</span><button onClick={() => setCart(cart.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))}>+</button></div></div><strong className="cart-price">{money(item.price * item.quantity)}</strong><button className="remove" onClick={() => setCart(cart.filter((i) => i.id !== item.id))}><Trash2 size={16} /></button></div>)}</div><aside className="summary"><h2>Order summary</h2><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><div><span>Estimated shipping</span><strong>{shipping ? money(shipping) : 'Free'}</strong></div><div><span>Member savings</span><strong className="green">−{money(discount)}</strong></div><hr /><div className="total"><span>Total</span><strong>{money(subtotal + shipping - discount)}</strong></div><button className="button button-dark full" onClick={() => navigate('checkout')}>Continue to checkout <ArrowRight size={16} /></button><p className="secure"><ShieldCheck size={14} /> Secure, encrypted checkout</p></aside></div> : <Empty title="Your bag is empty" text="Beautiful things are waiting to find their way home." action="Start shopping" onAction={() => navigate('shop')} />}</section>; }

function Checkout({ cart, setCart, setOrders, navigate, notify }) { const [step, setStep] = useState(1); const [payment, setPayment] = useState('Card'); const [address, setAddress] = useState({ name: 'Maya Chen', line: '', city: '', zip: '' }); const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0); const placeOrder = () => { setOrders((orders) => [{ id: `LX-${Math.floor(100000 + Math.random() * 899999)}`, items: cart, total: subtotal * .9, status: 'Order Placed', created: 'Just now', payment }, ...orders]); setCart([]); setStep(5); notify('Order placed successfully'); }; return <section className="section checkout"><div className="checkout-head"><button className="back-link" onClick={() => navigate('cart')}><ChevronLeft size={16} /> Back to bag</button><div className="checkout-logo">Luxe<span>Store</span></div><span className="secure"><ShieldCheck size={14} /> Secure checkout</span></div><div className="steps">{['Shipping', 'Delivery', 'Payment', 'Review', 'Confirmation'].map((label, index) => <div className={step >= index + 1 ? 'step active' : 'step'} key={label}><span>{index + 1}</span>{label}</div>)}</div>{step < 5 && <div className="checkout-grid"><div className="checkout-form">{step === 1 && <><h1>Shipping address</h1><p className="muted">Where should we send your order?</p><div className="form-grid"><label>Full name<input value={address.name} onChange={(e) => setAddress({ ...address, name: e.target.value })} /></label><label>Address<input placeholder="Street and apartment" value={address.line} onChange={(e) => setAddress({ ...address, line: e.target.value })} /></label><label>City<input placeholder="New York" value={address.city} onChange={(e) => setAddress({ ...address, city: e.target.value })} /></label><label>ZIP code<input placeholder="10001" value={address.zip} onChange={(e) => setAddress({ ...address, zip: e.target.value })} /></label></div></>}{step === 2 && <><h1>Delivery method</h1><p className="muted">Arrives in 2-4 business days.</p><label className="option selected"><span><input type="radio" checked readOnly /> Standard delivery</span><strong>Free</strong><small>2-4 business days</small></label><label className="option"><span><input type="radio" readOnly /> Express delivery</span><strong>$18</strong><small>Next business day</small></label></>}{step === 3 && <><h1>Payment method</h1><p className="muted">This is a simulated payment for demonstration.</p><div className="payment-options">{['Card', 'UPI', 'Digital Wallet', 'Cash on Delivery'].map((method) => <button className={payment === method ? 'selected' : ''} onClick={() => setPayment(method)} key={method}>{method === 'Card' ? <CreditCard size={20} /> : method === 'Cash on Delivery' ? <Truck size={20} /> : <ShoppingBag size={20} />}{method}<span>{payment === method && <Check size={16} />}</span></button>)}</div>{payment === 'Card' && <div className="card-fields"><label>Card number<input placeholder="4242 4242 4242 4242" /></label><div className="form-grid"><label>Expiry<input placeholder="MM / YY" /></label><label>CVC<input placeholder="123" /></label></div></div>}</>}{step === 4 && <><h1>Review your order</h1><p className="muted">One last look before we send it on its way.</p><div className="review-block"><strong>Ship to</strong><p>{address.name}<br />{address.line || '123 Mercer Street'}<br />{address.city || 'New York'}, {address.zip || '10001'}</p><button onClick={() => setStep(1)}>Edit</button></div><div className="review-block"><strong>Payment</strong><p>{payment}<br /><span className="muted">Securely processed for demo</span></p><button onClick={() => setStep(3)}>Edit</button></div></>}</div><aside className="summary checkout-summary"><h2>Order summary</h2>{cart.map((item) => <div className="mini-item" key={item.id}><img src={item.image} alt="" /><span>{item.name}<small>Qty {item.quantity}</small></span><strong>{money(item.price * item.quantity)}</strong></div>)}<hr /><div><span>Subtotal</span><strong>{money(subtotal)}</strong></div><div><span>Shipping</span><strong>Free</strong></div><div className="total"><span>Total</span><strong>{money(subtotal * .9)}</strong></div></aside></div>} {step < 5 && <div className="checkout-actions"><button className="button button-dark" onClick={() => step === 4 ? placeOrder() : setStep(step + 1)}>{step === 4 ? 'Place order' : 'Continue'} <ArrowRight size={16} /></button></div>}{step === 5 && <div className="confirmation"><div className="confirmation-icon"><Check size={30} /></div><p className="eyebrow">Thank you, Maya</p><h1>Your order is on its way.</h1><p>We’ve sent a confirmation email with your order details and tracking updates.</p><button className="button button-dark" onClick={() => navigate('account')}>View your order <ArrowRight size={16} /></button></div>}</section>; }

function Account({ user, orders, wishlist, logout, navigate }) { const [tab, setTab] = useState('Overview'); return <section className="section account-page"><div className="account-welcome"><div><p className="eyebrow">Your LuxeStore</p><h1>Hello, {user?.name?.split(' ')[0] || 'there'}.</h1><p className="muted">Keep track of your pieces, preferences, and orders.</p></div><button className="button button-outline" onClick={logout}>Log out</button></div><div className="account-layout"><aside className="account-nav">{['Overview', 'Orders', 'Wishlist', 'Addresses', 'Settings'].map((item) => <button className={tab === item ? 'active' : ''} onClick={() => item === 'Wishlist' ? navigate('wishlist') : setTab(item)} key={item}>{item === 'Overview' ? <LayoutDashboard size={17} /> : item === 'Orders' ? <Package size={17} /> : item === 'Wishlist' ? <Heart size={17} /> : item === 'Addresses' ? <HomeIcon size={17} /> : <Settings size={17} />}{item}</button>)}</aside><div className="account-content">{tab === 'Overview' && <><div className="account-stats"><div><Package size={18} /><strong>{orders.length}</strong><span>Orders placed</span></div><div><Heart size={18} /><strong>{wishlist.length}</strong><span>Saved pieces</span></div><div><Truck size={18} /><strong>{orders.filter((o) => o.status !== 'Delivered').length}</strong><span>On the way</span></div></div><div className="account-panel"><div className="panel-heading"><div><p className="eyebrow">Recent activity</p><h2>Your orders</h2></div><button className="text-link" onClick={() => setTab('Orders')}>View all <ArrowRight size={15} /></button></div>{orders.length ? orders.slice(0, 3).map((order) => <OrderRow order={order} key={order.id} />) : <Empty title="No orders yet" text="Your first considered purchase is just a few clicks away." action="Shop now" onAction={() => navigate('shop')} />}</div></>}{tab === 'Orders' && <div className="account-panel"><p className="eyebrow">Your history</p><h2>Order history</h2>{orders.length ? orders.map((order) => <OrderRow order={order} key={order.id} />) : <Empty title="No orders yet" text="Your orders will appear here." action="Shop now" onAction={() => navigate('shop')} />}</div>}{tab === 'Addresses' && <div className="account-panel"><p className="eyebrow">Where we send things</p><h2>Saved addresses</h2><div className="address-card"><strong>Home <span>Default</span></strong><p>{user?.name || 'Maya Chen'}<br />123 Mercer Street, Apt 4B<br />New York, NY 10001</p><button className="text-link">Edit <ArrowUpRight size={14} /></button></div></div>}{tab === 'Settings' && <div className="account-panel"><p className="eyebrow">Your details</p><h2>Profile settings</h2><div className="form-grid"><label>Name<input defaultValue={user?.name} /></label><label>Email<input defaultValue={user?.email} /></label></div><button className="button button-dark">Save changes <Check size={16} /></button></div>}</div></div></section>; }

function OrderRow({ order }) { return <div className="order-row"><div className="order-icon"><Package size={18} /></div><div><strong>Order {order.id}</strong><span>{order.items?.length || 1} item{order.items?.length === 1 ? '' : 's'} · {order.created}</span></div><span className="status"><i />{order.status}</span><strong>{money(order.total)}</strong><ChevronRight size={16} /></div>; }

function Admin({ orders, setOrders, navigate }) { const [tab, setTab] = useState('Overview'); const [showAdd, setShowAdd] = useState(false); return <section className="admin-page"><aside className="admin-sidebar"><button className="logo" onClick={() => navigate('home')}>Luxe<span>Store</span></button><div className="admin-label">Workspace</div>{['Overview', 'Products', 'Orders', 'Customers'].map((item) => <button className={tab === item ? 'active' : ''} onClick={() => setTab(item)} key={item}><LayoutDashboard size={17} />{item}</button>)}<div className="admin-footer"><button onClick={() => navigate('home')}><ArrowRight size={16} /> Back to store</button></div></aside><div className="admin-main"><div className="admin-top"><div><p className="eyebrow">Monday, October 14, 2025</p><h1>{tab === 'Overview' ? 'Good morning, Maya.' : tab}</h1></div><div className="admin-user"><div className="avatar">MC</div><span>Admin account</span><ChevronDown size={15} /></div></div>{tab === 'Overview' && <><div className="admin-stats"><div><span>Total revenue</span><strong>$24,892.40</strong><small className="positive">↗ 12.8% this month</small></div><div><span>Total orders</span><strong>{orders.length + 128}</strong><small className="positive">↗ 8.4% this month</small></div><div><span>Customers</span><strong>2,481</strong><small className="positive">↗ 18.2% this month</small></div><div><span>Products</span><strong>{productCatalog.length}</strong><small>12 low in stock</small></div></div><div className="admin-columns"><div className="admin-panel"><div className="panel-heading"><div><p className="eyebrow">Live activity</p><h2>Recent orders</h2></div><button className="text-link" onClick={() => setTab('Orders')}>View all <ArrowRight size={15} /></button></div>{orders.length ? orders.slice(0, 5).map((o) => <OrderRow order={o} key={o.id} />) : <div className="admin-order-placeholder"><ShoppingBag size={20} /><p>Your incoming orders will appear here.</p></div>}</div><div className="admin-panel stock-panel"><div className="panel-heading"><div><p className="eyebrow">Inventory</p><h2>Stock watch</h2></div><button className="text-link" onClick={() => setTab('Products')}>Manage <ArrowRight size={15} /></button></div>{productCatalog.slice(0, 4).map((product) => <div className="stock-row" key={product.id}><img src={product.image} alt="" /><span>{product.name}<small>{product.brand}</small></span><b className={product.stock < 10 ? 'low' : ''}>{product.stock} left</b></div>)}</div></div></>}{tab === 'Products' && <div className="admin-panel"><div className="panel-heading"><div><p className="eyebrow">Catalog</p><h2>All products</h2></div><button className="button button-dark" onClick={() => setShowAdd(true)}><Plus size={16} /> Add product</button></div><div className="product-table">{productCatalog.map((product) => <div className="product-table-row" key={product.id}><img src={product.image} alt="" /><div><strong>{product.name}</strong><span>{product.brand} · {product.category}</span></div><b>{money(product.price)}</b><span className={product.stock < 10 ? 'stock low' : 'stock'}>{product.stock} in stock</span><button className="icon-btn"><Settings size={16} /></button></div>)}</div></div>}{tab === 'Orders' && <div className="admin-panel"><p className="eyebrow">Fulfillment</p><h2>All orders</h2>{orders.length ? orders.map((order) => <div className="order-row admin-order" key={order.id}><OrderRow order={order} /><select value={order.status} onChange={(e) => setOrders(orders.map((o) => o.id === order.id ? { ...o, status: e.target.value } : o))}><option>Order Placed</option><option>Processing</option><option>Shipped</option><option>Out for Delivery</option><option>Delivered</option><option>Cancelled</option></select></div>) : <div className="admin-order-placeholder"><Package size={20} /><p>No orders to manage yet.</p></div>}</div>}{tab === 'Customers' && <div className="admin-panel"><p className="eyebrow">Community</p><h2>Customers</h2><div className="customer-row"><div className="avatar">MC</div><div><strong>Maya Chen</strong><span>maya.chen@email.com</span></div><span>8 orders</span><span>Active</span></div><div className="customer-row"><div className="avatar pale">JR</div><div><strong>Jonas Reed</strong><span>jonas.reed@email.com</span></div><span>3 orders</span><span>Active</span></div></div>}</div>{showAdd && <div className="modal-backdrop"><div className="auth-modal"><button className="modal-close" onClick={() => setShowAdd(false)}><X size={18} /></button><p className="eyebrow">Catalog</p><h2>Add a product</h2><label>Product name<input placeholder="Product name" /></label><label>Price<input placeholder="$0.00" /></label><label>Category<select><option>Fashion</option><option>Electronics</option><option>Home & Living</option></select></label><button className="button button-dark full" onClick={() => setShowAdd(false)}>Add to catalog <Plus size={16} /></button></div></div>}</section>; }

function ProductModal({ product, close, addToCart, toggleWish, wished }) { const [quantity, setQuantity] = useState(1); const [size, setSize] = useState(product.sizes?.[0]); return <div className="modal-backdrop" onClick={close}><div className="product-modal" onClick={(e) => e.stopPropagation()}><button className="modal-close" onClick={close}><X size={18} /></button><div className="modal-image"><img src={product.image} alt={product.name} /></div><div className="modal-copy"><p className="product-brand">{product.brand}</p><h2>{product.name}</h2><div className="modal-rating"><Star size={14} fill="currentColor" /> {product.rating} <span>{product.reviews} reviews</span></div><p className="modal-description">{product.description}</p>{product.origin && <p className="origin-note">Design origin: {product.origin}</p>}<div className="modal-price"><strong>{money(product.price)}</strong><del>{money(product.original)}</del><span>Save {Math.round((1 - product.price / product.original) * 100)}%</span></div>{product.sizes?.length > 0 && <div className="variation"><p>Size <span>{size}</span></p><div>{product.sizes.map((item) => <button className={item === size ? 'selected' : ''} onClick={() => setSize(item)} key={item}>{item}</button>)}</div></div>}{product.colors?.length > 0 && <div className="variation"><p>Color</p><div className="swatches">{product.colors.map((color) => <button style={{ backgroundColor: color }} key={color} />)}</div></div>}<div className="modal-actions"><div className="quantity"><button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)}>+</button></div><button className="button button-dark" onClick={() => { addToCart(product, quantity); close(); }}>Add to bag <ShoppingBag size={16} /></button><button className={`heart-button ${wished ? 'active' : ''}`} onClick={() => toggleWish(product)}><Heart size={19} fill={wished ? 'currentColor' : 'none'} /></button></div><p className="stock-note"><Check size={14} /> {product.stock} available · Free shipping over $150</p></div></div></div>; }

function AuthModal({ mode, setMode, login }) { const isLogin = mode === 'login'; const [email, setEmail] = useState('maya.chen@email.com'); return <div className="modal-backdrop"><div className="auth-modal"><button className="modal-close" onClick={() => setMode(null)}><X size={18} /></button><p className="eyebrow">Welcome to LuxeStore</p><h2>{isLogin ? 'Welcome back.' : 'Create your account.'}</h2><p className="muted">{isLogin ? 'Sign in to continue your considered shopping journey.' : 'Join the edit and save your favorite pieces.'}</p>{!isLogin && <label>Full name<input defaultValue="Maya Chen" /></label>}<label>Email address<input value={email} onChange={(e) => setEmail(e.target.value)} type="email" /></label><label>Password<input defaultValue="password" type="password" /></label><button className="button button-dark full" onClick={() => login({ ...initialUser, email, role: email.toLowerCase() === 'admin@luxestore.com' ? 'admin' : 'customer' })}>{isLogin ? 'Sign in' : 'Create account'} <ArrowRight size={16} /></button>{isLogin && <button className="forgot" onClick={() => setMode('forgot')}>Forgot password?</button>}<p className="auth-switch">{isLogin ? 'New to LuxeStore?' : 'Already have an account?'} <button onClick={() => setMode(isLogin ? 'signup' : 'login')}>{isLogin ? 'Create account' : 'Sign in'}</button></p>{mode === 'forgot' && <div className="forgot-panel"><p>Enter your email and we’ll send a reset link.</p><input value={email} onChange={(e) => setEmail(e.target.value)} /><button className="text-link" onClick={() => setMode('login')}>Send reset link <ArrowRight size={15} /></button></div>}</div></div>; }

function Empty({ title, text, action, onAction }) { return <div className="empty"><div className="empty-icon"><ShoppingBag size={22} /></div><h2>{title}</h2><p>{text}</p><button className="button button-dark" onClick={onAction}>{action} <ArrowRight size={16} /></button></div>; }
function Newsletter() { return <section className="newsletter"><div><p className="eyebrow light">A little something good</p><h2>Stay in the know.</h2><p>New arrivals, quiet obsessions, and 10% off your first order.</p></div><label className="newsletter-input"><input placeholder="Your email address" type="email" /><button aria-label="Subscribe"><ArrowRight size={18} /></button></label></section>; }
function Footer({ navigate }) { return <footer><div className="footer-top"><div className="footer-brand"><button className="logo" onClick={() => navigate('home')}>Luxe<span>Store</span></button><p>Curated for the considered life.</p></div><div><p className="footer-label">Explore</p><button onClick={() => navigate('shop')}>Shop all</button><button onClick={() => navigate('shop')}>New arrivals</button><button onClick={() => navigate('shop')}>Best sellers</button></div><div><p className="footer-label">Customer care</p><button>Shipping & returns</button><button>Contact us</button><button>FAQ</button></div><div><p className="footer-label">Follow along</p><button>Instagram</button><button>Pinterest</button><button>Journal</button></div></div><div className="footer-bottom"><span>© 2025 LuxeStore</span><span>Made for the considered life</span><span>Privacy · Terms</span></div></footer>; }
