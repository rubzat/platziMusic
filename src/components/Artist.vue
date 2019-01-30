<template>
    <li class="artista">
        <img :src="artista.image[2]['#text']">
        <a :href="artista.url" target="blank">{{artista.name}}</a>
    </li>
</template>

<script>
export default {
  name:'artista',
  props: ['artista']
}
</script>
<style>

</style>

