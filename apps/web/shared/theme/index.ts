const colors = {
	primary: "#b0b3b8",
	secondary: "#65676b",
};

const size = {
	"94p": "94%",
	100: "25rem",
	110: "28rem",
	120: "37.5rem",
};

const backgroundColor = {
	primary: "#f0f2f5",
	secondary: "#e4e6eb",
	tertiary: "#fff",
	dark: {
		primary: "#2d3250",
		secondary: "#424769",
		tertiary: "#7077a1",
	},
};

const boxShadow = {
	primary: "1px 1px 3px 0 rgb(0,0,0, 25%)",
	secondary: "0 1px 7px 0 rgb(149,149,149, 25%)",
};

const backgroundImage = {
	"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
	"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
};

const height = {
	...size,
};

const maxHeight = {
	...height,
};

const minHeight = {
	...height,
};

const width = {
	...size,
};

const maxWidth = {
	...width,
};

const minWidth = {
	...width,
};

export { colors, boxShadow, height, maxHeight, minHeight, width, maxWidth, minWidth, backgroundColor, backgroundImage };
