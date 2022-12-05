<template>
	<div id="infoComp">
		<!-- Col Left -->
		<div class="colLeft">
			<!-- Titolo -->
			<h1>Build tool and extensive documentation</h1>

			<!-- Paragrafo -->
			<p>
				You can combine all the Lanrick templates into a single one, you
				can take a component from the Application theme and use it in
				the Website.
			</p>

			<!-- Check -->
			<div class="check">
				<div>
					<span><font-awesome-icon icon="fa-solid fa-check" /></span>
					<span>Digital marketing Solutions for Tomorrow</span>
				</div>
				<div>
					<span><font-awesome-icon icon="fa-solid fa-check" /></span>
					<span>
						Our Talented <span>&#38;</span> Experienced Marketing
						Agency
					</span>
				</div>
				<div>
					<span><font-awesome-icon icon="fa-solid fa-check" /></span>
					<span>Create your own skin to match your brand</span>
				</div>
			</div>

			<!-- Bottone Read More -->
			<Button
				>Read more
				<span
					><font-awesome-icon
						icon="fa-solid fa-arrow-right-long" /></span
			></Button>
		</div>

		<!-- Col Right -->
		<div class="colRight">
			<img src="../../assets/img//1.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	name: "InfoComp",
};
</script>

<style lang="scss" scoped>
#infoComp {
	display: flex;
	width: 60%;
	margin: auto;
	justify-content: space-between;

	// Col Left
	.colLeft {
		width: 40%;

		// Titolo
		h1 {
			font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
				"Lucida Sans", Arial, sans-serif;
			margin-bottom: 10%;
		}

		// Paragrafo
		p {
			margin-bottom: 7%;
			color: rgba(149, 161, 178, 1);
		}

		// Ckeck List
		.check {
			color: rgba(149, 161, 178, 1);

			div {
				margin-bottom: 10px;
			}

			// Ckck Symbol
			.fa-check {
				color: blue;
				border: 1px solid blue;
				padding: 1px;
				border-radius: 50%;
				margin-right: 10px;
			}
		}

		Button {
			background-color: rgba(47, 85, 212, 1);
			border: none;
			border-radius: 7px;
			font-size: 1.1rem;
			font-weight: bold;
			font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
				sans-serif;
			color: white;
			padding: 10px 15px;
			margin-top: 20px;

			.fa-arrow-right-long {
				margin-left: 10px;
				font-size: 0.8rem;
			}
		}
	}

	// ColRight
	.colRight {
		width: 50%;
		img {
			width: 100%;
		}
	}
}
</style>