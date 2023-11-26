<img src="./src/matz/Logo_horizonta.svg">

# Kinhouse Studio - Website
### Welcome to the official repository for the **Kinhouse Studio Website**. This website is uniquely crafted to showcase the essence and vision of Kinhouse Studio, a creative space where innovation meets design.

## Design and Customization
The design of the Kinhouse Studio website is tailored for a specific purpose, reflecting the unique brand and style of Kinhouse Studio. It's important to note that due to its bespoke design and architecture, the website is not straightforward to modify or repurpose for other projects. This design choice ensures a unique and consistent user experience that aligns closely with the Kinhouse Studio's brand identity.

> **Note**: This repository is intended for development and maintenance of the Kinhouse Studio website. While contributions and suggestions are welcome, please keep in mind the specialized nature of the website's design and structure.

## Technology Stack
- **CMS**: `Strapi 4` `pm2`
- **Framework**: `Gatsby 5`

## Installation
Follow these simple steps to get started with the Gatbsy project:

### Prerequisites:
1. Install `Node.js LTS` and `npm@latest` or `yarn@latest`</br>
2. Install `Gatsby => 5.12.4`
3. Clone the Repository and navigate to the project directory
```bash
git clone git@github.com:szawel/kinhouse.studio.git
cd kinhouse.studio
```
4. Install Dependencies and run gastby develop
```bash
yarn install
yarn develop
```

## PM2
 Production process manager for Node.js applications, like `Strapi`, run on server.
```bash
# Instalation
npm install pm2 -g

# Listing Running Applications
pm2 list

# Monitoring Applications
pm2 monit

# To update PM2 to the latest version, you can use
npm install pm2@latest -g
```