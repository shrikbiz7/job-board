<template>
    <v-app-bar app :color="currentTheme.primary" dark>
        <div style="width: 400px" class="d-flex align-center">
            <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                src="@/assets/git.png"
                transition="scale-transition"
                maxWidth="45"
            />
            <h1><strong>GitHub</strong> Jobs</h1>
        </div>
        <v-tabs>
            <v-tab as="router-link" to="/">Home Page</v-tab>
            <v-tab as="router-link" to="/search">Job Search</v-tab>
        </v-tabs>
        <div style="width: 200px">
            <span>{{ currentThemeText }}</span>
        </div>
        <div style="width: 100px" class="mt-6">
            <v-switch @change="handleThemeSwitch" class=""></v-switch>
        </div>
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
        this.storeModule.changeStoreTheme();
    }

    get currentTheme() {
        const { isDarkTheme, darkTheme, lightTheme } = this.storeModule;
        return isDarkTheme ? darkTheme : lightTheme;
    }

    get currentThemeText() {
        return this.storeModule.isDarkTheme ? 'Dark Theme' : 'Light Theme';
    }
}
</script>
