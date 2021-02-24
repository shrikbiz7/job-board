<template>
    <div class="primary">
        <table>
            <thead>
                <tr>
                    <th>Logo</th>
                    <th>Company Name</th>
                    <th>Title</th>
                    <th>Location</th>
                    <th>Type</th>
                    <th>URL</th>
                    <th>Created On</th>
                    <th>id</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="{ company, created_at, title, type, location, id, url, company_logo } in apiData" :key="id">
                    <td>
                        <v-img
                            alt="Vuetify Logo"
                            class="shrink mr-2"
                            contain
                            :src="company_logo"
                            transition="scale-transition"
                            maxWidth="45"
                        />
                    </td>
                    <td>{{ company }}</td>
                    <td>{{ title }}</td>
                    <td>{{ location }}</td>
                    <td>{{ type }}</td>
                    <td>{{ url }}</td>
                    <td>{{ created_at }}</td>
                    <td>{{ id }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';

@Component
export default class HomePage extends Vue {
    storeModule: any;
    apiData: any;

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
        this.storeModule.getGitJobData();
        this.apiData = this.storeModule.gitJobData;
    }
}
</script>
