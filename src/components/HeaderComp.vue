<template>
	<header>
		<div id="contHeader">
			<div class="contLogo">
				<img src="../assets/img/logo-dark.png" alt="Logo" />
			</div>

			<dir class="contNav">
				<NavBarComp :propsNavBar="propsNavBar" />
			</dir>

			<div class="contAcces">
				<AccessOption />
			</div>
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
	props: {
		propsNavBar: Array,
	},
};
</script>

<style lang="scss" scoped>
#contHeader {
	width: 90%;
	height: 5vh;
	margin: auto;
	padding: 20px 0px;
	display: flex;
	justify-content: space-around;
	align-items: center;

	.contLogo {
		height: 100%;
	}

	.contNav,
	.contAcces {
		height: 100%;
		display: flex;
	}
	img {
		height: 100%;
	}
}
</style>