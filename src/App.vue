<template>
    <v-app>
        <NavBar />
        <SideBar />
        <v-main>
            <router-view />
        </v-main>
        <Footer />
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
        JobSearch: () => import('@/components/JobSearch/JobSearch.vue'),
        Footer: () => import('@/components/Footer/Footer.vue'),
        SideBar: () => import('@/components/MobileView/SideBar.vue'),
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
