// for debbuging remove the commented line : "document.head.insertBefore("....

// Dynamically create the <script> tag for Tailwind CDN
const script = document.createElement('script');
script.src = "https://cdn.tailwindcss.com/3.4.4?plugins=forms,typography,aspect-ratio";

// This will ensure that the CDN is the first script loaded
script.onload = function() {
  console.log('Tailwind CSS CDN loaded successfully.');
  
  // Check if tailwindcss is now available
  if (typeof tailwind !== "undefined") {
    
    // Dynamically configure Tailwind with custom options if needed
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          }
        }
      }
    };
      
    console.log("Tailwind CSS initialized successfully.");
    
    // Optionally, you can execute additional logic here if necessary
    document.documentElement.classList.add("tailwind-initialized");
  } else {
    console.error("Tailwind CSS did not initialize.");
  }
};

// In case the script fails to load
script.onerror = function (error) {
  console.error('Failed to load Tailwind CSS CDN:', error);
};


// *******    UNCOMMENT THIS LINE FOR EASIER DEVELOPMENT WITHOUT THE    *******
// *******    NEED TO RECOMPILE TAILWIND AFTER EVERY CHANGE             *******

// Add the script as the first child in the document head
//document.head.insertBefore(script, document.head.firstChild);
