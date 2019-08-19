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
						<a class="item" @click='getDirContent("/")' v-if="curdir != 0"> <i class="ui folder icon"></i> [GO TO ROOT] </a>
						<a class="item" @click="getDirContent(dir)" v-for="dir in pdirs" v-bind:key="dir"> <i class="ui folder icon"></i> {{ dir.substring(torm.length) }} </a>
						<a class="item" @click="setFile(file)" v-for="file in pfiles" v-bind:key="file"> <i class="ui file icon"></i> {{ file.substring(torm.length) }} </a>
					</div>
				</div>
				<div class="thirteen wide column">
					<editor :value="fileval"></editor>
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
			pdirs : JSON.parse(this.dirs),
			curdir: 0,
			dirname: "",
			torm: "",
			fileval: 'Please select a file.'
		}
	},

	methods: {
		setFile(name) {
			axios.get('/admin/api/getfile?name=' + name).then(res => {
				this.fileval = res.data.content;
			})
		},
		getDirContent(name) {
			axios.get('/admin/api/getdircontent?name=' + name).then(res => {
				if (name == "/") {
					this.curdir = 0;
					this.torm = "";
					this.pdirs = res.data.dirs;
					this.pfiles = res.data.files;
				}
				else {
					if (this.curdir = 0) {
						this.curdir = name.length + 1
						this.torm = name.substring(0,this.curdir) + "/"
						this.pdirs = res.data.dirs;
						this.pfiles = res.data.files;
					}
					else {
						this.curdir = name.length + 1
						this.torm = name.substring(0,this.curdir) + "/"
						this.pdirs = res.data.dirs;
						this.pfiles = res.data.files;
					}

				}

			})
		}
	}
}
</script>
