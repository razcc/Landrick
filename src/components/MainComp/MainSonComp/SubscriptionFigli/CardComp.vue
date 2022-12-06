<template>
	<div id="cardComp">
		<!-- Single Card -->
		<div
			class="card"
			@mouseenter="hoverIn(index)"
			:class="{ hoverEffect: elem.hover }"
			@mouseleave="hoverOut(index)"
			v-for="(elem, index) in subscriptionInfo"
			:key="index"
		>
			<!-- Beast Deal Element -->
			<div v-if="elem.bestDeal" class="bestDeal">
				<span>Beast</span>
			</div>

			<!-- Tipo Abbonamento -->
			<div class="typeCont">
				<div class="type">
					{{ elem.subscriptions }}
				</div>
			</div>

			<!-- Costo -->
			<div class="cost">
				{{ elem.cost }}
			</div>

			<!-- tipo di pagamento -->
			<div class="payment">
				{{ elem.payment }}
			</div>

			<!-- Descrizione -->
			<div class="description">
				{{ elem.description }}
			</div>

			<hr />

			<!-- Features -->
			<div
				class="features"
				v-for="(element, index) in elem.arrFunctionality"
				:key="index"
			>
				<!-- Check -->
				<span v-if="element.state">
					<font-awesome-icon icon="fa-solid fa-check" />
				</span>
				<!-- Cross -->
				<span v-else-if="!element.state"
					><font-awesome-icon icon="fa-solid fa-x"
				/></span>

				<!-- Single Feature Name -->
				<span class="featuresName">{{ element.name }}</span>
			</div>

			<!-- Bottone -->
			<button>Buy now</button>

			<div class="creditCard">
				<span>*No credit card required</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardComp",
	props: {},
	data() {
		return {
			subscriptionInfo: [
				{
					subscriptions: "Basic",
					cost: "$9.00",
					payment: "Per Month",
					description:
						"All the basics for business that are just getting started.",
					arrFunctionality: [
						{
							name: "Full Access",
							state: true,
						},
						{
							name: "Enhanced Security",
							state: true,
						},
						{
							name: "Spurce FIles",
							state: true,
						},
						{
							name: "1 Domain Free",
							state: true,
						},
						{
							name: "Enhanced Security",
							state: true,
						},
					],
					hover: false,
					bestDeal: false,
				},
				{
					subscriptions: "Business",
					cost: "$39.00",
					payment: "Per Month",
					description:
						"Better for growing business that want more customers.",
					arrFunctionality: [
						{
							name: "Full Access",
							state: true,
						},
						{
							name: "Enhanced Security",
							state: true,
						},
						{
							name: "Spurce FIles",
							state: true,
						},
						{
							name: "1 Domain Free",
							state: true,
						},
						{
							name: "Enhanced Security",
							state: true,
						},
					],
					hover: false,
					bestDeal: true,
				},
				{
					subscriptions: "Enterprise",
					cost: "$79.00",
					payment: "Per Month",
					description:
						"Advanced features for pros who need more customization.",
					arrFunctionality: [
						{
							name: "Full Access",
							state: true,
						},
						{
							name: "Enhanced Security",
							state: true,
						},
						{
							name: "Spurce FIles",
							state: true,
						},
						{
							name: "1 Domain Free",
							state: true,
						},
						{
							name: "Enhanced Security",
							state: true,
						},
					],
					hover: false,
					bestDeal: false,
				},
			],
		};
	},
	methods: {
		hoverIn(index) {
			console.log(index);
			this.subscriptionInfo.forEach((elem) => {
				elem.hover = false;
			});
			this.subscriptionInfo[index].hover = true;
			console.log(this.subscriptionInfo[index].hover);
		},
		hoverOut(index) {
			this.subscriptionInfo[index].hover = false;
			console.log(this.subscriptionInfo[index].hover);

			this.subscriptionInfo.forEach((elem) => {
				if (elem.bestDeal) {
					elem.hover = true;
				}
			});
		},
	},
	mounted() {
		this.subscriptionInfo.forEach((elem) => {
			if (elem.bestDeal) {
				elem.hover = true;
			}
		});
	},
};
</script>

<style lang="scss" scoped>
#cardComp {
	display: flex;
	justify-content: space-between;
	gap: 50px;
	margin-top: 50px;
	.card {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: calc(100% / 3);
		padding: 20px;
		border: 1px solid rgba(145, 143, 143, 0.562);
		border-radius: 15px;
		box-shadow: 1px 8px 7px gray;
		transition: all 1s;

		position: relative;
		overflow: hidden;

		//  Beast Deal Element
		.bestDeal {
			position: absolute;
			right: -10%;
			top: 20px;
			width: 40%;
			transform: rotate(45deg);
			background-color: rgba(241, 116, 37, 1);
			color: white;
			font-weight: bold;
			text-align: center;
			padding: 5px;
		}

		// Nome Abbonamento
		.type {
			background-color: rgb(160, 180, 247);
			border: 1px solid rgb(127, 156, 243);
			display: inline-block;
			padding: 7px 20px;
			border-radius: 25px;
			color: rgb(29, 62, 168);
			font-weight: 900;
		}

		// Costo
		.cost {
			font-size: 1.8rem;
			font-weight: 600;
			font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
				sans-serif;
		}

		// Pagamento
		.payment,
		.creditCard {
			color: rgb(153, 164, 187);
		}

		// Descrizione
		.description {
			font-size: 1.1rem;
			font-family: "Times New Roman", Times, serif;
			color: rgb(115, 120, 139);
		}

		// Features
		.features {
			// Check
			.fa-check {
				color: blue;
				border: 2px solid blue;
				border-radius: 50%;
				padding: 2px;
				font-size: 0.7rem;
				margin-right: 10px;
			}

			// Cross
			.fa-x {
				color: rgb(161, 6, 6);
				border: 2px solid rgb(161, 6, 6);
				border-radius: 50%;
				padding: 2px;
				font-size: 0.7rem;
				margin-right: 10px;
			}

			// Features Name
			.featuresName {
				color: rgb(115, 120, 139);
				font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
					Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
					"Helvetica Neue", sans-serif;
				font-weight: 500;
				text-transform: capitalize;
			}
		}

		// Bottone
		button {
			border: none;
			border-radius: 10px;
			background-color: rgba(47, 85, 212, 1);
			font-size: 1.1rem;
			margin-top: 20px;
			padding: 10px;
			color: white;
			font-weight: bold;
			font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
				sans-serif;
		}
	}
}

// EfettiHover Card
.hoverEffect {
	transform: scale(1.05) translateY(-15px);
	box-shadow: 1px 8px 7px blue !important;
}
</style>