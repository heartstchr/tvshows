import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store';
import router from '@/router';
import Search from '@/containers/Search.vue';

describe('Search.vue', () => {
    let searchWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        searchWrapper = shallowMount(Search, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        searchWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(searchWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-page element', () => {
        expect(searchWrapper.html()).toContain("q-page");
    });

    describe("it should render router view", () => {
        it('it should have a q-page', () => {
            expect(searchWrapper.html()).toContain("q-page");
        });
        it("it should load the Search view by default", () => {
            expect(Search).toBeTruthy();
        });
    });
})
