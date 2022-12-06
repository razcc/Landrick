<template>
	<div id="mailSubscriptionComp">
		<!-- Title COntainer -->
		<div class="titleCont">
			<h1>Wat to be among the first to find out?</h1>

			<p>
				Start working with <span>Landrick</span> tha can provide
				everytung you need to generate awareness, drive traffic, connect
			</p>
		</div>

		<!-- Mail Input -->
		<div class="inputCont">
			<input type="email" placeholder="Email" />
			<button>Get Started</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "MailSubscription",
};
</script>

<style lang="scss" scoped>
* {
	box-sizing: border-box;
}
#mailSubscriptionComp {
	width: 40%;
	text-align: center;
	margin-bottom: 10%;

	// Cont titolo
	.titleCont {
		margin-bottom: 30px;
		// Titolo
		h1 {
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			margin-bottom: 20px;
		}
		// Paragrafo
		p {
			color: rgba(156, 167, 183, 1);
			font-size: 1.1rem;

			// Landirck name
			span {
				color: blue;
			}
		}
	}

	// COnt Input
	.inputCont {
		border: 1px solid rgb(195, 206, 212);
		border-radius: 20px;
		margin: auto;
		padding: 5px 5px;

		// Input
		input {
			width: 80%;
			padding: 10px;
			border: none;
			border-radius: 20px;
			outline: none;
		}

		button {
			width: 20%;
			padding: 10px;
			border: none;
			background-color: rgba(47, 85, 212, 1);
			border-radius: 20px;
			color: white;
			cursor: pointer;
			position: relative;
			&::before {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				border-radius: 20px;
				width: 100%;
				height: 100%;
				transition: all 1s;
			}

			&:hover:before {
				background-color: rgba(0, 0, 0, 0.5);
			}
		}
	}
}
</style>