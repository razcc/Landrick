<template>
	<main>
		<!-- Intro Comp -->
		<IntroComp :propsArrayCLientiFidati="propsArrayCLientiFidati" />

		<!-- Featurres Comp -->
		<FeaturesComp />

		<!-- Quickstrt Comp -->
		<QuickstartComp />

		<!-- Info Comp -->
		<InfoComp />

		<!-- Subscription Comp -->
		<SubscriptionComp />
	</main>
</template>

<script>
import IntroComp from "./MainSonComp/IntroComp.vue";
import FeaturesComp from "./MainSonComp/FeaturesComp.vue";
import QuickstartComp from "./MainSonComp/QuickstartComp.vue";
import InfoComp from "./MainSonComp/InfoComp.vue";
import SubscriptionComp from "./MainSonComp/SubscriptionComp.vue";

export default {
	name: "MainComp",
	components: {
		IntroComp,
		FeaturesComp,
		QuickstartComp,
		InfoComp,
		SubscriptionComp,
	},
	props: {
		propsArrayCLientiFidati: Array,
	},
};
</script>

<style lang="scss" scoped>
</style>