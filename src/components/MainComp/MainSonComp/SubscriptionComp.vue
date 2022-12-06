<template>
	<div id="subscriptionComp">
		<div class="titleCont">
			<!-- Title -->
			<h1>Our rates for developers from landrick team</h1>

			<!-- Paragraph -->
			<p>
				Start working width <span>Landrick</span> that can provide
				everything you need to generate awareness, drive traffic,
				connect.
			</p>
		</div>

		<div class="cardCont">
			<!-- Card Section -->
			<CardComp />
		</div>
	</div>
</template>

<script>
import CardComp from "./SubscriptionFigli/CardComp.vue";

export default {
	name: "SubscriptionComp",
	components: {
		CardComp,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
#subscriptionComp {
	margin-top: 5%;
	display: flex;
	flex-direction: column;
	gap: 40px;
	align-items: center;

	// Title Cont
	.titleCont {
		width: 50%;
		margin: auto;
		text-align: center;
		h1 {
			margin-bottom: 30px;
		}
		p {
			font-size: 1.2rem;
			width: 60%;
			margin: auto;
			color: rgba(149, 161, 185, 1);
			span {
				color: rgba(47, 85, 212, 1);
				font-weight: bold;
			}
		}
	}

	// Card Cont
	.cardCont {
		width: 60%;
	}
}
</style>