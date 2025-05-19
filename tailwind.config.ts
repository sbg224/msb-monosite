import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0077b6",
          dark: "#005f92",
          light: "#00a8e8",
        },
        vintage: {
          brown: "#8B4513",
          terracotta: "#E2725B",
          cream: "#F5F5DC",
          paper: "#F4E4BC",
        },
      },
      backgroundImage: {
        'paper-texture': "url('/textures/paper-texture.png')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.05) translateY(-5px)' },
        },
      },
      boxShadow: {
        'vintage': '0 4px 6px -1px rgba(139, 69, 19, 0.1), 0 2px 4px -1px rgba(139, 69, 19, 0.06)',
        'vintage-hover': '0 10px 15px -3px rgba(139, 69, 19, 0.1), 0 4px 6px -2px rgba(139, 69, 19, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config; 