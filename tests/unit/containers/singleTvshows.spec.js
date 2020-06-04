import { shallowMount } from "@vue/test-utils";
import Vue from "vue";
import Quasar from "quasar";
import VueRouter from "vue-router";
import store from '@/store'
import router from '@/router'
import SingleTvshows from '@/containers/SingleTvshows.vue'
import Episodes from "@/components/episodes.comp.vue";
import Cast from "@/components/cast.comp.vue";
import Crew from "@/components/crew.comp.vue";

const embd = {
  "episodes": [
    {
      "id": 4952,
      "url": "http://www.tvmaze.com/episodes/4952/game-of-thrones-1x01-winter-is-coming",
      "name": "Winter is Coming",
      "season": 1,
      "number": 1,
      "airdate": "2011-04-17",
      "airtime": "21:00",
      "airstamp": "2011-04-18T01:00:00+00:00",
      "runtime": 60,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/1/2668.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/2668.jpg"
      },
      "summary": "<p>Lord Eddard Stark, ruler of the North, is summoned to court by his old friend, King Robert Baratheon, to serve as the King's Hand. Eddard reluctantly agrees after learning of a possible threat to the King's life. Eddard's bastard son Jon Snow must make a painful decision about his own future, while in the distant east Viserys Targaryen plots to reclaim his father's throne, usurped by Robert, by selling his sister in marriage.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/4952"
        }
      }
    },
    {
      "id": 4953,
      "url": "http://www.tvmaze.com/episodes/4953/game-of-thrones-1x02-the-kingsroad",
      "name": "The Kingsroad",
      "season": 1,
      "number": 2,
      "airdate": "2011-04-24",
      "airtime": "21:00",
      "airstamp": "2011-04-25T01:00:00+00:00",
      "runtime": 60,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/1/2669.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/2669.jpg"
      },
      "summary": "<p>An incident on the Kingsroad threatens Eddard and Robert's friendship. Jon and Tyrion travel to the Wall, where they discover that the reality of the Night's Watch may not match the heroic image of it.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/4953"
        }
      }
    },
    {
      "id": 4954,
      "url": "http://www.tvmaze.com/episodes/4954/game-of-thrones-1x03-lord-snow",
      "name": "Lord Snow",
      "season": 1,
      "number": 3,
      "airdate": "2011-05-01",
      "airtime": "21:00",
      "airstamp": "2011-05-02T01:00:00+00:00",
      "runtime": 60,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/1/2671.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/2671.jpg"
      },
      "summary": "<p>Jon Snow attempts to find his place amongst the Night's Watch. Eddard and his daughters arrive at King's Landing.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/4954"
        }
      }
    },
    {
      "id": 4955,
      "url": "http://www.tvmaze.com/episodes/4955/game-of-thrones-1x04-cripples-bastards-and-broken-things",
      "name": "Cripples, Bastards, and Broken Things",
      "season": 1,
      "number": 4,
      "airdate": "2011-05-08",
      "airtime": "21:00",
      "airstamp": "2011-05-09T01:00:00+00:00",
      "runtime": 60,
      "image": {
        "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/1/2673.jpg",
        "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/2673.jpg"
      },
      "summary": "<p>Tyrion stops at Winterfell on his way home and gets a frosty reception from Robb Stark. Eddard's investigation into the death of his predecessor gets underway.</p>",
      "_links": {
        "self": {
          "href": "http://api.tvmaze.com/episodes/4955"
        }
      }
    }
  ],
  "cast": [
    {
      "person": {
        "id": 14072,
        "url": "http://www.tvmaze.com/people/14072/peter-dinklage",
        "name": "Peter Dinklage",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1969-06-11",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/74/186607.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/74/186607.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/14072"
          }
        }
      },
      "character": {
        "id": 15604,
        "url": "http://www.tvmaze.com/characters/15604/game-of-thrones-tyrion-lannister",
        "name": "Tyrion Lannister",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/63/158804.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/63/158804.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/characters/15604"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 14075,
        "url": "http://www.tvmaze.com/people/14075/kit-harington",
        "name": "Kit Harington",
        "country": {
          "name": "United Kingdom",
          "code": "GB",
          "timezone": "Europe/London"
        },
        "birthday": "1986-12-26",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/1/3229.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/3229.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/14075"
          }
        }
      },
      "character": {
        "id": 15607,
        "url": "http://www.tvmaze.com/characters/15607/game-of-thrones-jon-snow",
        "name": "Jon Snow",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/63/158800.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/63/158800.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/characters/15607"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 14076,
        "url": "http://www.tvmaze.com/people/14076/lena-headey",
        "name": "Lena Headey",
        "country": {
          "name": "Bermuda",
          "code": "BM",
          "timezone": "Atlantic/Bermuda"
        },
        "birthday": "1973-10-03",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/97/244409.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/97/244409.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/14076"
          }
        }
      },
      "character": {
        "id": 15608,
        "url": "http://www.tvmaze.com/characters/15608/game-of-thrones-queen-cersei-lannister",
        "name": "Queen Cersei Lannister",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/63/158806.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/63/158806.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/characters/15608"
          }
        }
      },
      "self": false,
      "voice": false
    },
    {
      "person": {
        "id": 14079,
        "url": "http://www.tvmaze.com/people/14079/emilia-clarke",
        "name": "Emilia Clarke",
        "country": {
          "name": "United Kingdom",
          "code": "GB",
          "timezone": "Europe/London"
        },
        "birthday": "1986-10-26",
        "deathday": null,
        "gender": "Female",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/54/136753.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/54/136753.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/14079"
          }
        }
      },
      "character": {
        "id": 15611,
        "url": "http://www.tvmaze.com/characters/15611/game-of-thrones-daenerys-targaryen",
        "name": "Daenerys Targaryen",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/63/158798.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/63/158798.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/characters/15611"
          }
        }
      },
      "self": false,
      "voice": false
    }
  ],
  "crew": [
    {
      "type": "Executive Producer",
      "person": {
        "id": 282,
        "url": "http://www.tvmaze.com/people/282/david-nutter",
        "name": "David Nutter",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": null,
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/182/455179.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/182/455179.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/282"
          }
        }
      }
    },
    {
      "type": "Director Of Photography",
      "person": {
        "id": 539,
        "url": "http://www.tvmaze.com/people/539/david-franco",
        "name": "David Franco",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": null,
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/67/169109.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/67/169109.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/539"
          }
        }
      }
    },
    {
      "type": "Creator",
      "person": {
        "id": 14097,
        "url": "http://www.tvmaze.com/people/14097/db-weiss",
        "name": "D.B. Weiss",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1971-04-23",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/58/146139.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/58/146139.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/14097"
          }
        }
      }
    },
    {
      "type": "Executive Producer",
      "person": {
        "id": 14097,
        "url": "http://www.tvmaze.com/people/14097/db-weiss",
        "name": "D.B. Weiss",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "birthday": "1971-04-23",
        "deathday": null,
        "gender": "Male",
        "image": {
          "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/58/146139.jpg",
          "original": "http://static.tvmaze.com/uploads/images/original_untouched/58/146139.jpg"
        },
        "_links": {
          "self": {
            "href": "http://api.tvmaze.com/people/14097"
          }
        }
      }
    }
  ]
}
describe('SingleTvshows.vue', () => {
  let singleTvshowsWrapper
  const tvshowsDetails = {
    "_embedded": {
      "episodes": [
        {
          "id": 11367,
          "url": "http://www.tvmaze.com/episodes/11367/the-americans-1x01-pilot",
          "name": "Pilot",
          "season": 1,
          "number": 1,
          "airdate": "2013-01-30",
          "airtime": "22:00",
          "airstamp": "2013-01-31T03:00:00+00:00",
          "runtime": 60,
          "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/22/56771.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/22/56771.jpg"
          },
          "summary": "<p>The Americans is a period drama about the complex marriage of two KGB spies posing as Americans in suburban Washington D.C. shortly after Ronald Reagan is elected President. The arranged marriage of Philip and Elizabeth Jennings grows more passionate and genuine by the day, but is constantly tested by the escalation of the Cold War. Tensions heighten upon the arrival of a new neighbor, Stan Beeman, an FBI agent.</p>",
          "_links": {
            "self": {
              "href": "http://api.tvmaze.com/episodes/11367"
            }
          }
        }
      ],
      "cast": [
        {
          "person": {
            "id": 29251,
            "url": "http://www.tvmaze.com/people/29251/keri-russell",
            "name": "Keri Russell",
            "country": {
              "name": "United States",
              "code": "US",
              "timezone": "America/New_York"
            },
            "birthday": "1976-03-23",
            "deathday": null,
            "gender": "Female",
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/4/10140.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/4/10140.jpg"
            },
            "_links": {
              "self": {
                "href": "http://api.tvmaze.com/people/29251"
              }
            }
          },
          "character": {
            "id": 40558,
            "url": "http://www.tvmaze.com/characters/40558/the-americans-elizabeth-jennings",
            "name": "Elizabeth Jennings",
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/56/140208.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/56/140208.jpg"
            },
            "_links": {
              "self": {
                "href": "http://api.tvmaze.com/characters/40558"
              }
            }
          },
          "self": false,
          "voice": false
        }
      ],
      "crew": [
        {
          "type": "Executive Producer",
          "person": {
            "id": 20,
            "url": "http://www.tvmaze.com/people/20/darryl-frank",
            "name": "Darryl Frank",
            "country": null,
            "birthday": null,
            "deathday": null,
            "gender": "Male",
            "image": {
              "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/52/132424.jpg",
              "original": "http://static.tvmaze.com/uploads/images/original_untouched/52/132424.jpg"
            },
            "_links": {
              "self": {
                "href": "http://api.tvmaze.com/people/20"
              }
            }
          }
        }
      ]
    }
  }
  beforeEach(() => {
    Vue.use(VueRouter);
    Vue.use(Quasar);
    singleTvshowsWrapper = shallowMount(SingleTvshows, {
      Vue,
      router,
      store,
      state: {
        tvshowsDetails: tvshowsDetails
      }
    });
    // singleTvshowsWrapper.setData(tvshowsDetails)
  });
  afterEach(() => {
    singleTvshowsWrapper.destroy();
  });

  it("is a Vue instance", () => {
    expect(singleTvshowsWrapper.isVueInstance).toBeTruthy();
  });
  it('it should have a q-page element', () => {
    expect(singleTvshowsWrapper.html()).toContain("div");
  });

  describe("it should render router view", () => {
    it('it should have a div', () => {
      expect(singleTvshowsWrapper.html()).toContain("div");
    });
    it("it should load the SingleTvshows view by default", () => {
      expect(SingleTvshows).toBeTruthy();
    });
  });

  describe("it should render router view", () => {
    it('it should have a div', () => {
      expect(singleTvshowsWrapper.html()).toContain("div");
    });
    it("it should load the Search view by default", () => {
      expect(Episodes).toBeTruthy();
    });
  });
  describe("it should render router view", () => {
    it('it should have a div', () => {
      expect(singleTvshowsWrapper.html()).toContain("div");
    });
    it("it should load the Search view by default", () => {
      expect(Cast).toBeTruthy();
    });
  });
  describe("it should render router view", () => {
    it('it should have a q-page', () => {
      expect(singleTvshowsWrapper.html()).toContain("div");
    });
    it("it should load the Search view by default", () => {
      expect(Crew).toBeTruthy();
    });
  });
})
