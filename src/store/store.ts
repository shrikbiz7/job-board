import { Action, Module, Mutation, MutationAction, VuexModule } from 'vuex-module-decorators';
import { DarkTheme, LightTheme, ThemeList } from '@/constants/theme';

export const STORE_KEY = '$_jobsearch';

@Module({
    namespaced: true,
    name: STORE_KEY,
})
export default class AppStore extends VuexModule {
    darkTheme: object = DarkTheme;
    lightTheme: object = LightTheme;
    isDarkTheme = false;

    @Mutation
    changeStoreTheme() {
        this.isDarkTheme = !this.isDarkTheme;
    }
}
