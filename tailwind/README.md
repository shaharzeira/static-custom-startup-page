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

## 💡 Development Tip

During development, it is recommended to **uncomment** the following line in `cdn.js` for easier testing without rebuilding Tailwind:

```javascript
// document.head.insertBefore(script, document.head.firstChild);
```

⚠ **Important:** Re-comment this line before deploying to production to ensure the compiled Tailwind CSS file is used.

---

## ⚡ Compilation Process

First, change directory to the `tailwind` folder:  
```bash
cd tailwind
```

Then build:  
```bash
npx tailwindcss -i input.css -o tailwind.css --watch
```
