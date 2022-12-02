<template>
	<header>
		<div id="contHeader">
			<img src="" alt="Logo" />

			<NavBarComp />
			<AccessOption />
		</div>
	</header>
</template>

<script>
import NavBarComp from "./HeaderComp/NavBarComp.vue";
import AccessOption from "./HeaderComp/AccessOption.vue";

export default {
	name: "HeaderComp",
	components: {
		NavBarComp,
		AccessOption,
	},
};
</script>

<style lang="scss" scoped>
#contHeader {
	width: 70%;
	margin: auto;
}
</style>