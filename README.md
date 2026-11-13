# Wilcom Electricals Website

A mobile-friendly static website for Wilcom Electricals, an online and physical electrical supplies shop in Kolweny.

## Included
- Product catalogue and prices
- Product search
- WhatsApp ordering to Amos Okeyo (0720547236)
- Electrical installation enquiry
- Quotation request
- Physical shop and delivery area information

## Run locally
Open `index.html` in a browser.

## Publish with GitHub Pages
1. Create a GitHub repository named `wilcom-electricals`.
2. Upload `index.html`, `styles.css`, `script.js`, and `README.md`.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub to publish the site; your URL will appear in the Pages section.

## Add real product photos
The first version uses simple visual placeholders for products. To add product photographs:
1. Create an `images` folder in the repository.
2. Upload product images, e.g. `mk-box-single.jpg`, `mk-double.jpg`, `switch.jpg`.
3. In `script.js`, set each product's `photo` value to its path, e.g. `images/mk-box-single.jpg`.
Use clear photos of the exact stock you sell. Confirm brand/model and price before publishing.

## Important
This is a front-end starter. WhatsApp ordering works by opening a pre-filled message. Online card/M-Pesa checkout, customer accounts, inventory management and order database are not connected yet.
