<template>
    <v-app>
        <NavBar />
        <v-responsive class="overflow-y-auto" max-height="calc(100vh - 64px)">
            <SideBar />
            <v-main>
                <router-view />
            </v-main>
            <Footer />
        </v-responsive>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store, { STORE_KEY } from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component({
    components: {
        NavBar: () => import('@/components/NavBar.vue'),
        Footer: () => import('@/components/Footer.vue'),
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
