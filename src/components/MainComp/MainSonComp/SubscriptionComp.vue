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
			<CardComp :propsSubscriptionInfo="subscriptionInfo" />
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
				},
			],
		};
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