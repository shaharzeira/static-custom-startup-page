# Tailwind CSS Setup and Compilation (v3.4.4)

## ⚠️ Importance of Tailwind CSS v3.4.4

This project specifically requires **Tailwind CSS v3.4.4**.
To install **Tailwind CSS v3.4.4**, use the following command:

   ```bash
   npm install tailwindcss@3.4.4
   ```
   
   also install the following :
   
   ```bash
   npm install @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio
   ```
---

## ⚡ Compilation Process

   switch between using the compiled version of Tailwind and a CDN version by commenting/uncommenting the appropriate line in your HTML file. switch thhe following:
   
   1. **The compiled version** (after building):

   ```html
   <link rel="stylesheet" href="tailwind/tailwind.css">
   ```

   2. **The CDN version** (without building):

   ```html
   <script src="https://cdn.tailwindcss.com/3.4.4?plugins=forms,typography,aspect-ratio"></script>
   ```
   
   firt change directory to tailwind: 
   ```bash
   cd tailwind
   ```
   
   then build:
   
   ```bash
   npx tailwindcss -i input.css -o tailwind.css --watch
   ```

   then switch back to:
   ```html
   <link rel="stylesheet" href="tailwind/tailwind.css">
   ```
