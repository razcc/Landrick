<template>
	<header id="contHeader">
		<!-- Logo -->
		<div class="contLogo">
			<!-- Logo Scuro -->
			<img
				v-if="mode == 'light'"
				src="../../assets/img/logo-dark.png"
				alt="Logo"
			/>
			<!-- Logo Bianco -->
			<img else src="../../assets/img/logo-light.png" alt="Logo" />
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
			<AccessOption :mode="mode" />
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
		mode: String,
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
	padding: 20px 10px;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background: white;
	border-bottom: 1px solid white;
}
.dark #contHeader {
	background: rgba(28, 40, 54, 1);
	border-bottom: 1px solid rgb(32, 52, 75);
}
.contNav {
	height: 100%;
}
// Logo
.contLogo {
	height: 100%;
	img {
		height: 70%;
	}
}
</style>