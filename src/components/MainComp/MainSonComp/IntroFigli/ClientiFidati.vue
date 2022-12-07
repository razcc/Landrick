<template>
	<!-- Aziende Clienti -->
	<div class="clientiComp">
		<div class="contClienti">
			<span
				class="cliente"
				v-for="(elem, index) in propsArrayCLientiFidati"
				:key="index"
			>
				<img :src="getImgUrl(elem)" alt="Clienti" />
			</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "ClientiFidati",
	props: {
		propsArrayCLientiFidati: Array,
	},
	methods: {
		// Path image Clienti
		getImgUrl(elem) {
			return require("../../../../assets/img/" + elem);
		},
	},
};
</script>

<style lang="scss" scoped>
.clientiComp {
	border-top: 1px solid rgb(187, 193, 201);
	margin-top: 4%;
	padding: 50px 0 30px 0;
}
.dark .clientiComp {
	border-top: 1px solid rgb(61, 70, 122);
}
.contClienti {
	width: 60%;
	margin: auto;

	display: flex;
	justify-content: space-between;
	.cliente {
		width: calc(100% / 12);
		img {
			width: 100%;
		}
	}
}
</style>