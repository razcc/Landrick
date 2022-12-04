<template>
	<div id="quickstart">
		<div class="container">
			<!-- Titolo e paragrafo -->
			<div class="contTitle">
				<span class="">Quickstart</span>
				<h2>Awesome isn't it? Let's dive in!</h2>
				<p>
					Start working with <span>Landrick</span> that can provide
					everything you need to generate awareness, drive traffic,
					connnect
				</p>
			</div>

			<!-- Table -->
		</div>
	</div>
</template>

<script>
export default {
	name: "QuickstartComp",
};
</script>

<style lang="scss" scoped>
.container {
	width: 50%;
	margin: auto;
	text-align: center;
	.contTitle {
		width: 60%;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 10px;
		span {
			color: blue;
			font-weight: bold;
		}
		h2 {
			font-size: 1.7rem;
		}
		p {
			color: rgba(142, 155, 173, 1);
		}
	}
}
</style>