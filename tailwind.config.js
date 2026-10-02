/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: '#0038B6',
        'brand-dark': '#002B8C',
        cyan: '#00B2F0',
        ink: '#0B1120',
        slate: '#667085',
        mist: '#F4F6FB',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: { sm: '8px', md: '16px', full: '999px' },
      boxShadow: {
        card: '0 1px 2px rgba(11,17,32,0.06), 0 4px 12px rgba(11,17,32,0.06)',
        hover: '0 8px 20px rgba(11,17,32,0.10)',
      },
      maxWidth: { content: '1120px' },
    },
  },
};
