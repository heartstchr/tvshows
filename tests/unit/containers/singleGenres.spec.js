import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import SingleGeneres from '@/containers/SingleGenres.vue'

describe('SingleGeneres.vue', () => {
    let singleGenresWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        singleGenresWrapper = shallowMount(SingleGeneres, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        singleGenresWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(singleGenresWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-page element', () => {
        expect(singleGenresWrapper.html()).toContain("q-page");
    });

    describe("it should render router view", () => {
        it('it should have a q-page', () => {
            expect(singleGenresWrapper.html()).toContain("q-page");
        });
        it("it should load the SingleGeneres view by default", () => {
            expect(SingleGeneres).toBeTruthy();
        });
    });
})
