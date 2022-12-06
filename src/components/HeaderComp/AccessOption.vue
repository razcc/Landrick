<template>
	<div id="AccessOption">
		<!-- Search Icon -->
		<font-awesome-icon
			@click="attivaRicerca()"
			class="search"
			icon="fa-solid fa-magnifying-glass"
		/>

		<span
			class="searchContainer"
			v-if="varRicerca"
			@keyup.enter="varRicerca = false"
		>
			<input type="text" placeholder="Search" />
			<font-awesome-icon
				@click="varRicerca = false"
				icon="fa-solid fa-magnifying-glass"
			/>
		</span>

		<!-- Git icon -->
		<div class="iconCont">
			<font-awesome-icon icon="fa-brands fa-github" />
		</div>

		<!-- Menu icon -->
		<div class="iconCont">
			<font-awesome-icon icon="fa-solid fa-bars-staggered" />
		</div>

		<!-- User icon -->
		<div class="iconCont">
			<font-awesome-icon icon="fa-solid fa-user" />
		</div>
	</div>
</template>

<script>
export default {
	name: "AccessOption",
	props: {
		mode: String,
	},
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
}
// Icona Search
.search {
	font-size: 1.5rem;
	transition: all 0.3s;

	&:hover {
		transform: scale(1.6);
	}
}
// Ricerca icona
.fa-magnifying-glass {
	font-size: 22px;
	color: blue;
	&:hover {
		cursor: pointer;
	}
}
// DarkMode Ricerca Icona
.dark .fa-magnifying-glass {
	color: white;
}

// Input Serach
.searchContainer {
	position: absolute;
	top: 130%;
	left: -100%;
	box-shadow: 0 0 2px gray;
	z-index: -1;

	input {
		height: 40px;
		width: 250px;
		border: none;
		outline: none;
	}
}

// DarkMode Input Search
.dark input {
	background: rgba(28, 40, 54, 1);
}

// Icone di Acesso
.iconCont {
	background-color: #2f56d428;
	border: 1px solid #e9ecef;
	box-shadow: 2px 4px 6px gray;
	border-radius: 10px;
	font-size: 1rem;
	padding: 10px;
	transition: all 0.5s;

	&:hover {
		background-color: #2f55d4;
		border-color: #2f55d4;
		transform: scale(1.2);
	}
}

// DArkMode Icone di Acesso
.dark .iconCont {
	background-color: rgba(29, 42, 62, 1);
	border-color: #39415c;
	color: rgba(47, 85, 212, 1);
	box-shadow: 2px 4px 6px rgb(70, 69, 69);
	transition: all 0.5s;

	&:hover {
		color: white;
		background-color: #2f55d4;
		border-color: #2f55d4;
		transform: scale(1.2);
	}
}
</style>