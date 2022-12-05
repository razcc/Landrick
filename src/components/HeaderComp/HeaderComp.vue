<template>
	<header id="contHeader">
		<!-- Logo -->
		<div class="contLogo">
			<img src="../../assets/img/logo-dark.png" alt="Logo" />
		</div>

		<!-- NavBar Menu-->
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
	</header>
</template>

<script>
import NavBarComp from "./NavBarComp.vue";
import AccessOption from "./AccessOption.vue";

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
	height: 5vh;
	width: 100%;
	margin: auto;
	padding: 20px 10px;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	background: rgb(207, 212, 221);
	background: linear-gradient(
		0deg,
		rgb(255, 255, 255) 0%,
		rgba(203, 210, 224, 0.719) 50%,
		rgb(255, 255, 255) 100%
	);

	.contNav {
		height: 100%;
	}
	// Logo
	.contLogo {
		height: 100%;
		img {
			height: 100%;
		}
	}
}
</style>