<script>
	import { defineCustomElements } from 'sicl/loader/index.cjs.js';
	import 'sicl/dist/sicl/sicl.css';

	defineCustomElements();

	let date = new Date();
	let dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
</script>

<div class="hero">
	<div class="header">
		<h1>✨SICL✨</h1>
		<h4>Simple & Intuitive Component Library.</h4>
	</div>
	<div class="more-below-container">
		<!-- TODO: add text-transform to h5 style definition -->
		<h5 style="text-transform: uppercase;">Showcase below</h5>
		<sicl-icon size="48px" name="arrow-down" />
	</div>
</div>
<div class="showcase">
	<div class="container">
		<div class="header">
			<div class="header-text-wrapper">
				<h1>Hi there! 😇</h1>
				<h4>Today is {date.toLocaleDateString(undefined, dateOptions)}</h4>
			</div>
		</div>
		<div class="form" />
		<div class="list" />
		<div class="total" />
	</div>
</div>

<!-- Custom components test -->
<sicl-button class="primary" type="button">Button</sicl-button>

<style lang="scss">
	:root {
		background-color: var(--background-color);
		-ms-overflow-style: none;
		scrollbar-width: none;
		scroll-behavior: smooth;
		overflow-y: scroll;
    	scroll-snap-type: y mandatory;

		&::-webkit-scrollbar {
			display: none;
		}
	}

	@media (prefers-color-scheme: dark) {
		.hero {
			background-image: url('src/assets/Components-dark.svg');
		}
	}

	@media (prefers-color-scheme: light) {
		.hero {
			background-image: url('src/assets/Components-light.svg');
		}
	}

	.hero {
		object-fit: cover;
		background-position: top center;
		background-repeat: no-repeat;
		background-size: cover;
		background-size: auto 100vh;
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100vw;
		scroll-snap-align: start;
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100vw;
		}
		.more-below-container {
			position: absolute;
			bottom: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
	}

	.showcase {
		height: 100vh;
		width: auto;
		scroll-snap-align: start;
		.container {
			box-sizing: border-box;
			height: 100%;
			padding: 64px 96px;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 171px 1fr 104px;
			grid-auto-columns: 1fr 1fr;
			grid-auto-rows: 1fr 1fr;
			gap: 24px 24px;
			grid-auto-flow: row;
			grid-template-areas:
				'header list'
				'form list'
				'form total';
			.form {
				grid-area: form;
				background-color: var(--container-background-color);
				border-radius: 8px;
				border: 1px solid var(--checkbox-outline-color); // TODO: make this a theme color
			}
			.header {
				grid-area: header;
				background-color: var(--container-background-color);
				border-radius: 8px;
				border: 1px solid var(--checkbox-outline-color); // TODO: make this a theme color
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: flex-start;
				.header-text-wrapper {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-end;
					margin-left: 48px;
				}
			}
			.total {
				grid-area: total;
				background-color: var(--container-background-color);
				border-radius: 8px;
				border: 1px solid var(--checkbox-outline-color); // TODO: make this a theme color
			}
			.list {
				grid-area: list;
				background-color: var(--container-background-color);
				border-radius: 8px;
				border: 1px solid var(--checkbox-outline-color); // TODO: make this a theme color
			}
		}
	}
</style>
