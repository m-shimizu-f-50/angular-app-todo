/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/app.component.html",
    "./src/app/components/header/header.component.html",
    "./src/app/components/footer/footer.component.html",
    "./src/app/pages/not-found/not-found.component.html",
    "./src/app/pages/todo/todo-list/todo-list.component.html",
    "./src/app/pages/todo/todo-add/todo-add.component.html",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
