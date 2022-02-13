<template >
    <div class="text-primary">
        I am home finallly {{main.counter}}

          <!-- <p>Double count is {{ authStore.doubleCount }}</p> -->


    <button class="btn btn-sm btn-primary" @click="increase" > Next </button>
    </div>
</template>
<script>
import { authStore } from "../store/authStore"
export default {
    setup()
    {
        const main = authStore();

        const increase = () =>{
            main.$patch({
                counter: main.counter + 1,
                name: 'Abalam',
            })
        }
        return{
            main,
            increase
        }
    },
}
</script>
<style lang="sass">

</style>
