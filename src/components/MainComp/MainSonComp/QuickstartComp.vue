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
			<div class="quickstartTable">
				<!-- Container riga -->
				<div>
					<div class="row">
						<div
							v-for="(elem, index) in arrQuickStart"
							:key="index"
							@click="quickstartFunction(elem.name, index)"
							:class="{ activeElement: elem.active }"
						>
							<span>{{ elem.name }}</span>
						</div>
					</div>

					<!-- Comando PROMPT -->
					<div class="comandoPrompt">
						<span v-if="installCommand == ''">
							{{ npmIstall }}
						</span>
						<span else>
							<span> {{ installCommand }} </span>
						</span>
					</div>
				</div>
			</div>

			<!-- Check sotto la tabella -->
			<div class="checkCont">
				<div class="checkText">
					<span class="check">
						<font-awesome-icon icon="fa-solid fa-check" />
					</span>
					Organize your data
				</div>
				<div class="checkText">
					<span class="check">
						<font-awesome-icon icon="fa-solid fa-check" />
					</span>
					Work with any team
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "QuickstartComp",
	data() {
		return {
			arrQuickStart: [
				{
					name: "Npm",
					link: "#",
					active: false,
				},
				{
					name: "Nuget",
					link: "#",
					active: false,
				},
				{
					name: "Spm",
					link: "#",
					active: false,
				},
				{
					name: "Github",
					link: "#",
					active: false,
				},
			],

			installCommand: "",
			npmIstall: "$ npm install -g claps.js",
			nugetInstall: "coming soon ...",
			spmInstall: "coming soon ...",
			githubInstall: "coming soon ...",
			varLowerCase: "",
		};
	},
	methods: {
		quickstartFunction(name, index) {
			if (name == "npm") {
				this.installCommand = this.npmIstall;
			} else if (name == "nuget") {
				this.installCommand = this.nugetInstall;
			} else if (name == "spm") {
				this.installCommand = this.spmInstall;
			} else if (name == "github") {
				this.installCommand = this.githubInstall;
			}

			this.arrQuickStart.forEach((element) => {
				element.active = false;
			});
			this.arrQuickStart[index].active =
				!this.arrQuickStart[index].active;
		},
	},
	mounted() {
		this.arrQuickStart[0].active = true;
		this.arrQuickStart.forEach((element) => {
			element.name = element.name.toLowerCase();
		});
	},
};
</script>

<style lang="scss" scoped>
.activeElement {
	background-color: white;
}
.container {
	width: 40%;
	margin: auto;
	text-align: center;
	margin-bottom: 8%;

	// Titolo e Paragrafo
	.contTitle {
		width: 60%;
		margin: auto;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-bottom: 80px;
		span {
			color: blue;
			font-weight: bold;
		}
		h2 {
			font-size: 1.7rem;
			margin-bottom: 20px;
		}
		p {
			color: rgba(142, 155, 173, 1);
		}
	}

	// Table QuickStart
	.quickstartTable {
		background-color: rgba(60, 72, 88, 1);
		border-radius: 7px;
		padding: 20px 20px 30px 20px;

		// Riga elementi
		.row {
			display: flex;
			justify-content: space-around;
			background-color: rgba(79, 90, 105, 1);
			padding: 7px;
			border-radius: 5px;
			margin-bottom: 20px;
			// SIngolo Elemento
			div {
				width: calc(100% / 4);
				padding: 10px;
				font-size: 1.2rem;
				border-radius: 5px;
				transition: all 0.6s;

				&:hover {
					cursor: pointer;
				}
			}
		}

		// Comando Propt
		.comandoPrompt {
			text-align: start;
			color: rgb(128, 162, 209);
			font-size: 1.1rem;
		}
	}

	// Check
	.checkCont {
		display: flex;
		gap: 50px;
		margin-top: 10px;

		.check {
			font-size: 0.7rem;
			font-weight: bold;
			color: green;
			border: 1px solid green;
			padding: 3px;
			border-radius: 50%;
		}
	}
}
</style>