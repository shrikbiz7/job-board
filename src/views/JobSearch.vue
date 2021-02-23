<template>
    <v-app>
        <v-main :class="currentTheme.secondary">
            <v-container>
                <v-row>
                    <template v-for="n in 4">
                        <v-col v-for="j in 6" :key="`${n}${j}`" cols="3" md="4">
                            <v-sheet :color="currentTheme.tertiary" height="400"></v-sheet>
                        </v-col>
                    </template>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import store from '@/store/store';
import Vue from 'vue';
import Component from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';

@Component({
    components: {},
})
export default class JobSearch extends Vue {
    storeModule: any;
    created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
    }

    get currentTheme() {
        const { isDarkTheme, darkTheme, lightTheme } = this.storeModule;
        return isDarkTheme ? darkTheme : lightTheme;
    }
}
</script>
