<template>
	<div class="ui attached segment" style="height:50rem;">
		<div id="container-editor" style="width:auto; height:100%;"></div>
	</div>
</template>

<script>
import * as monaco from 'monaco-editor';
export default {
	props: ['value'],

	watch: {
		value: function(newVal, _oldVal) {
			this.editor.setValue(newVal);
		}
	},

	mounted() {
		console.log('creating monaco editor');
		this.editor = monaco.editor.create(document.getElementById('container-editor'), {
			language: 'text',
			value: this.value,
			theme: "vs-dark"
		});
	}
}
</script>
