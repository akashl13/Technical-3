# LuxeStore

LuxeStore is a premium, responsive e-commerce storefront built with React and Vite. It combines editorial luxury design with practical shopping flows, including product discovery, category browsing, search, filtering, wishlist management, cart persistence, checkout, customer accounts, order tracking, and an admin inventory workspace.

## Features

- 448+ seeded products with 32+ products in every category
- Category-specific imagery and realistic product metadata
- Luxury, sportswear, technology, beauty, home, travel, wellness, and kids brands
- Search, category filters, price range, availability, and sorting
- Product details with ratings, reviews, stock, origin, colors, and sizes
- Persistent cart and wishlist state
- Simulated multi-step checkout with card, UPI, wallet, and cash-on-delivery options
- Customer dashboard with orders, addresses, wishlist, and settings
- Admin dashboard with revenue, inventory, product, customer, and order views
- Responsive layouts for desktop, tablet, and mobile

## Technology

- React
- Vite
- JavaScript
- CSS
- Lucide React
- Local storage for demo persistence

## Run locally

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:5173`.

## Demo admin access

Use `admin@luxestore.com` as the email address. The demo accepts any password and routes the account to the admin dashboard.

## Production note

This version uses local storage for demonstration. A production deployment should replace it with secure server-side authentication, a real database, encrypted passwords, server validation, cloud image storage, and a payment provider.