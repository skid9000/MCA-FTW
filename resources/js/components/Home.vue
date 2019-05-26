<template>
    <div class="ui segment">
        <div v-if="image.err">
            <div class="ui error message">{{ image.err }}</div>
            <br/>
        </div>
        <div v-else>

        </div>
    </div>
</template>
