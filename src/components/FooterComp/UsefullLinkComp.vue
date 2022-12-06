<template>
	<div id="linkComp">
		<!-- CompanyLink -->
		<div class="companyLinks">
			<!-- Titolo -->
			<h2>Company</h2>

			<!-- Link Ciclato -->
			<div
				class="link"
				v-for="(elem, index) in arrLinks.companyLinks"
				:key="index"
			>
				<span>
					<font-awesome-icon icon="fa-solid fa-chevron-right" />
				</span>
				<span>{{ elem.name }}</span>
			</div>
		</div>

		<!-- Usefull Links -->
		<div class="usefullLinks">
			<!-- Titolo -->
			<h2>Usefull Links</h2>

			<!-- Link Ciclato -->
			<div
				class="link"
				v-for="(elem, index) in arrLinks.usefullLinks"
				:key="index"
			>
				<span>
					<font-awesome-icon icon="fa-solid fa-chevron-right" />
				</span>
				<span>{{ elem.name }}</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UsefullLinkComp",
	data() {
		return {
			arrLinks: {
				companyLinks: [
					{
						name: "About us",
						link: "#",
					},
					{
						name: "Services",
						link: "#",
					},
					{
						name: "Team",
						link: "#",
					},
					{
						name: "Pricing",
						link: "#",
					},
					{
						name: "Project",
						link: "#",
					},
					{
						name: "Careers",
						link: "#",
					},
					{
						name: "Blog",
						link: "#",
					},
					{
						name: "Login",
						link: "#",
					},
				],

				usefullLinks: [
					{
						name: "Terms of Services",
						link: "#",
					},
					{
						name: "Privacy Policy",
						link: "#",
					},
					{
						name: "Documentation",
						link: "#",
					},
					{
						name: "Chanelog",
						link: "#",
					},
					{
						name: "Components",
						link: "#",
					},
				],
			},
		};
	},
};
</script>

<style lang="scss" scoped>
#linkComp {
	display: flex;
	gap: 100px;

	h2 {
		color: white;
		margin-bottom: 30px;
	}
	.link {
		color: rgba(159, 167, 177, 1);
		margin-bottom: 13px;

		&:hover {
			color: white;
			cursor: pointer;
		}

		.fa-chevron-right {
			margin-right: 10px;
		}
	}
}
</style>