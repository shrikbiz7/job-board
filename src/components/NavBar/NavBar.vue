<template>
    <v-app-bar elevate-on-scroll class="headerPrimary" :dark="this.storeModule.isDarkTheme">
        <v-app-bar-nav-icon v-if="viewRatio !== 'lg'" @click="handleDrawer()"></v-app-bar-nav-icon>
        <div style="width: 400px" class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/git.png"
                transition="scale-transition"
                maxWidth="45"
            />
            <v-toolbar-title>
                <h1><strong>GitHub</strong> Jobs</h1>
            </v-toolbar-title>
        </div>
        <v-tabs v-if="viewRatio === 'lg'">
            <v-tab as="router-link" to="/">Home Page</v-tab>
            <v-tab as="router-link" to="/search">Job Search</v-tab>
        </v-tabs>
        <div v-if="viewRatio === 'lg'" style="width: 200px">
            <span>{{ currentThemeText }} </span>
        </div>
        <div v-if="viewRatio === 'lg'" style="width: 100px" class="mt-6">
            <v-switch color="secondary" @change="handleThemeSwitch"></v-switch>
        </div>
        <!--  -->
    </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import store from '@/store/store';
import { getModule } from 'vuex-module-decorators';

@Component
export default class NavBar extends Vue {
    storeModule: any;
    // currentTheme: object = {};
    themeList: string[] = ['Light Theme', 'Dark Theme'];

    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    handleThemeSwitch() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        this.storeModule.changeStoreTheme();
    }

    get drawer() {
        return this.storeModule.isSideBar;
    }

    get viewRatio() {
        //xs, sm, md, lg, xl
        return this.$vuetify.breakpoint.name;
    }

    get currentThemeText() {
        return this.storeModule.isDarkTheme ? 'Dark Theme' : 'Light Theme';
    }
    handleDrawer() {
        this.storeModule.sideBarStatus();
    }
}
</script>
