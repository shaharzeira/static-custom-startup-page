# Tailwind CSS Setup and Compilation (v3.4.4)

## ⚠️ Importance of Tailwind CSS v3.4.4

This project specifically requires **Tailwind CSS v3.4.4**.
To install **Tailwind CSS v3.4.4**, use the following command:

   ```bash
   npm install tailwindcss@3.4.4
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
   
   then build:
   
   ```bash
   npx tailwindcss -i tailwind/input.css -o tailwind/tailwind.css --minify --watch
   ```

   then switch back to:
   ```html
   <link rel="stylesheet" href="tailwind/tailwind.css">
   ```
