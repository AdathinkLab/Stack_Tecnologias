const app = new Vue({
	el: '#app',
	data: {
		stacks: {},
		printableStacks: {},
	},
	methods: {
		getStacks: async function () {
			let data = await fetch('./stacks.json');
			this.stacks = await data.json();
		},
		printStacks: function () {
			this.printableStacks = Object.entries(this.stacks['tecnologias']).map(
				([, value]) => {
                    const { editores, ruta, nombreCompleto, imagen } = value;
					return { editores, ruta, nombreCompleto, imagen };
				}
			);
			console.log(this.printableStacks);
		},
	},
	created: async function () {
		await this.getStacks();
		await this.printStacks();
	},
});