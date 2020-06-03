import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import CardComp from "@/components/common/card.comp.vue";


describe('card.comp.vue', () => {
    let cardCompWrapper
    let tvshow =
    {
        "id": 1,
        "url": "http://www.tvmaze.com/shows/1/under-the-dome",
        "name": "Under the Dome",
        "type": "Scripted",
        "language": "English",
        "genres": [
            "Drama",
            "Science-Fiction",
            "Thriller"
        ],
        "status": "Ended",
        "runtime": 60,
        "premiered": "2013-06-24",
        "officialSite": "http://www.cbs.com/shows/under-the-dome/",
        "schedule": {
            "time": "22:00",
            "days": [
                "Thursday"
            ]
        },
        "rating": {
            "average": 6.5
        },
        "weight": 97,
        "network": {
            "id": 2,
            "name": "CBS",
            "country": {
                "name": "United States",
                "code": "US",
                "timezone": "America/New_York"
            }
        },
        "webChannel": null,
        "externals": {
            "tvrage": 25988,
            "thetvdb": 264492,
            "imdb": "tt1553656"
        },
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg"
        },
        "summary": "<p><b>Under the Dome</b> is the story of a small town that is suddenly and inexplicably sealed off from the rest of the world by an enormous transparent dome. The town's inhabitants must deal with surviving the post-apocalyptic conditions while searching for answers about the dome, where it came from and if and when it will go away.</p>",
        "updated": 1573667713,
        "_links": {
            "self": {
                "href": "http://api.tvmaze.com/shows/1"
            },
            "previousepisode": {
                "href": "http://api.tvmaze.com/episodes/185054"
            }
        }
    }
    beforeEach(() => {
        Vue.use(VueRouter);
        Vue.use(Quasar);
        cardCompWrapper = shallowMount(CardComp, {
            Vue,
            router,
            store,
            propsData: {
                element: tvshow,
                showDetails: true,
                person: false,
                type: "Producer"
            }
        });
    });
    afterEach(() => {
        cardCompWrapper.destroy();
    });

    it("is a Vue instance", () => {
        expect(cardCompWrapper.isVueInstance).toBeTruthy();
    });
    it('it should have a q-card element', () => {
        expect(cardCompWrapper.find("q-card")).toMatchObject({ "selector": "q-card" });
    });

    describe("it should render router view", () => {
        it('it should have a q-card', () => {
            expect(cardCompWrapper.find("q-card")).toMatchObject({ "selector": "q-card" });
        });
        it("it should load the Home view by default", () => {
            expect(CardComp).toBeTruthy();
        });
    });
    it('get details of tvshow with id testing', () => {
        cardCompWrapper.vm.details(1)
        expect( typeof store.state.tvShows.tvshowsDetails).toBe('object')
    })
})
