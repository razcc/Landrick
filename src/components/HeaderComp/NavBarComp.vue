<template>
	<div id="NavBar">
		<!-- container Home -->
		<div class="menuElementHome">
			<span>HOME</span>
		</div>

		<!-- Container Landing -->
		<div
			class="menuElementLanding"
			@mouseenter="
				(varSottoMenuLanding = true), (varControlloInputOnOFF = true)
			"
			@mouseleave="
				(varSottoMenuLanding = false), (varControlloInputOnOFF = false)
			"
		>
			<!-- titolo -->
			<span class="landingTitle">LANDING</span>

			<!-- freccia giu su -->
			<span>
				<font-awesome-icon
					class="downLanding"
					icon="fa-solid fa-chevron-down"
				/>
			</span>

			<!-- SottoMenu -->
			<div
				class="contSottoMenu"
				v-if="varSottoMenuLanding"
				@mouseleave="varSottoMenuLanding = false"
			>
				<div v-for="(elem, index) in propsArrayLanding" :key="index">
					<div v-for="(element, index) in elem" :key="index">
						<div class="sottoMenuElement">
							{{ element.name }}
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Container Pages -->
		<div
			class="menuElementPages"
			@mouseenter="varSottoMenuPages = true"
			@mouseleave="varSottoMenuPages = false"
		>
			<!-- Titolo -->
			<span class="pagesTitle">PAGES</span>

			<!-- Freccia giu su -->
			<span>
				<font-awesome-icon
					class="downLanding"
					icon="fa-solid fa-chevron-down"
				/>
			</span>

			<!-- SottoMEnu -->
			<div
				v-if="varSottoMenuPages"
				class="contSottoMenu"
				@mouseleave="varSottoMenuPages = false"
			>
				<div v-for="(elem, index) in propsArrayPages" :key="index">
					<div class="sottoMenuElement">
						{{ elem }}
					</div>
				</div>
			</div>
		</div>

		<!-- Container demos -->
		<div
			class="menuElementDemos"
			@mouseenter="varSottoMenuDemos = true"
			@mouseleave="varSottoMenuDemos = false"
		>
			<!-- Title -->
			<span class="pagesTitle">DEMOS</span>

			<!-- freccia giu su -->
			<span>
				<font-awesome-icon
					class="downLanding"
					icon="fa-solid fa-chevron-down"
				/>
			</span>

			<!-- SottoMenu -->
			<div
				v-if="varSottoMenuDemos"
				class="conSottoMenu"
				@mouseleave="varSottoMenuDemos = false"
			>
				<div
					class="demoElement"
					v-for="(elem, index) in propsArrayDemos"
					:key="index"
				>
					<img :src="getImgUrl(elem.image)" alt="Demos" />
					<div>
						{{ elem.name }}
					</div>
				</div>
			</div>
		</div>

		<!-- Container COMPONENTS -->
		<div
			class="menuElementComponents"
			@mouseenter="varSottoMenuComponents = true"
			@mouseleave="varSottoMenuComponents = false"
		>
			<!-- Titles -->
			<span class="pagesTitle">COMPONENTS</span>

			<!-- Freccia giu su -->
			<span>
				<font-awesome-icon
					class="downLanding"
					icon="fa-solid fa-chevron-down"
				/>
			</span>

			<!-- SottoMenu -->
			<div
				class="sottomenu"
				v-if="varSottoMenuComponents"
				@mouseleave="varSottoMenuComponents = false"
			>
				<div v-for="(elem, index) in propsArrayComponents" :key="index">
					<div
						class="sottoMenuElement"
						v-for="(element, index) in elem"
						:key="index"
					>
						{{ element.name }}
					</div>
				</div>
			</div>
		</div>

		<!-- container Docs -->
		<div
			class="menuElementDocs"
			@mouseenter="varSottoMenuDocs = true"
			@mouseleave="varSottoMenuDocs = false"
		>
			<!-- title -->
			<span class="title">DOCS</span>

			<!-- freccia su giu -->
			<span>
				<font-awesome-icon
					class="downLanding"
					icon="fa-solid fa-chevron-down"
				/>
			</span>

			<!-- SottoMenu -->
			<div
				class="contSottoMenu"
				v-if="varSottoMenuDocs"
				@mouseleave="varSottoMenuDocs = false"
			>
				<div v-for="(elem, index) in propsArrayDocs" :key="index">
					<div
						class="sottoMenuElement"
						v-for="(element, index) in elem"
						:key="index"
					>
						{{ element.name }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBarComp",
	props: {
		propsArrayLanding: Array,
		propsArrayPages: Array,
		propsArrayDemos: Array,
		propsArrayComponents: Array,
		propsArrayDocs: Array,
	},
	data() {
		return {
			varSottoMenuLanding: false,
			varSottoMenuPages: false,
			varSottoMenuDemos: false,
			varSottoMenuComponents: false,
			varSottoMenuDocs: false,
		};
	},
	methods: {
		// Url image demo
		getImgUrl(elem) {
			return require("../../assets/demosImg/" + elem);
		},
	},
};
</script>

