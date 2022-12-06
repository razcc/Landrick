<template>
	<div class="app" :class="mode">
		<!-- Bottono Fixed Dark Light -->
		<div class="themeContainer">
			<!-- Theme Option -->
			<div
				:class="varTheme ? 'opened themeOption' : 'closed themeOption'"
			>
				<div class="themeTitle">Theme Option</div>
				<div class="themeLight" @click="lightModeFunction()">Light</div>
				<div class="themeDark" @click="darkmodeFunction()">Dark</div>
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

		<!-- Header COmp -->
		<HeaderComp
			:propsArrayLanding="arrayLanding"
			:propsArrayPages="arrayPages"
			:propsArrayDemos="arrayDemos"
			:propsArrayComponents="arrayComponents"
			:propsArrayDocs="arrayDocs"
		/>

		<!-- Main Comp -->
		<MainComp :propsArrayCLientiFidati="arrayCLientiFidati" />

		<!-- Footer Comp -->
		<FooterComp />
	</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp/HeaderComp.vue";
import MainComp from "./components/MainComp/MainComp.vue";
import FooterComp from "./components/FooterComp/FooterComp.vue";

export default {
	name: "App",
	components: {
		HeaderComp,
		MainComp,
		FooterComp,
	},
	data() {
		return {
			// theme
			varTheme: false,
			varThemeText: false,
			mode: "light",
			// Array NAVBAR
			arrayLanding: [
				[
					{ name: "SASS", link: "#" },
					{ name: "CLASSIC SASS", link: "#" },
					{ name: "AGENCY", link: "#" },
					{ name: "APPLICATION", link: "#" },
					{ name: "CLASSIC APPLICATION", link: "#" },
					{ name: "STUDIO", link: "#" },
					{ name: "MARKETING", link: "#" },
					{ name: "ENTERPRISE", link: "#" },
					{ name: "SERVICE", link: "#" },
					{ name: "PAYMENTS", link: "#" },
					{ name: "IT SOLUTION", link: "#" },
					{ name: "IT SOLUTION TWO", link: "#" },
				],
				[
					{ name: "DEVELOPER", link: "#" },
					{ name: "SEO AGENCY", link: "#" },
					{ name: "HOSPITAL", link: "#" },
					{ name: "COWORKING", link: "#" },
					{ name: "BUSINESS", link: "#" },
					{ name: "FINANCE", link: "#" },
					{ name: "MODERN BUSINESS", link: "#" },
					{ name: "DELIVERY & LOGISTICS", link: "#" },
					{ name: "SOCIAL MEDIA", link: "#" },
					{ name: "DIGITAL AGENCY", link: "#" },
					{ name: "COSTOMER", link: "#" },
					{ name: "SOFTWARE", link: "#" },
				],
				[
					{ name: "HOTEL", link: "#" },
					{ name: "CONSTRUCTION", link: "#" },
					{ name: "REAL ESTATE", link: "#" },
					{ name: "VIDEO CONFERENCE", link: "#" },
					{ name: "BLOCK CHAIN", link: "#" },
					{ name: "CRYPTOCURRENCY TWO", link: "#" },
					{ name: "INTEGRATOPN", link: "#" },
					{ name: "TASK MANAGMENT", link: "#" },
					{ name: "EMAIL INBOX", link: "#" },
					{ name: "TRAVEL", link: "#" },
					{ name: "COURSE", link: "#" },
					{ name: "ONLINE LEARNING", link: "#" },
				],
				[
					{ name: "INSURANCE", link: "#" },
					{ name: "PRODUCT", link: "#" },
					{ name: "CAR RIDE", link: "#" },
					{ name: "LANDING ONE", link: "#" },
					{ name: "LANDING TWO", link: "#" },
					{ name: "LANDING THREE", link: "#" },
					{ name: "LANDING FOUR", link: "#" },
					{ name: "PERSONAL", link: "#" },
					{ name: "FREELANCE", link: "#" },
					{ name: "EVENT", link: "#" },
					{ name: "E-BOOK", link: "#" },
					{ name: "SASS", link: "#" },
				],
				[
					{ name: "CORPORATE", link: "#" },
					{ name: "CRYPTOCURRENCY", link: "#" },
					{ name: "SHOP", link: "#" },
					{ name: "PORTFOLIO", link: "#" },
					{ name: "HELP CENTER", link: "#" },
					{ name: "HOSTING & DOMAIN", link: "#" },
					{ name: "JOBS & CAREERS", link: "#" },
					{ name: "FORUMS", link: "#" },
					{ name: "BLOG OR NEWS", link: "#" },
					{ name: "NFT MARKETPLACE", link: "#" },
				],
			],
			arrayPages: [
				"COMPANY",
				"ACCOUNT",
				"EMAIL TEMPLATE",
				"BLOG",
				"CASE STUDY",
				"COURSE DETAIL",
				"AUTH PAGES",
				"UTILITY",
				"SPECIAL",
				"CONTACT",
				"MULTI LEVEL MENU",
				"FOOTER LAYOUTS",
			],
			arrayDemos: [
				{
					name: "CORPORATE",
					image: "demo0.png",
				},
				{
					name: "SHOP",
					image: "demo1.png",
				},
				{
					name: "HELP CENTER",
					image: "demo2.png",
				},
				{
					name: "JOB & CAREER",
					image: "demo3.png",
				},
				{
					name: "BLOG",
					image: "demo4.png",
				},
				{
					name: "CRYPTOCURRENCY",
					image: "demo5.png",
				},
				{
					name: "PORTFOLIO",
					image: "demo6.png",
				},
				{
					name: "HOSTING & DOMAIN",
					image: "demo7.png",
				},
				{
					name: "FORUMS",
					image: "demo8.png",
				},
				{
					name: "NFT MARKETPLACE",
					image: "demo9.png",
				},
			],
			arrayComponents: [
				[
					{ name: "BUTTONS", link: "#" },
					{ name: "BADGES", link: "#" },
					{ name: "ALERT", link: "#" },
					{ name: "DROPDOWNS", link: "#" },
					{ name: "TYPOGRAPHY", link: "#" },
				],
				[
					{ name: "BACKGROUND", link: "#" },
					{ name: "TEXT COLOR", link: "#" },
					{ name: "ACCORDIONS", link: "#" },
					{ name: "CARD", link: "#" },
					{ name: "TOOLTIPS & POPOVERS", link: "#" },
				],
				[
					{ name: "SHADOW", link: "#" },
					{ name: "BORDER", link: "#" },
					{ name: "CAROUSEL", link: "#" },
					{ name: "FORM ELEMENTS", link: "#" },
					{ name: "BREADCRUMB", link: "#" },
				],
				[
					{ name: "PAGINATION", link: "#" },
					{ name: "AVATARS", link: "#" },
					{ name: "NAV TAB", link: "#" },
					{ name: "MODALS", link: "#" },
				],
				[
					{ name: "TABLES", link: "#" },
					{ name: "ICONS", link: "#" },
					{ name: "PROGRESSBAR", link: "#" },
					{ name: "LIGHTBOX", link: "#" },
				],
			],
			arrayDocs: [
				[
					{ name: "DOCUMANTATION", link: "#" },
					{ name: "CHANGELOG", link: "#" },
					{ name: "WIDGET", link: "#" },
				],
			],

			// Array Aziende Clienti Intro Comp
			arrayCLientiFidati: [
				"amazon.svg",
				"google.svg",
				"lenovo.svg",
				"paypal.svg",
				"shopify.svg",
				"spotify.svg",
			],
		};
	},
	methods: {
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
		lightModeFunction() {
			this.mode = "light";
		},
		darkmodeFunction() {
			this.mode = "dark";
		},
	},
};
</script>

<style lang="scss">
@import "./Mixins/mixinThemeBOX.scss";
// General
* {
	padding: 0;
	margin: 0;
}

// Mixin Proprieta del BOX tema
@include themeBox;
</style>
