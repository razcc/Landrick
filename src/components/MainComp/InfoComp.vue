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
			<button class="btnReadMore">
				<span class="btnText">Read More</span>
				<span class="btnArrow">
					<font-awesome-icon icon="fa-solid fa-arrow-right-long" />
				</span>
			</button>
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

		// Button
		.btnReadMore {
			border-radius: 5px;
			padding: 10px 25px;
			margin-top: 20px;
			font-weight: bold;
			border: none;
			background: rgba(47, 85, 212, 1);
			color: white;
			cursor: pointer;
			position: relative;
			transition: all 0.5s ease;
			z-index: 1;
		}

		.btnReadMore:after {
			position: absolute;
			content: "";
			width: 100%;
			height: 0;
			top: 0;
			left: 0;
			z-index: -1;
			border-radius: 5px;
			background-color: rgba(15, 113, 115, 1);
			transition: all 0.5s;
		}
		.btnReadMore:hover {
			color: black;
			box-shadow: 4px 8px 15px gray;
		}
		.btnReadMore:hover:after {
			top: auto;
			bottom: 0;
			height: 100%;
		}
		.btnReadMore:active {
			top: 2px;
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