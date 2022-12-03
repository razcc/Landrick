<template>
	<header>
		<div id="contHeader">
			<!-- Logo -->
			<div class="contLogo">
				<img src="../assets/img/logo-dark.png" alt="Logo" />
			</div>

			<!-- NavBar -->
			<dir class="contNav">
				<NavBarComp
					:propsArrayLanding="propsArrayLanding"
					:propsArrayPages="propsArrayPages"
					:propsArrayDemos="propsArrayDemos"
					:propsArrayComponents="propsArrayComponents"
					:propsArrayDocs="propsArrayDocs"
				/>
			</dir>

			<!-- Acesso Componente -->
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
		propsArrayLanding: Array,
		propsArrayPages: Array,
		propsArrayDemos: Array,
		propsArrayComponents: Array,
		propsArrayDocs: Array,
	},
	data() {
		return {
			varControlloInput: false,
		};
	},
	methods: {
		funzioneEmitInput(valoreEmitInput) {
			this.varControlloInput = valoreEmitInput;
		},
	},
};
</script>

<style lang="scss" scoped>
#contHeader {
	width: 90%;
	height: 5vh;
	margin: auto;
	padding: 30px 0px;
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