<template>
	<main>
		<!-- Bottono Fixed Dark Light -->
		<div class="themeContainer">
			<!-- Theme Option -->
			<div
				:class="varTheme ? 'opened themeOption' : 'closed themeOption'"
			>
				<div class="themeTitle">Theme Option</div>
				<div class="themeLight">Light</div>
				<div class="themeDark">Dark</div>
			</div>

			<!-- Icon sole -->
			<div
				:class="varTheme ? 'sunOpen sunCont' : 'sunClosed sunCont'"
				@click="openTheme()"
			>
				<div class="sun">
					<font-awesome-icon class="" icon="fa-solid fa-sun" />
				</div>
			</div>
		</div>

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
	transform: translateX(-550%);
}
.sunOpen {
	transform: translateX(0%);
}

// Container Theme
.themeContainer {
	position: fixed;
	top: 30%;
	left: 0%;
	display: flex;
	align-items: center;

	// Contenitore Theme option
	.themeOption {
		background-color: rgba(234, 242, 248, 0.521);
		font-size: 22px;
		border-radius: 0px 20px 20px 0;
		box-shadow: 0px 10px 20px rgb(100, 99, 99);
		transition: all 0.5s;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;

		// Titoo them box
		.themeTitle {
			padding: 10px 35px;
		}

		// Tema Chiaro
		.themeLight {
			margin-top: 20px;
			margin-bottom: 20px;
			padding: 10px 25px;
			text-align: center;
			width: 60%;
			border: 1px solid rgba(128, 128, 128, 0.13);
			border-radius: 5px;
			background-color: rgba(155, 155, 155, 0.055);
			&:hover {
				background-color: rgba(155, 155, 155, 0.15);
			}
		}

		// tema Scuro
		.themeDark {
			padding: 10px 25px;
			margin-bottom: 20px;
			text-align: center;
			width: 60%;
			border: 1px solid rgba(12, 3, 133, 0.384);
			border-radius: 5px;
			background-color: rgba(18, 20, 155, 0.541);
			&:hover {
				background-color: rgba(1, 14, 133, 0.555);
			}
		}
	}

	// Contenitore Sun
	.sunCont {
		background-color: white;
		border-radius: 0px 15px 15px 0px;
		transition: all 0.5s;

		// Sun
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