<style lang="scss" scoped>
#NavBar {
	display: flex;
	gap: 30px;
	align-items: center;
	text-transform: uppercase;
	position: relative;

	// Menu Home
	.menuElementHome {
		font-size: 1.5rem;
		font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
			sans-serif;
		font-weight: bold;
		&:hover {
			cursor: pointer;
			text-decoration: underline;
			text-decoration-thickness: 3px;
		}
	}

	// Menu landing
	.menuElementLanding {
		// Landing Title
		.landingTitle {
			font-size: 1.5rem;
			font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
				sans-serif;
			font-weight: bold;
		}

		// Freccia Giu
		.downLanding {
			margin-left: 5px;
			font-size: 16px;
			transition: all 0.5s;
		}

		// Freccia Su al hover
		&:hover .downLanding {
			transform: rotate(180deg);
		}

		&:hover {
			cursor: pointer;
			text-decoration: underline;
			text-decoration-thickness: 3px;
		}

		// SottoMenu
		.contSottoMenu {
			position: absolute;
			top: 50%;
			left: -50%;
			width: 200%;
			gap: 80px;
			display: flex;
			justify-content: center;
			box-shadow: 5px 10px 10px gray;
			padding: 40px 20px;
			// Elementi del sottoMenu
			.sottoMenuElement {
				margin-bottom: 15px;
				font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
					sans-serif;
				cursor: pointer;
				transition: all 1s;
				padding: 10px;

				&:hover {
					transform: scale(1.1);
					box-shadow: 5px 5px 10px;
					color: rgba(137, 136, 136, 1);
				}
			}
		}
	}

	// Menu Pages
	.menuElementPages {
		// Titolo Pages
		.pagesTitle {
			font-size: 1.5rem;
			font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
				sans-serif;
			font-weight: bold;
		}

		// Freccia Giu
		.downLanding {
			margin-left: 5px;
			font-size: 16px;
			transition: all 0.5s;
		}

		// Freccia Su al hover
		&:hover .downLanding {
			transform: rotate(180deg);
		}
		&:hover {
			cursor: pointer;
			text-decoration: underline;
			text-decoration-thickness: 3px;
		}

		// SottoMenu
		.contSottoMenu {
			position: absolute;
			top: 50%;
			gap: 20px;
			display: flex;
			flex-direction: column;
			box-shadow: 5px 10px 10px gray;
			padding: 50px 30px;

			// Elementi del sottoMenu
			.sottoMenuElement {
				margin-bottom: 15px;
				font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
					sans-serif;
				cursor: pointer;
				transition: all 1s;
				padding: 10px;
				&:hover {
					transform: scale(1.1);
					box-shadow: 5px 5px 10px;
					color: rgba(137, 136, 136, 1);
				}
			}
		}
	}

	// Menu demos
	.menuElementDemos {
		position: relative;
		// Titolo Pages
		.pagesTitle {
			font-size: 1.5rem;
			font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
				sans-serif;
			font-weight: bold;
		}

		// Freccia Giu
		.downLanding {
			margin-left: 5px;
			font-size: 16px;
			transition: all 0.5s;
		}

		// Freccia Su al hover
		&:hover .downLanding {
			transform: rotate(180deg);
		}

		&:hover {
			cursor: pointer;
			text-decoration: underline;
			text-decoration-thickness: 3px;
		}

		// SottoMenu
		.conSottoMenu {
			position: absolute;
			top: 50%;
			left: -700%;
			display: flex;
			text-align: center;
			align-items: center;
			flex-wrap: wrap;
			width: 1500%;
			box-shadow: 5px 10px 10px gray;
			padding-top: 50px;

			img {
				margin-bottom: 20px;
			}

			.demoElement {
				width: calc(100% / 5);
				margin-bottom: 60px;
				transition: all 0.7s;

				&:hover {
					transform: scale(1.2);
					box-shadow: 5px 10px 10px gray;
				}
			}
		}
	}

	// Menu Components
	.menuElementComponents {
		position: relative;
		// Titolo Pages
		.pagesTitle {
			font-size: 1.5rem;
			font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
				sans-serif;
			font-weight: bold;
		}

		// Freccia Giu
		.downLanding {
			margin-left: 5px;
			font-size: 16px;
			transition: all 0.5s;
		}

		// Freccia Su al hover
		&:hover .downLanding {
			transform: rotate(180deg);
		}

		&:hover {
			cursor: pointer;
			text-decoration: underline;
			text-decoration-thickness: 3px;
		}

		// SottoMenu
		.sottomenu {
			position: absolute;
			top: 50%;
			left: -200%;
			box-shadow: 5px 10px 10px gray;
			display: flex;
			gap: 60px;
			padding: 50px 20px;

			// Elementi del sottoMenu
			.sottoMenuElement {
				margin-bottom: 5px;
				font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
					sans-serif;
				cursor: pointer;
				transition: all 1s;
				padding: 10px;

				&:hover {
					transform: scale(1.1);
					box-shadow: 5px 5px 10px;
					color: rgba(137, 136, 136, 1);
				}
			}
		}
	}

	// Menu Docs
	.menuElementDocs {
		// Landing Title
		.title {
			font-size: 1.5rem;
			font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
				sans-serif;
			font-weight: bold;
		}

		// Freccia Giu
		.downLanding {
			margin-left: 5px;
			font-size: 16px;
			transition: all 0.5s;
		}

		// Freccia Su al hover
		&:hover .downLanding {
			transform: rotate(180deg);
		}

		&:hover {
			cursor: pointer;
			text-decoration: underline;
			text-decoration-thickness: 3px;
		}

		// SottoMenu
		.contSottoMenu {
			position: absolute;
			top: 50%;
			box-shadow: 5px 10px 10px gray;
			padding: 40px 10px 10px 10px;

			// Elementi del sottoMenu
			.sottoMenuElement {
				margin-bottom: 10px;
				font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
					sans-serif;
				cursor: pointer;
				transition: all 1s;
				padding: 10px;

				&:hover {
					transform: scale(1.1);
					box-shadow: 5px 5px 10px;
					color: rgba(137, 136, 136, 1);
				}
			}
		}
	}
}
</style>