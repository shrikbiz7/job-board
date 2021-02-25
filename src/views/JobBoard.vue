<template>
    <v-app>
        <v-main v-if="true" class="primary">
            <v-container>
                <v-card elevation="4">
                    <!-- search area -->
                    <SearchArea @searchData="handleSearch($event)" @clearSearch="handlClearSearch" />
                </v-card>
            </v-container>
            <v-container v-if="jobData.length">
                <v-row justify="center" class=" mb-10">
                    <v-col v-for="job in jobData" :key="job.id" cols="auto">
                        <v-card elevation="10">
                            <JobDetail :jobData="job" />
                        </v-card>
                    </v-col>
                </v-row>
                <v-row v-if="isShowMore" justify="center" class=" mb-10">
                    <v-col cols="auto">
                        <v-btn @click="addJobData" color="accent">
                            View More
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/store';

@Component({
    components: {
        JobDetail: () => import('@/components/JobDetail.vue'),
        SearchArea: () => import('@/components/SearchArea.vue'),
    },
})
export default class JobBoard extends Vue {
    storeModule: any;
    jobList: any[] = [];
    numberOfJobList = 9;
    isShowMore = true;
    apiData: any[] = [];

    async created() {
        if (!this.storeModule) this.storeModule = getModule(store, this.$store);
        await this.storeModule.getGitJobData();
        this.apiData = this.storeModule.gitJobData;
    }

    async mounted() {
        this.apiData = await this.storeModule.gitJobData;
    }

    get isDataAvail(): boolean {
        return this.jobData.length ? true : false;
    }

    get jobData() {
        const list: any[] = [];
        if (this.apiData.length) {
            for (const index in this.apiData) if (Number(index) < this.numberOfJobList) list.push(this.apiData[index]);
        }
        this.isShowMore = this.apiData.length > list.length;
        return list;
    }

    addJobData() {
        this.numberOfJobList += this.numberOfJobList;
    }

    handleSearch({ position, location }: any) {
        this.apiData = this.storeModule.gitJobData
            .filter((job: any) => {
                return (
                    job.company.toLowerCase().includes(position.toLowerCase()) ||
                    job.description.toLowerCase().includes(position.toLowerCase()) ||
                    job.title.toLowerCase().includes(position.toLowerCase()) ||
                    job.type.toLowerCase().includes(position.toLowerCase())
                );
            })
            .filter((job: any) => job.location.toLowerCase().includes(location.toLowerCase()));
        this.jobData;
    }

    handlClearSearch() {
        this.apiData = this.storeModule.gitJobData;
    }
}
</script>
<style lang="scss" scoped></style>