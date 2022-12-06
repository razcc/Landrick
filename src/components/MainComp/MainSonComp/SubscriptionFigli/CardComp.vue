<template>
	<div id="cardComp">
		<!-- Single Card -->
		<div
			class="card"
			v-for="(elem, index) in propsSubscriptionInfo"
			:key="index"
		>
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
	props: {
		propsSubscriptionInfo: Array,
	},
};
</script>

<style lang="scss" scoped>
#cardComp {
	display: flex;
	justify-content: space-between;
	gap: 50px;
	.card {
		display: flex;
		flex-direction: column;
		gap: 15px;
		width: calc(100% / 3);
		padding: 20px;
		border: 1px solid rgba(145, 143, 143, 0.562);
		border-radius: 15px;
		box-shadow: 2px 10px 7px grey;

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
</style>