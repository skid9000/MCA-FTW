<template>
	<div class="ui attached segment" style="height:50rem;">
		<div id="container-editor" style="width:auto; height:100%;"></div>
	</div>
</template>

<script>
import * as monaco from 'monaco-editor';
export default {
	props: ['value', 'name', 'extension'],

	watch: {
		value: function(newVal, _oldVal) {
			this.editor.setValue(newVal);
		},
		extension: function(newVal, _oldVal) {
			console.log(this.editor);
			var model = this.editor.getModel();
			switch (newVal) {
				case 'json':
					monaco.editor.setModelLanguage(model, "json")
					break;

				case 'yml':
				case 'yaml':
					monaco.editor.setModelLanguage(model, "yaml")
					break;

				default:
					monaco.editor.setModelLanguage(model, "text")
					break;
			}
		}
	},

	mounted() {
		console.log('creating monaco editor');
		this.editor = monaco.editor.create(document.getElementById('container-editor'), {
			language: 'text',
			value: this.value,
			theme: "vs-dark"
		});
		$(window).keydown(event => {
			if (event.code != "KeyS" || !event.ctrlKey) return;
			event.preventDefault();
			if (name == null) return;
			axios.post('/admin/api/savefile', {name: this.name, value: this.editor.getValue()});
			return;
		});
	}
}
</script>
