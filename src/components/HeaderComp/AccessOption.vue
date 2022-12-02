<template>
	<div id="AccessOption">
		<font-awesome-icon class="search" icon="fa-solid fa-magnifying-glass" />
		<div>
			<font-awesome-icon icon="fa-brands fa-github" />
		</div>
		<div>
			<font-awesome-icon icon="fa-solid fa-bars-staggered" />
		</div>
		<div>
			<font-awesome-icon icon="fa-solid fa-user" />
		</div>
	</div>
</template>

<script>
export default {
	name: "AccessOption",
};
</script>

<style lang="scss" scoped>
#AccessOption {
	display: flex;
	align-items: center;
	gap: 20px;

	.search {
		font-size: 1.5rem;
	}

	div {
		background-color: #2f56d428;
		border: 1px solid #e9ecef;
		box-shadow: 4px 7px 8px gray;
		border-radius: 10px;
		font-size: 1rem;
		padding: 10px;
	}
}
</style>