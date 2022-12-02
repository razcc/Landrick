<template>
	<div id="AccessOption">
		<!-- Search Icon -->
		<font-awesome-icon
			@click="attivaRicerca()"
			class="search"
			icon="fa-solid fa-magnifying-glass"
		/>

		<span class="searchContainer" v-if="varRicerca">
			<input type="text" placeholder="Search" />
			<font-awesome-icon icon="fa-solid fa-magnifying-glass" />
		</span>

		<!-- Git icon -->
		<div>
			<font-awesome-icon icon="fa-brands fa-github" />
		</div>

		<!-- Menu icon -->
		<div>
			<font-awesome-icon icon="fa-solid fa-bars-staggered" />
		</div>

		<!-- User icon -->
		<div>
			<font-awesome-icon icon="fa-solid fa-user" />
		</div>
	</div>
</template>

<script>
export default {
	name: "AccessOption",
	data() {
		return {
			varRicerca: false,
		};
	},
	methods: {
		attivaRicerca() {
			if (!this.varRicerca) {
				this.varRicerca = true;
			} else {
				this.varRicerca = false;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
#AccessOption {
	display: flex;
	align-items: center;
	gap: 20px;
	position: relative;

	.search {
		font-size: 1.5rem;
		transition: all 0.3s;

		&:hover {
			transform: scale(1.6);
		}
	}

	.searchContainer {
		position: absolute;
		top: 130%;
		left: -100%;
		box-shadow: 0 0 10px gray;
		input {
			height: 40px;
			width: 250px;
			border: none;
			outline: none;
		}
	}

	div {
		background-color: #2f56d428;
		border: 1px solid #e9ecef;
		box-shadow: 4px 7px 8px gray;
		border-radius: 10px;
		font-size: 1rem;
		padding: 10px;
		transition: all 0.5s;

		&:hover {
			background-color: #2f55d4;
			border-color: #2f55d4;
			transform: scale(1.6);
		}
	}
}
</style>