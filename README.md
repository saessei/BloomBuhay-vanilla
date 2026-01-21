🌸 BloomBuhay – Para sa buhay na bumubuhay.

A Maternal Wellness Web App for Every Stage of Motherhood

🩷 Overview

BloomBuhay is a maternal wellness web application designed to guide, support, and empower Filipino mothers through pregnancy, postpartum, and early motherhood.

The app combines health tracking, milestone visualization, emotional wellness, and educational content in one secure, user-friendly space.

It allows users to log health data, visualize baby growth, manage tasks and appointments, explore articles, and relax with baby sounds — all in one place.

💡 Problem Statement

Many Filipino mothers struggle to track their health and find reliable, centralized information throughout motherhood.
Most existing apps focus only on pregnancy and neglect postpartum care, mental health, and long-term engagement.

BloomBuhay solves this by providing a holistic, continuous digital companion for mothers — before, during, and after pregnancy.

## 📦 Installation

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** (v8 or higher) or **yarn**
- **Git**

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/auauron/BloomBuhay.git
   cd BloomBuhay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install dependencies for both the root, client, and server directories.

3. **Environment Setup**
   - Navigate to the `server` directory and create a `.env` file with the necessary environment variables
   - Configure the database connection string and API keys as needed

4. **Install Prisma and migrate database**
   ```bash
   cd server
   npx prisma migrate dev
   cd ..
   ```

### Running the Application

#### Development Mode
Run both client and server concurrently:
```bash
npm run dev
```

#### Client Only
```bash
npm run client
```
The client will run on `http://localhost:8080`

#### Server Only
```bash
npm run server
```
The server will run on `http://localhost:5000`

### Building for Production

Build both client and server:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

### Storybook (Component Development)

Run Storybook to view and develop components in isolation:
```bash
cd client
npm run storybook
```
Storybook will open on `http://localhost:6006`

Build Storybook for deployment:
```bash
cd client
npm run build-storybook
```

## 📁 Project Structure

```
BloomBuhay/
├── client/          # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── stories/  # Storybook stories
│   └── package.json
├── server/          # Node.js backend with Prisma
│   ├── src/
│   ├── prisma/
│   └── package.json
└── README.md
```

🥷 Developed by Team Mixed Berries
