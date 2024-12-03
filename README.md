# React Native: Visual Product Search API using Shopify API

## Overview



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
