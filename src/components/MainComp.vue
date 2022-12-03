<template>
	<main>
		<!-- Intro Comp -->
		<IntroComp :propsArrayCLientiFidati="propsArrayCLientiFidati" />

		<!-- Featurres Comp -->
		<FeaturesComp />
	</main>
</template>

<script>
import IntroComp from "./MainComp/IntroComp.vue";
import FeaturesComp from "./MainComp/FeaturesComp.vue";

export default {
	name: "MainComp",
	components: {
		IntroComp,
		FeaturesComp,
	},
	props: {
		propsArrayCLientiFidati: Array,
	},
};
</script>

<style lang="scss" scoped>
</style>