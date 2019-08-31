<template>
	<div class="list">
		<span class="item" v-for="dir in pdirs" v-bind:key="dir.name">
			<a @click="dir.isOpened = !dir.isOpened"> <i class="ui folder icon" v-bind:class="{ open: dir.isOpened }"></i> {{ dir.name.substring(torm) }} </a>
			<folderlistinside :name="dir.name" v-if="dir.isOpened" v-on:setFile="setFile"></folderlistinside>
		</span>
		<a class="item" @click="setFile(file)" v-for="file in pfiles" v-bind:key="file"> <i class="ui file icon"></i> {{ file.substring(torm) }} </a>
	</div>
</template>

<script>
export default {
	props: ['name'],

	data() {
		return {
			torm: 0,
			pdirs: [],
			pfiles: []
		};
	},

	beforeMount() {
		this.torm = this.name.length + 1;
		axios.get('/admin/api/getdircontent?name=' + this.name).then(res => {
			console.log(this);
			this.pdirs = res.data.dirs.map(val => {
				return {name: val, isOpened: false};
			});
			this.pfiles = res.data.files;
		});
	},

	methods: {
		setFile(name) {
			this.$emit('setFile', name);
		}
	}
}
</script>
