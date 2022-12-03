<template>
	<main>
		<!-- Intro Comp -->
		<IntroComp :propsArrayCLientiFidati="propsArrayCLientiFidati" />
	</main>
</template>

<script>
import IntroComp from "./MainComp/IntroComp.vue";

export default {
	name: "MainComp",
	components: {
		IntroComp,
	},
	props: {
		propsArrayCLientiFidati: Array,
	},
};
</script>

<style lang="scss" scoped>
</style>