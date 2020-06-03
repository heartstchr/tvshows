import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import HorizontalComp from "@/components/horizontal.comp.vue";

describe('horizontal.comp.vue', () => {
    let horizontalCompWrapper
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        horizontalCompWrapper = shallowMount(HorizontalComp, {
            Vue,
            router,
            store,
            propsData: {
                genresTvShow: []
            }
        });
    });
    afterEach(() => {
        horizontalCompWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(horizontalCompWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-carousel element', () => {
        expect(horizontalCompWrapper.html()).toContain("q-carousel");
    });

    describe("it should render router view", () => {
        it('it should have a q-carousel', () => {
            expect(horizontalCompWrapper.html()).toContain("q-carousel");
        });
        it("it should load the Home view by default", () => {
            expect(HorizontalComp).toBeTruthy();
        });
    });
    it('get details of tvshow with id testing', () => {
        horizontalCompWrapper.vm.details(1)
        expect( typeof store.state.tvShows.genresTvShows).toBe('object')
    })
})
