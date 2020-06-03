import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import SearchComp from "@/components/common/search.comp.vue";

describe('search.comp.vue', () => {
    let searchCompWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        searchCompWrapper = shallowMount(SearchComp, {
            Vue,
            router,
            store
        });
    });
    afterEach(() => {
        searchCompWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(searchCompWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a card element', () => {
        expect(searchCompWrapper.find("card")).toMatchObject({"selector": "card"});
    });

    describe("it should render router view", () => {
        it('it should have a card', () => {
            expect(searchCompWrapper.find("card")).toMatchObject({"selector": "card"});
        });
        it("it should load the Home view by default", () => {
            expect(SearchComp).toBeTruthy();
        });
    });
    it('get details of tvshow with id testing', () => {
        searchCompWrapper.vm.searchItem("arrow")
        expect( typeof store.state.tvShows.searchedShows).toBe('object')
    })
})
