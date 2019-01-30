<template>
    <div class="content">
        <p>
            <img :src="track.album.images[0].url">
        </p>
        <p>
            <strong>{{track.name}}</strong>
            <small>{{track.duration_ms}}</small>
        </p>
        <p>
            <audio class="player" controls :src="track.preview_url"></audio>
        </p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            track: ''
        }
    },
    created () {
        this.$bus.$on('set-track',(track) => {
            console.log(track);
            this.track = track
        })
    }
}
</script>
<style scoped>
    img{
        width: 124px;
        border-radius: 50%;
    }
    .player{
        height: 55px;
    }
</style>