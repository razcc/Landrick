<template>
	<div id="subscriptionComp">
		<div class="titleCont">
			<!-- Title -->
			<h2>Our rates for developers from landrick team</h2>

			<!-- Paragraph -->
			<p>
				Start working width <span>Landrick</span> that can provide
				everything you need to generate awareness, drive traffic,
				connect.
			</p>
		</div>

		<!-- Card Section -->
		<div class="cardCont">
			<CardComp />
		</div>

		<!-- Email SubScription -->
		<MailSubscription />
	</div>
</template>

<script>
import CardComp from "./SubscriptionFigli/CardComp.vue";
import MailSubscription from "./SubscriptionFigli/MailSubscription.vue";

export default {
	name: "SubscriptionComp",
	components: {
		CardComp,
		MailSubscription,
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
	color: rgba(149, 161, 185, 1);
}
h2 {
	font-size: 2rem;
	margin-bottom: 30px;
	color: black;
}
.dark h2 {
	color: rgb(199, 199, 199);
}
// Title Cont
.titleCont {
	width: 50%;
	margin: auto;
	text-align: center;

	p {
		font-size: 1rem;
		width: 60%;
		margin: auto;
		span {
			font-weight: bold;
		}
	}
}

// Card Cont
.cardCont {
	width: 60%;
}
</style>