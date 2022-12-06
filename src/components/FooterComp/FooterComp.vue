<template>
	<footer>
		<!-- Riga 1 -->
		<div class="row1">
			<!-- Social -->
			<div class="social">
				<h2>Landrick</h2>

				<p>
					Start working with Landrick that can provide everything you
					need to generate awareness, drive traffic, connect.
				</p>
				<font-awesome-icon
					class="socialIcon"
					icon="fa-brands fa-facebook-f"
				/>
				<font-awesome-icon
					class="socialIcon"
					icon="fa-brands fa-instagram"
				/>
				<font-awesome-icon
					class="socialIcon"
					icon="fa-brands fa-twitter"
				/>
				<font-awesome-icon
					class="socialIcon"
					icon="fa-brands fa-linkedin-in"
				/>
			</div>

			<!-- Links Comp -->

			<!-- Newsletter -->
			<div class="newsletterCont">
				<h2>Newsletter</h2>
				<p>Sign up and receive the latest tips via email</p>

				<!-- Container input -->
				<div class="inputCont">
					<div>
						<span>
							Write youre email
							<span class="asterisco">*</span>
						</span>
					</div>

					<!-- Input -->
					<div class="input">
						<font-awesome-icon icon="fa-regular fa-envelope" />
						<input type="email" placeholder="Your email:" />
					</div>

					<!-- Bottone  -->
					<div class="btn">Subscribe</div>
				</div>
			</div>
		</div>

		<!-- Riga 2 -->
		<div class="row2Cont">
			<div class="row2">
				<!-- Autore del sito -->
				<div>
					<span>
						<span class="cSymbol">&#169;</span>
						2020 Landrick. Design with
						<span class="cuore"> &#x2665;</span>
						by Shreethemes
					</span>
				</div>

				<!-- Carte di pagamento amesse -->
				<div class="cardCont">
					<!-- single card -->
					<div v-for="(elem, index) in arrCardPayment" :key="index">
						<img :src="getImgUrl(elem)" alt="" />
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "FooterComp",
	components: {},
	data() {
		return {
			arrCardPayment: [
				"american-ex.png",
				"discover.png",
				"master-card.png",
				"paypal.png",
				"visa.png",
			],
		};
	},
	methods: {
		getImgUrl(elem) {
			return require("../../assets/img/" + elem);
		},
	},
};
</script>

<style lang="scss" scoped>
footer {
	background-color: rgba(32, 41, 66, 1);
}

// Riga 1
.row1 {
	width: 60%;
	margin: auto;
	padding: 70px 0;
	display: flex;
	justify-content: space-between;

	// Sezione Social
	.social {
		h2 {
			color: white;
			margin-bottom: 30px;
		}
		p {
			color: rgba(164, 172, 181, 1);
			margin-bottom: 25px;
		}

		// Icona social
		.socialIcon {
			border: 1px solid rgba(164, 172, 181, 1);
			border-radius: 7px;
			color: rgba(164, 172, 181, 1);
			font-size: 1.3rem;
			padding: 5px;
			width: 25px;
			height: 25px;
			margin-right: 5px;
			transition: all 0.5s;
			&:hover {
				background-color: blue;
				border: 1px solid blue;
			}
		}
	}

	// NewsLetter
	.newsletterCont {
		h2 {
			color: white;
			margin-bottom: 30px;
		}
		p {
			color: rgba(164, 172, 181, 1);
			margin-bottom: 25px;
		}

		// Input  Container
		.inputCont {
			color: rgba(164, 172, 181, 1);

			.asterisco {
				color: red;
			}

			// Input
			.input {
				width: 100%;
				border: none;
				background-color: rgba(39, 49, 79, 1);
				padding: 0px;
				border-radius: 7px;
				margin-top: 10px;
				margin-bottom: 20px;
				display: flex;
				align-items: center;
				padding-left: 10px;
				input {
					background-color: transparent;
					border: none;
					width: 100%;
					padding: 10px;
					outline: none;
					color: white;
				}
				.fa-envelope {
					font-size: 1.1rem;
				}
			}

			// Bottone
			.btn {
				width: 100%;
				background-color: rgba(34, 46, 81, 1);
				color: rgba(45, 80, 194, 1);
				padding: 10px;
				text-align: center;
				font-size: 1.1rem;
				border-radius: 10px;
				cursor: pointer;
				box-shadow: 2px 5px 5px rgba(33, 33, 243, 0.205);
				transition: all 0.5s;

				&:hover {
					color: white;
					background-color: blue;
				}
			}
		}
	}
}

// Riga 2
.row2Cont {
	border-top: 1px solid rgb(70, 81, 114);
	.row2 {
		padding: 20px;
		width: 60%;
		margin: auto;
		color: rgba(164, 172, 181, 1);
		display: flex;
		justify-content: space-between;
		align-items: center;

		// Cuore
		.cuore {
			color: red;
		}
		// Card Container
		.cardCont {
			display: flex;
			img {
				width: 80%;
			}
		}
	}
}
</style>