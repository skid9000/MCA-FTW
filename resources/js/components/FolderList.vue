<template>
	<div class="ui container">
		<div class="ui top attached menu">
			<div class="item">
				<i class="pencil alternate icon"></i>
				Config Editor
			</div>
			<div class="right menu"></div>
		</div>
		<div class="ui attached segment">
			<div class="ui two column grid">
				<div class="three wide column">
					<div class="ui list">
						<span class="item" v-for="dir in pdirs" v-bind:key="dir.name">
							<a @click="dir.isOpened = !dir.isOpened"> <i class="ui folder icon" v-bind:class="{ open: dir.isOpened }"></i> {{ dir.name }} </a>
							<folderlistinside :name="dir.name" v-if="dir.isOpened" v-on:setFile="setFile"></folderlistinside>
						</span>
						<a class="item" @click="setFile(file)" v-for="file in pfiles" v-bind:key="file"> <i class="ui file icon"></i> {{ file.substring(torm.length) }} </a>
					</div>
				</div>
				<div class="thirteen wide column">
					<editor :value="fileval" :name="name" :extension="extension"></editor>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['files', 'dirs'],

	data() {
		return {
			pfiles: JSON.parse(this.files),
			pdirs : this.initFolders(JSON.parse(this.dirs)),
			curdir: 0,
			dirname: "",
			torm: "",
			fileval: 'Please select a file.',
			name: null,
			extension: null
		}
	},

	methods: {
		initFolders(dirs) {
			return dirs.map(val => {
				return {name: val, isOpened: false};
			});
		},
		setFile(name) {
			axios.get('/admin/api/getfile?name=' + name).then(res => {
				this.fileval = res.data.content;
				this.name = res.data.name;
				this.extension = this.name.slice((this.name.lastIndexOf(".") - 1 >>> 0) + 2);
			})
		}
	}
}
</script>
