/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				glow: "url('/glow.png')"
			}
		}
	},
	plugins: [],

	animation: {
		shimmer: 'shimmer 2s linear infinite'
	},
	keyframes: {
		shimmer: {
			from: {
				backgroundPosition: '0 0'
			},
			to: {
				backgroundPosition: '-200% 0'
			}
		}
	}
};
