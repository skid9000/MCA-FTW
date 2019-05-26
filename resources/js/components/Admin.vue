<template>
    <div class="ui segment">
        <div class="ui grid">
            <div class="four column row">
                <div class="left floated left aligned column">

                </div>
                <div class="center aligned column">
                    <h2>Welcome to admin dashboard<span v-if="user.ok">, {{ user.name }}</span>!</h2>
                </div>
            </div>
        </div>
        <br/>
    </div>
</template>

<script>
export default {
    mounted() {
        axios.get('/api/loggedin').then(res => {
            this.user = res.data;
        });
        this.getImages();
    }
}
</script>
