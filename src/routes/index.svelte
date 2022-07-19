<script context="module">
	export const hydrate = false;
</script>

<script>
	import 'sicl/dist/sicl/sicl.css';

	let date = new Date();
	let dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};
</script>

<div class="hero">
	<sicl-button type="button" class="primary theme-switcher" icon-left="sun"></sicl-button>
	<div class="header">
		<h1>✨SICL✨</h1>
		<h4>Simple & Intuitive Component Library.</h4>
	</div>
	<div class="more-below-container">
		<!-- TODO: add text-transform to h5 style definition -->
		<h5 style="text-transform: uppercase;">Showcase below</h5>
		<sicl-icon style="color: var(--text-subtitle-color);" size="48px" name="arrow-down" />
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
		<div class="form">
			<span class="form-header">
				<h3>Any expenses today?</h3>
				<p class="body-1 regular">Put them in with the form below, I will try to save them in a list on the right.</p>
			</span>
			<span class="form-wrapper">
				<sicl-input style="width: 100%;" type="primary" label-text="Name (max. 40 characters)" placeholder="ex. Dinner"></sicl-input>
				<sicl-input style="width: 35%;" type="primary" label-text="Value" placeholder="$ 4.11"></sicl-input>
				<sicl-radio-group name="payment-type" label-text="Payment type">
					<sicl-radio label-text="💳 Card" checked></sicl-radio>
					<sicl-radio label-text="💵 Cash" ></sicl-radio>
				</sicl-radio-group>
				<sicl-checkbox-group name="additional" label-text="Additional info">
					<sicl-checkbox label-text="🍟 Fast food"></sicl-checkbox>
					<sicl-checkbox label-text="🍻 Alcohol"></sicl-checkbox>
					<sicl-checkbox label-text="👀 Do you regret this?"></sicl-checkbox>
				</sicl-checkbox-group>
				<span class="form-buttons">
					<sicl-button type="button" class="tertiary" icon-left="trash">Clear</sicl-button>
					<sicl-button type="submit" class="primary" icon-right="arrow-right">Add an expense</sicl-button>
				</span>
			</span>
		</div>
		<div class="list" />
		<div class="total" />
	</div>
</div>

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
		justify-content: space-between;
		width: 100vw;
		scroll-snap-align: start;
		box-sizing: border-box;
		padding: 36px 36px 36px 0px;
		.header {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 100vw;
		}
		.more-below-container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}
		.theme-switcher {
			align-self: flex-end;
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
				border: 1px solid var(--container-border-color);
				box-sizing: border-box;
				.form-header {
					display: flex;
					flex-direction: column;
					margin: 36px 48px 36px 48px;
				}
				.form-wrapper {
					margin: 36px 0px 36px 48px;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: flex-start;
					row-gap: 16px;
					.form-buttons {
						box-sizing: border-box;
						display: flex;
						flex-direction: row;
						justify-content: center;
						align-items: center;
						align-content: center;
						column-gap: 64px;
						width: 100%;
						padding: 0 128px;
					}
				}
			}
			.header {
				grid-area: header;
				background-color: var(--container-background-color);
				border-radius: 8px;
				border: 1px solid var(--container-border-color);
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
				border: 1px solid var(--container-border-color);
			}
			.list {
				grid-area: list;
				background-color: var(--container-background-color);
				border-radius: 8px;
				border: 1px solid var(--container-border-color);
			}
		}
	}
</style>
