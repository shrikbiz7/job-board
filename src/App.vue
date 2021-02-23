<template>
    <v-app>
        <NavBar />

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Emit, Prop, Watch } from 'vue-property-decorator';
import store, { STORE_KEY } from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component({
    components: {
        NavBar: () => import('@/components/NavBar/NavBar.vue'),
        HomePage: () => import('@/views/HomePage.vue'),
        JobSearch: () => import('@/views/JobSearch.vue'),
    },
})
export default class App extends Vue {
    storeModule: any;

    created() {
        const isModuleRegistered = Object.keys(this.$store.state).includes(STORE_KEY);
        if (!isModuleRegistered) this.$store.registerModule(STORE_KEY, store);
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }
}
</script>
