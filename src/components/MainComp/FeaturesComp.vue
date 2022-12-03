<template>
	<div class="featuresComp">
		<div class="featurs">
			<!-- Titolo e paragrafo -->
			<div class="contTitle">
				<h1>Key Features</h1>
				<p>
					Start working with
					<span class="landrick">Landrick</span> that can provide
					everything you need to generate awarenes, drive traffic,
					connect
				</p>
			</div>

			<!-- Container 4 Features -->
			<div class="contFeatures">
				<div
					class="singleFeatures"
					v-for="(elem, index) in arKeyFeatures"
					:key="index"
				>
					<div class="contImmage">
						<img :src="getImgUrl(elem.image)" alt="features" />
					</div>
					<div>
						<h3 class="titleSingleCard">
							{{ elem.name }}
						</h3>
						<p class="paragraphSingleCard">
							Composed in a pseudo-Latin language whitch more or
							less corresponds.
						</p>

						<div class="readMoreCard">
							<span>Read More</span>
							<font-awesome-icon
								icon="fa-solid fa-chevron-right"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "FeaturesComp",
	data() {
		return {
			arKeyFeatures: [
				{
					name: "Modular",
					image: "modular.svg",
				},
				{
					name: "Responsive",
					image: "responsive.svg",
				},
				{
					name: "Customizable",
					image: "custom.svg",
				},
				{
					name: "Scalable",
					image: "scalable.svg",
				},
			],
		};
	},
	methods: {
		// Url image Features
		getImgUrl(elem) {
			return require("../../assets/img/" + elem);
		},
	},
};
</script>

<style lang="scss" scoped>
.featurs {
	width: 70%;
	margin: auto;
	padding: 5% 0;

	// Titolo + paragrafo
	.contTitle {
		width: 40%;
		display: flex;
		flex-direction: column;
		gap: 20px;
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
		p {
			color: rgba(152, 164, 181, 1);
		}

		// parola Landrick evidenziata
		.landrick {
			color: rgba(47, 85, 212, 1);
			font-weight: bold;
			font-family: "Franklin Gothic Medium", "Arial Narrow", Arial,
				sans-serif;
		}
	}

	// Contenitore 4 features
	.contFeatures {
		display: flex;
		justify-content: center;
		margin-top: 5%;
		gap: 50px;

		// Singola Card
		.singleFeatures {
			width: calc(100% / 7);
			border: 1px solid rgba(203, 212, 240, 0.829);
			background-color: rgba(236, 236, 238, 0.308);
			border-radius: 10px;
			padding: 20px;
			transition: all 0.6s;

			// Img Singola Card
			.contImmage {
				background-color: rgba(234, 238, 251, 1);
				display: inline-block;
				border-radius: 10px;
				text-align: center;
				margin-bottom: 10%;
				img {
					width: 80%;
				}
			}

			&:hover {
				transform: translateY(-10%) scale(1.1);
				box-shadow: 5px 10px 10px gray;
				cursor: pointer;
			}

			// Titolo Singola Card
			.titleSingleCard {
				font-family: "Gill Sans", "Gill Sans MT", Calibri,
					"Trebuchet MS", sans-serif;
			}

			// Paragrafo Singola Card
			.paragraphSingleCard {
				color: rgba(133, 147, 167, 1);
				font-family: "Gill Sans", "Gill Sans MT", Calibri,
					"Trebuchet MS", sans-serif;
				margin-bottom: 10%;
			}
			.readMoreCard {
				font-size: 14px;
				color: blue;
				font-family: "Times New Roman", Times, serif;
				font-weight: bold;
				display: inline-block;
				transition: all 0.8s;
				border-radius: 7px;
				span {
					margin-right: 5px;
				}
				&:hover {
					padding: 7px 15px;
					box-shadow: 5px 10px 10px gray;
				}
			}
		}
	}
}
</style>