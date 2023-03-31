/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#7367F0",
			},
			fontFamily: {
				Montserrat: "'Montserrat-web'",
			},
		},
	},
	plugins: [],
};
