![Logo](src/assets/kabayankonek.png)

# Kabayan Konek

**Kabayan Konek** is a platform that connects Filipinos in Finland. It serves as a community hub, offering various features such as lifestyle content, a spotlight on kababayans, local events, news, a marketplace, and a dedicated page for advertisements. Users can post events, sell products, and share advertisements, all while staying informed about the latest happenings in the Filipino community.

---

## 🚀 **Getting Started**

To run **Kabayan Konek** locally, follow the steps below.

### Prerequisites

Ensure that you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn** (depending on your preference)
- **PostgreSQL** (for database setup)
- **Cloudinary** (for image hosting)

---

### 1. Clone the Repository

Clone the repository to your local machine:

git clone [https://github.com/your-username/kabayan-konek.git](https://github.com/iamtigermaximus/kabayan-konek.git)

cd kabayan-konek

### 2. Install Dependencies

Install the required dependencies:

npm install

### 3. Set Up Environment Variables

Create a .env.local file in the root of the project and configure the environment variables:

DATABASE_URL=postgresql://user:password@localhost:5432/kabayan_konek?schema=public

# Cloudinary environment variables

CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Other environment variables (like API keys)

NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000

### 4. Set Up PostgreSQL with Prisma

Run the following commands to set up your database and apply the Prisma migrations:

Install Prisma CLI (if not already installed):

npm install prisma --save-dev

Generate Prisma Client:

npx prisma generate

Apply Migrations (ensure your PostgreSQL database is running):

npx prisma migrate dev

### 5. Run the Development Server

To start the Next.js development server, run:

npm run dev

Visit http://localhost:3000 in your browser to view your site.

### 🌐 Features

Kabayan Konek offers a variety of features for the Filipino community in Finland:

1. Lifestyle Features
   Stay updated with lifestyle articles, tips, and stories relevant to the Filipino community in Finland. Articles cover topics such as living in Finland, cultural integration, and personal stories from kababayans.

2. Kabayan Spotlight
   This page highlights notable Filipinos in Finland who have made a significant impact in their communities. Whether through achievements, community work, or inspiring stories, the Kabayan Spotlight aims to honor and share their experiences.

3. Latest News
   Stay informed about the latest news that affects Filipinos in Finland, including cultural events, local news, and announcements that are relevant to the Filipino community.

4. Events
   Users can post local events, cultural activities, and meetups. The Events page allows Filipinos to discover and promote events that bring the community together.

5. Marketplace
   The Marketplace page allows users to buy and sell products. From Filipino goods to local items, this feature enables the Filipino community in Finland to connect through commerce.

6. Advertisement Page
   The Advertisement page allows businesses and individuals to post advertisements for services, products, or events. This is a great way to promote local businesses or personal offerings to the Filipino community.

### ⚙️ Technologies Used

Kabayan Konek is built using modern web technologies:

Next.js 13: A React-based framework for building static and dynamic websites.
TypeScript: Provides type safety and improves developer experience.
Prisma: An ORM (Object Relational Mapper) for PostgreSQL, simplifying database operations.
PostgreSQL: A powerful, open-source relational database for storing data.
Cloudinary: A media management platform to handle image and video uploads.
Styled Components: A CSS-in-JS library for styling components in a scalable and maintainable way.
Vercel (or other hosting platforms): For seamless deployment.

### 🛠️ Development Setup

Database Setup
1.Ensure PostgreSQL is installed on your machine, or use a cloud service like ElephantSQL for PostgreSQL hosting.
2.Set the DATABASE_URL in the .env.local file to point to your PostgreSQL instance.

### Cloudinary Setup

Sign up for a Cloudinary account if you haven't already at Cloudinary.
Get your Cloudinary credentials (cloud name, API key, and API secret) and configure them in .env.local file

### 🛠️ Running Prisma Migrations

To apply any database changes (after modifying Prisma schema), run:

npx prisma migrate dev

### 📦 Deployment

To deploy your project, you can use platforms like Vercel or Netlify. Here's how to deploy to Vercel:

Push your code to a GitHub repository.
Sign in to Vercel at Vercel.
Import the GitHub repository and deploy the application.
Vercel automatically detects your Next.js project and builds it.
