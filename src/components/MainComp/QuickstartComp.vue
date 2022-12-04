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
				<div class="row">
					<!-- NPM -->
					<div>
						<span>npm</span>
					</div>

					<!-- NUGET -->
					<div>
						<span>nuget</span>
					</div>

					<!-- SPM -->
					<div>
						<span>spm</span>
					</div>

					<!-- GITHUB -->
					<div>
						<span>github</span>
					</div>
				</div>

				<!-- Comando PROMPT -->
				<div class="comandoPrompt">
					<span>
						<span class="-g-dollaro">$</span>

						npm install
						<span class="-g-dollaro"> -g </span>
						clapes.js
					</span>
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
};
</script>

<style lang="scss" scoped>
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
		border-radius: 10px;
		padding: 20px 20px 30px 20px;

		// Riga elementi
		.row {
			display: flex;
			justify-content: space-around;
			background-color: rgba(79, 90, 105, 1);
			padding: 4px;
			border-radius: 10px;
			margin-bottom: 20px;
			// SIngolo Elemento
			div {
				width: calc(100% / 4);
				padding: 10px;
				font-size: 1.2rem;
				border-radius: 5px;
				transition: all 0.6s;

				&:hover {
					background-color: rgba(60, 72, 88, 1);
					cursor: pointer;
				}
			}
		}

		// Comando Propt
		.comandoPrompt {
			text-align: start;
			color: rgba(132, 146, 166, 1);

			.-g-dollaro {
				color: rgba(46, 201, 139, 1);
				font-weight: bold;
			}
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