<template lang="">
    <div>
        I am home finallly

<button class="btn btn-sm btn-primary"> Next </button>
    </div>
</template>
<script>
export default {

    computed: {
        activeSong(){
            return this.$store.getters.getActiveSong;
        }
    },
    methods: {
        next(){
            this.$store.dispatch('nextSong');
        }
    }
}
</script>
<style lang="">

</style>
