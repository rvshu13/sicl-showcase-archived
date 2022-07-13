<script>
	import { defineCustomElements } from 'sicl/loader';
	import 'sicl/dist/sicl/sicl.css';

	defineCustomElements();
</script>

<div class="hero">
	<div class="header">
		<h1>✨SICL✨</h1>
		<p>A simple & intuitive component library.</p>
	</div>
</div>
<div class="showcase">
	<div class="container">
		<div class="header" />
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

		&::-webkit-scrollbar {
			display: none;
		}
	}

	@media (prefers-color-scheme: dark) {
		h1 {
			color: var(--text-header-color);
		}
		h2 {
			color: var(--text-subtitle-color);
		}
		p {
			color: var(--text-paragraph-color);
		}
		.hero {
			background-image: url('src/assets/Components-dark.svg');
		}
	}

	@media (prefers-color-scheme: light) {
		h1 {
			color: var(--text-header-color);
		}
		h2 {
			color: var(--text-subtitle-color);
		}
		p {
			color: var(--text-paragraph-color);
		}
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
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100vh;
		}
	}

	.showcase {
        height: 100vh;
        width: auto;
		.container {
            height: 100%;
            // padding: 64px 96px;
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
			}

			.header {
				grid-area: header;
				background-color: var(--container-background-color);
				border-radius: 8px;
			}

			.total {
				grid-area: total;
				background-color: var(--container-background-color);
				border-radius: 8px;
			}

			.list {
				grid-area: list;
				background-color: var(--container-background-color);
				border-radius: 8px;
			}
		}
	}
</style>
