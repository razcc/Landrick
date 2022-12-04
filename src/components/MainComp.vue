<template>
	<main>
		<!-- Bottono Fixed Dark Light -->
		<div class="themeContainer">
			<!-- Theme Option -->
			<div
				class="themeOption closed"
				:class="!varTheme ? 'closed' : 'opened'"
			>
				<div>Theme Option</div>
				<div>Light</div>
				<div>Dark</div>
			</div>

			<!-- Icon sole -->
			<div :class="varTheme ? 'sunOpen' : 'sunClosed'" class="sunCont">
				<div class="sun">
					<font-awesome-icon
						@click="openTheme()"
						class=""
						icon="fa-solid fa-sun"
					/>
				</div>
			</div>
		</div>

		<!-- Intro Comp -->
		<IntroComp :propsArrayCLientiFidati="propsArrayCLientiFidati" />

		<!-- Featurres Comp -->
		<FeaturesComp />

		<!-- Quickstrt Comp -->
		<QuickstartComp />
	</main>
</template>

<script>
import IntroComp from "./MainComp/IntroComp.vue";
import FeaturesComp from "./MainComp/FeaturesComp.vue";
import QuickstartComp from "./MainComp/QuickstartComp.vue";

export default {
	name: "MainComp",
	components: {
		IntroComp,
		FeaturesComp,
		QuickstartComp,
	},
	props: {
		propsArrayCLientiFidati: Array,
	},
	data() {
		return {
			varTheme: false,
			varThemeText: false,
		};
	},
	methods: {
		varThemeFunction() {
			if (!this.varTheme) {
				this.varTheme = true;
			} else {
				this.varTheme = false;
			}
		},
		openTheme() {
			if (!this.varTheme) {
				this.varTheme = true;
			} else {
				this.varTheme = false;
			}
			setTimeout(() => {
				this.varThemeText = true;
			}, 500);
		},
	},
};
</script>

<style lang="scss" scoped>
// Theme BOx Class
.closed {
	transform-origin: left;
	transform: scaleX(0);
}
.opened {
	transform-origin: left;
	transform: scaleX(1);
}

// Sun CLass
.sunClosed {
	transform: translateX(-450%);
}
.sunOpen {
	transform: translateX(0%);
}
.themeContainer {
	position: fixed;
	top: 30%;
	left: 0%;
	display: flex;
	align-items: center;

	.themeOption {
		background-color: white;
		padding: 10px 15px 10px 10px;
		font-size: 22px;
		border-radius: 0px 20px 20px 0;
		box-shadow: 0px 10px 20px rgb(100, 99, 99);
		transition: all 0.5s;
	}

	.sunCont {
		background-color: white;
		border-radius: 0px 15px 15px 0px;
		transition: all 0.5s;

		.sun {
			padding: 10px;
			animation-name: theme;
			animation-duration: 2s;
			animation-timing-function: linear;
			animation-iteration-count: infinite;

			&:hover {
				cursor: pointer;
			}
		}
	}
	// Icona sole con animazione
}

@keyframes theme {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}
</style>