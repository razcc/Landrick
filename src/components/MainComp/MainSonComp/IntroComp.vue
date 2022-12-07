<template>
	<div id="introComp">
		<div class="containerIntro">
			<!-- Col Left -->
			<div class="colLeft">
				<div class="development">
					<span>Development</span>
				</div>
				<!-- Titolo -->
				<h2>a complete</h2>
				<h2>developer toolset</h2>

				<!-- Paragrafo -->
				<p>
					Launch your campaign and benefit from our expertise on
					designing and managing conversion centered bootstrap4 html
					page
				</p>

				<!-- Bottoni -->
				<div class="contButton">
					<button class="getStarted">Get Started</button>
					<button class="documantation">Documantation</button>
					<div class="version">
						<span>Current Version v2.6.0</span>
					</div>
				</div>
			</div>

			<!-- Col right -->
			<div class="colRight">
				<img src="../../../assets/img/about.png" alt="About Us" />
			</div>
		</div>

		<ClientiFidati :propsArrayCLientiFidati="propsArrayCLientiFidati" />
	</div>
</template>

<script>
import ClientiFidati from "./IntroFigli/ClientiFidati.vue";
export default {
	name: "IntroComp",
	props: {
		propsArrayCLientiFidati: Array,
	},
	components: {
		ClientiFidati,
	},
};
</script>

<style lang="scss" scoped>
#introComp {
	background: rgb(207, 212, 221);
	background: linear-gradient(
		0deg,
		rgb(203, 210, 224) 0%,
		rgb(255, 255, 255) 100%
	);
}
.dark #introComp {
	background-color: rgba(28, 40, 54, 1);
	background: linear-gradient(
		0deg,
		rgba(28, 40, 54, 1) 0%,
		rgb(42, 53, 66) 100%
	);
}

// Container Intro
.containerIntro {
	display: flex;
	justify-content: space-around;
	width: 70%;
	margin: auto;
	padding-top: 10%;
}
// Col lefT
.colLeft {
	width: 50%;
}

// Bottone development
.development {
	border: 1px solid rgba(209, 218, 246, 1);
	background-color: rgb(222, 229, 240);
	color: black;
	display: inline-block;
	padding: 4px 15px;
	border-radius: 30px;
}
.dark .development {
	border: 1px solid rgb(62, 78, 97);
	background-color: rgba(28, 40, 54, 1);
	color: rgb(17, 14, 202);
	letter-spacing: 1px;
}

// Titolo
h2 {
	font-size: 3rem;
	text-transform: capitalize;
	color: black;
}
.dark h2 {
	color: rgb(201, 197, 197);
}

// Paragrafo
p {
	font-size: 1.2rem;
	margin-top: 5%;
	color: rgb(177, 194, 221);
}

.contButton {
	margin-top: 5%;
	button {
		font-size: 1.2rem;
		padding: 10px 20px;
		margin-right: 25px;
		margin-bottom: 10px;
		border-radius: 7px;
		border: none;
	}
	.getStarted {
		background-color: rgba(47, 85, 212, 1);
		color: white;
	}
	.documantation {
		color: rgba(64, 99, 216, 1);
		border: 1px solid rgba(64, 99, 216, 1);
	}
	.version {
		color: rgb(137, 148, 165);
	}
}
.dark .contButton .documantation {
	background-color: rgba(28, 40, 54, 1);
}
</style>