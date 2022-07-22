<script>
	import storeTheme from './storeThemes.js';

	let icon = 'moon';

	function ThemeToggler(e) {
		if ($storeTheme === 'dark') {
			storeThemes.update((storeTheme) => 'light');
            icon = 'sun';
		} else {
			storeThemes.update((storeTheme) => 'dark');
            icon = 'moon';
		}
	}
</script>

<sicl-button type="button" class="primary" icon-left={icon} on:click={ThemeToggler}></sicl-button>