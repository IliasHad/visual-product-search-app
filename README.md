# React Native: Visual Product Search API using Shopify API

## Overview


| License | Mobile Technology    | Image Labeling | eCommerce CMS | Search API |
| :---:   | :---: |  :---: |  :---: |   :---: |
 | [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  | ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  | [![Google Cloud](https://img.shields.io/badge/Google%20Cloud-%234285F4.svg?logo=google-cloud&logoColor=white)](#) | [![Shopify](https://img.shields.io/badge/Shopify-7AB55C?logo=shopify&logoColor=fff)](#) | Algolia Search API






| Browsing | Image Searching    | Displaying Results    |
| :---:   | :---: | :---: |
 |![IMG_7232](https://github.com/user-attachments/assets/73118f63-ec74-44af-8ff0-dc8edbe216dd) | ![IMG_7234](https://github.com/user-attachments/assets/9ac14cdb-9b64-40a2-a006-d952a29e3935) |   ![IMG_7233](https://github.com/user-attachments/assets/179fa312-5293-4c74-9a49-c791efe3d34a)|

## Directory Structure
```
shopify-search-app/
│
├── app/                    # App configuration and entry points
│   ├── _layout.tsx         # Navigation layout
│   └── (tabs)/             # Grouped tab navigation
│       ├── _layout.tsx     # Navigation layout
│       └── index.tsx       # Main Entry view
│   └──  +not-found.tsx     # Not found view

├── assets/                 # Static assets
│   ├── images/
│   ├── fonts/
│
├── components/             # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Text.tsx
│   │   ├── Card.tsx
│   │   ├── QueryClient.tsx
│   │   ├── ProductList.tsx
│   │   ├── ProductCard.tsx
│   │   ├── SearchBar.tsx
│   │   ├── SearchResults.tsx
│   │   ├── SelectedImagePreview.tsx
│   │   ├── NotFound.tsx
│   │   ├── Grid.tsx
│   │   ├── ExternalLink.tsx
│   │   ├── HapticTab.tsx
│   │   ├── LoadingResults.tsx
│   │   └── SearchImageResults.tsx
│
├── constants/              # App-wide constants
│   ├── Colors.ts
│   ├── Query.ts
│
├── hooks/                  # Custom React hooks
│   ├── useHomeViewState.ts
│   ├── useProducts.ts
│   ├── useImageSearch.ts
│   └── useProductSearch.ts
│
├── navigation/             # Navigation configuration
│   ├── AppNavigator.tsx
│   └── types.ts
│
├── screens/                # Full screen components
│   ├── HomeScreen.tsx
│   ├── LoginScreen.tsx
│   └── ProfileScreen.tsx
│
├── services/               # API and external service calls
│   ├── search.ts
│   ├── shopify.ts
│   └── StorageService.ts
│
│
├── types/                  # TypeScript type definitions
│   └──  shopify.ts
│
│
├── .env                    # Environment variables
├── app.json                # Expo app configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Features

- 📸 Visual Product Search
- 🚀 Instant Product Matching
- 📱 Cross-Platform Mobile Experience (iOS & Android)

## Tech Stack

- **Frontend**: React Native
- **Image Recognition**: Google Cloud Platform Vision API
- **Search**: Algolia Search API
- **Backend**: Remix.js

## Prerequisites

- Node.js (v16+ recommended)
- npm or Yarn
- React Native CLI
- Google Cloud Platform Account
- Algolia Account
- Shopify Partner Account or a Shopify development store

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


3. Set up environment variables:
Create a `.env` file in the project root with the following:

```
EXPO_PUBLIC_APP_HOST=""
EXPO_PUBLIC_SHOPIFY_API_SECRET=""
EXPO_PUBLIC_SHOPIFY_DOMAIN="example.myshopify.com"
```

## Configuration

### Google Cloud Platform Vision API
1. Create a GCP project
2. Enable Vision API
3. Generate and download service account credentials

### Algolia
1. Create an Algolia account
2. Set up your product index
3. Configure search settings

### Shopify Storefront API
1. Create a Shopify development store
2. Set up Shopify Storefront API
3. Get your API key

## Running the App

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```
## Workflow

1. User uploads a product photo
2. GCP Vision API analyzes the image
3. Extracted tags/labels sent to Algolia
4. Algolia returns matching products
5. Results displayed to the user

## Future Roadmap

- [ ] Advanced ML-powered visual search

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
