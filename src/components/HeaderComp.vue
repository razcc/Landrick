<template>
	<header>
		<div id="contHeader">
			<!-- Logo -->
			<div class="contLogo">
				<img src="../assets/img/logo-dark.png" alt="Logo" />
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
	width: 80%;
	height: 5vh;
	margin: auto;
	padding-top: 30px;
	margin-bottom: 20px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;

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