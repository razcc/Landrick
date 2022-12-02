<template>
	<div id="NavBar">
		<div v-for="(elem, index) in propsNavBar" :key="index">
			<span>{{ elem.name }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "NavBarComp",
	props: {
		propsNavBar: Array,
	},
};
</script>

<style lang="scss" scoped>
#NavBar {
	display: flex;
	gap: 20px;
	align-items: center;
	text-transform: uppercase;
	font-size: 1.5rem;
}
</style>