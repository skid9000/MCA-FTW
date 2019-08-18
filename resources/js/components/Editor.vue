<template>
	<span>
		<div id="container-editor" style="padding: 5rem; width: 50%; height: 100%;"></div>
	</span>
</template>

<script>
import * as monaco from 'monaco-editor';
export default {
	mounted() {
		monaco.editor.create(document.getElementById('container-editor'), {
			language: 'json'
		});
	}
}
</script>
