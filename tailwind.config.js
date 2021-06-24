module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}", "./safelist.txt"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      white: "#FFF",
      black: "#000",
      transparent: "#FF000000",
      "primary-1-dark": "#EE3378",
      "primary-2-dark": "#EE33B4",
      "secondary-1-dark": "#08EFE5",
      "secondary-2-dark": "#37F6A6",
      "red-validation-light-dark": "#eb0000",

      "primary-gradien1-dark": "#EE3378",
      "primary-gradien2-dark": "#EE33B4",
      "secondary-gradien1-dark": "#08EFE5",
      "secondary-gradien2-dark": "#37F6A6",
      "bg-dark": "#191929",
      "component-bg-dark": "#232233",
      "component-bg-light-dark": "#302F3D",
      "component-highligted-bg-dark": "#2C2B3A",
      "divider-bg-light-dark": "#434250",
      "gray-highligted-light": "#B8B8BC",
      "shimmer-bg-dark": "#76757E",

      "table-row-divider-bg-dark-dark": "#434250",

      "primary-text-dark": "#FF2391",
      "secondary-text-dark": "#37F6A8",
      "main-text-dark": "#FFF",
      "sub-text-dark": "#76757E",
      "main-text-light": "#201F2E",
      "placeholder-text-light": "#8C8B93",
      "sub-text-light": "#8C8B93",
      "light-divider-bg-light-dark": "#E8E7E9",

      // Input
      "input-border-dark": "#353542",
      "input-text-placeholder-dark": "#76757E",
      "input-bg-dark": "#2C2B3A",
      "toggle-bg-dark": "#C7C7C7",

      "container-panel-bg-dark": "#232233",
      "container-highligted-panel-bg-dark": "#2C2B3A",

      // Side menu
      "side-menu-bg-dark": "#2D2D3B",
      "side-menu-item-selected-bg-dark": "#3F3F4C",
      "side-menu-text-selected-dark": "#FFF",
      "side-menu-text-non-selected-dark": "#96969D",

      // Search bar
      "search-bar-bg-dark": "#2C2B3A",
      "search-bar-bg-light": "#FFF",
      "search-bar-text-placeholder-dark": "#76757E",
      "search-bar-text-placeholder-light": "#8C8B93",
      "search-bar-text-dark": "#FFF",
      "search-bar-text-light": "#201F2E",
      "search-bar-border-input-dark": "#353542",
      "search-bar-border-input-light": "#E8E7E9",

      // MyBot item
      "my-bot-bg-dark": "#232233",
      "my-bot-divider-dark": "#434250",
      "my-bot-light-divider-dark": "#E8E7E9",

      // Dropdowns
      "dropdown-bg-dark": "#2C2B3A",
      "dropdown-text-hover-dark": "#96969D",
    },
    borderColors: {
      "primary-gradien1-dark": "#EE2F79",
    },
    fontFamily: {
      sans: ["Montserrat"],
      serif: ["Montserrat"],
      mono: ["Montserrat"],
      display: ["Montserrat"],
      body: ["Montserrat"],
    },
    extend: {
      boxShadow: {
        "3xl": "0 35px 50px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
