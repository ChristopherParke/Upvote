<template>
    <div >
        <div v-for="group in groups" :key="group" class="flex items-center mb-2">
            <div v-if="group.status === 1" class="p-1 mr-4 border border-myDarkGrey border-9 rounded inline-block">
               <button @click="handleToggleStatus(group.id)" class="m-2 bg-myLightBlue p-1 pl-3 pr-3 rounded-lg text-myBlue" v-for="index in group.count" :key="index">
                    <font-awesome-icon :icon="['fa', 'arrow-up']" />
                </button>
            </div>
            <div v-else class="p-1 mr-4 border border-myDarkGrey border-9 rounded inline-block">
               <button @click="handleToggleStatus(group.id)" class="m-2 bg-myGrey p-1 pl-3 pr-3 rounded-lg text-myBlack" v-for="index in group.count" :key="index">
                    <font-awesome-icon :icon="['fa', 'arrow-up']" />
                </button>
            </div>       
            <button @click="handleAddIcon(group.id)" class="bg-myGrey p-1 pl-3 pr-3 rounded-lg text-myBlack">
                <font-awesome-icon :icon="['fa', 'plus']" />
            </button>
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import { useStore } from 'vuex'

    const store = useStore()
    
    const groups = computed(() => {
        return store.state.upvote.groups
    })

    const handleToggleStatus = (id) => {
        store.dispatch('toggleStatus', id)
    }

    const handleAddIcon = (id) => {
        store.dispatch('addIcon', id)
    }

</script>
