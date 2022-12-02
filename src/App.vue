<template>
	<div id="app">
		<HeaderComp :propsNavBar="arrNavBar" />
	</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
export default {
	name: "App",
	components: {
		HeaderComp,
	},
	data() {
		return {
			// Array NAVBAR
			arrNavBar: [
				{
					name: "Home",
					link: "#",
				},
				{
					name: "Landing",
					landingPages1: [
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
					landingPages2: [
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
					landingPages3: [
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
					landingPages4: [
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
					fullDemos: [
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
				},
				{
					name: "Pages",
					arrayPages: [
						{
							name: "COMPANY",
							arrCompany: [
								{ name: "ABOUT US", link: "#" },
								{ name: "ABOUT US TWO", link: "#" },
								{ name: "SERVICES", link: "#" },
								{ name: "HISTORY", link: "#" },
								{ name: "TEAM", link: "#" },
								{ name: "PRICING", link: "#" },
							],
						},
						{
							name: "ACCOUNT",
							arrCompany: [
								{ name: "PROFILE", link: "#" },
								{ name: "MEMBERS", link: "#" },
								{ name: "WORKS", link: "#" },
								{ name: "MESSAGES", link: "#" },
								{ name: "CHAT", link: "#" },
								{ name: "PAYMENTS", link: "#" },
								{ name: "SETTING", link: "#" },
								{ name: "INVOICE", link: "#" },
							],
						},
						{
							name: "EMAIL TEMPLATE",
							arrCompany: [
								{ name: "CONFIRMATION", link: "#" },
								{ name: "RESET PASSWORD", link: "#" },
								{ name: "ALERT", link: "#" },
								{ name: "INVOICE", link: "#" },
							],
						},
						{
							name: "BLOG",
							arrCompany: [
								{ name: "BLOG GRID", link: "#" },
								{ name: "BLOG WITH SIDEBAR", link: "#" },
								{ name: "BLOG LISTING", link: "#" },
								{ name: "BLOG LIST & SIDEBAR", link: "#" },
								{ name: "BLOG DETAIL", link: "#" },
								{ name: "BLOG DETAIL 2", link: "#" },
							],
						},
						{
							name: "CASE STUDY",
							arrCompany: [
								{ name: "ALL CASES", link: "#" },
								{ name: "CASE DETAIL", link: "#" },
							],
						},
						{
							name: "COURSE DETAIL",
							link: "#",
						},
						{
							name: "AUTH PAGES",
							arrCompany: [
								{ name: "LOGIN", link: "#" },
								{ name: "SIGNUP", link: "#" },
								{ name: "RESET PASSWORD", link: "#" },
							],
						},
						{
							name: "UTILITY",
							arrCompany: [
								{ name: "TERMS OF SERVICES", link: "#" },
								{ name: "PRIVACY POLICY", link: "#" },
							],
						},
						{
							name: "SPECIAL",
							arrCompany: [
								{ name: "COMING SOON", link: "#" },
								{ name: "COMING SOON TWO", link: "#" },
								{ name: "MAINTENANCE", link: "#" },
								{ name: "ERROR", link: "#" },
								{ name: "THANK YOU", link: "#" },
							],
						},
						{
							name: "CONTACT",
							arrCompany: [
								{ name: "ABOUT DETAIL", link: "#" },
								{ name: "CONTACT ONE", link: "#" },
								{ name: "CONTACT TWO", link: "#" },
								{ name: "CONTACT THREE", link: "#" },
							],
						},
						{
							name: "MULTI LEVEL MENU",
							arrCompany: [
								{ name: "LEVEL 1.0", link: "#" },
								{ name: "LEVEL 2.0", link: "#" },
							],
						},
						{
							name: "FOOTER LAYOUT",
							link: "#",
						},
					],
				},
				{
					name: "DEMOS",
					arrDemos: [
						{
							name: "CORPORATE",
							image: "demo",
						},
						{
							name: "SHOP",
							image: "demo",
						},
						{
							name: "HELP CENTER",
							image: "demo",
						},
						{
							name: "JOB & CAREER",
							image: "demo",
						},
						{
							name: "BLOG",
							image: "demo",
						},
						{
							name: "CRYPTOCURRENCY",
							image: "demo",
						},
						{
							name: "PORTFOLIO",
							image: "demo",
						},
						{
							name: "HOSTING DOMAIN",
							image: "demo",
						},
						{
							name: "FORUMS",
							image: "demo",
						},
						{
							name: "NFT MARKETPLACE",
							image: "demo",
						},
					],
				},
				{
					name: "COMPONENTS",
					componentsList1: [
						{ name: "BUTTONS", link: "#" },
						{ name: "BADGES", link: "#" },
						{ name: "ALERT", link: "#" },
						{ name: "DROPDOWNS", link: "#" },
						{ name: "TYPOGRAPHY", link: "#" },
					],
					componentsList2: [
						{ name: "BACKGROUND", link: "#" },
						{ name: "TEXT COLOR", link: "#" },
						{ name: "ACCORDIONS", link: "#" },
						{ name: "CARDS", link: "#" },
						{ name: "TOOLTIPS & POPOVERS", link: "#" },
					],
					componentsList3: [
						{ name: "SHADOWS", link: "#" },
						{ name: "BORDER", link: "#" },
						{ name: "CAROUSEL", link: "#" },
						{ name: "FORM ELEMENTS", link: "#" },
						{ name: "BREADCRUMB", link: "#" },
					],
					componentsList4: [
						{ name: "PAGINATION", link: "#" },
						{ name: "AVATARS", link: "#" },
						{ name: "NAV TABS", link: "#" },
						{ name: "MODALS", link: "#" },
					],
					componentsList5: [
						{ name: "TABLES", link: "#" },
						{ name: "ICONS", link: "#" },
						{ name: "PROGRESSBAR", link: "#" },
						{ name: "LIGHTBOX", link: "#" },
					],
				},
				{
					name: "DOCS",
					arrDocs: [
						{ name: "DOCUMANTATION", link: "#" },
						{ name: "CHANGELOG", link: "#" },
						{ name: "WIDGET", link: "#" },
					],
				},
			],
		};
	},
};
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
}
</style>
