import store from '@/store'
import TvshowModule from "../../../../src/store/modules/tvshows.module"
import * as types from '@/store/mutation-types'

describe('tvshows.module.js', () => {
    const genres = [
        "Drama",
        "Action",
        "Comedy",
        "Romance",
        "Horror",
        "Family"
    ]
    describe("tvshow getters", () => {
        it("returns tvshows", () => {
            const actual = store.getters.tvshows
            expect(typeof actual).toEqual("object")
        })
        it("returns uniqueGenres", () => {
            const actual = store.getters.allGenres
            expect(actual).toEqual(genres)
        })
        it("returns seasons", () => {
            const actual = store.getters.seasons
            expect(typeof actual).toEqual("object")
        })
        it("returns casts", () => {
            const actual = store.getters.casts
            expect(typeof actual).toEqual("object")
        })
        it("returns crews", () => {
            const actual = store.getters.crews
            expect(typeof actual).toEqual("object")
        })
        it("returns tabs", () => {
            const actual = store.getters.tabs
            expect(actual).toEqual([])
        })
    })

    describe("tvshow mutation", () => {
        const state = {
            tvshows: [],
            popularTvShows:[],
            uniqueGenres:[],
            genresTvShows: {},
            tabs: [],
            searchedShows: [],
            seasons: [],
            casts: [],
            crews: [],
            tvshowsDetails: {}
        }
        it("FETCH_TV_SHOWS mutation", () => {
            const tvshows= [
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
                },
                {
                  "id": 2,
                  "url": "http://www.tvmaze.com/shows/2/person-of-interest",
                  "name": "Person of Interest",
                  "type": "Scripted",
                  "language": "English",
                  "genres": [
                    "Action",
                    "Crime",
                    "Science-Fiction"
                  ],
                  "status": "Ended",
                  "runtime": 60,
                  "premiered": "2011-09-22",
                  "officialSite": "http://www.cbs.com/shows/person_of_interest/",
                  "schedule": {
                    "time": "22:00",
                    "days": [
                      "Tuesday"
                    ]
                  },
                  "rating": {
                    "average": 8.9
                  },
                  "weight": 94,
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
                    "tvrage": 28376,
                    "thetvdb": 248742,
                    "imdb": "tt1839578"
                  },
                  "image": {
                    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
                    "original": "http://static.tvmaze.com/uploads/images/original_untouched/163/407679.jpg"
                  },
                  "summary": "<p>You are being watched. The government has a secret system, a machine that spies on you every hour of every day. I know because I built it. I designed the Machine to detect acts of terror but it sees everything. Violent crimes involving ordinary people. People like you. Crimes the government considered \"irrelevant\". They wouldn't act so I decided I would. But I needed a partner. Someone with the skills to intervene. Hunted by the authorities, we work in secret. You'll never find us. But victim or perpetrator, if your number is up, we'll find you.</p>",
                  "updated": 1588773151,
                  "_links": {
                    "self": {
                      "href": "http://api.tvmaze.com/shows/2"
                    },
                    "previousepisode": {
                      "href": "http://api.tvmaze.com/episodes/659372"
                    }
                  }
                }
              ]
            TvshowModule.mutations[types.FETCH_TV_SHOWS](state, tvshows)
            expect(state.tvshows).toEqual(tvshows)           
        })
        it("FETCH_TV_SHOWS_DETAILS mutation", () => {
            const tvshowsDetails = {
                "id": 157,
                "url": "http://www.tvmaze.com/shows/157/the-americans",
                "name": "The Americans",
                "type": "Scripted",
                "language": "English",
                "genres": [
                    "Drama",
                    "Espionage"
                ],
                "status": "Ended",
                "runtime": 60,
                "premiered": "2013-01-30",
                "officialSite": "http://www.fxnetworks.com/theamericans",
                "schedule": {
                    "time": "22:00",
                    "days": [
                        "Wednesday"
                    ]
                },
                "rating": {
                    "average": 8.6
                },
                "weight": 95,
                "network": {
                    "id": 13,
                    "name": "FX",
                    "country": {
                        "name": "United States",
                        "code": "US",
                        "timezone": "America/New_York"
                    }
                },
                "webChannel": null,
                "externals": {
                    "tvrage": 30449,
                    "thetvdb": 261690,
                    "imdb": "tt2149175"
                },
                "image": {
                    "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/146/366911.jpg",
                    "original": "http://static.tvmaze.com/uploads/images/original_untouched/146/366911.jpg"
                },
                "summary": "<p><b>The Americans</b> is a period drama about the complex marriage of two KGB spies posing as Americans in suburban Washington D.C. shortly after Ronald Reagan is elected President.</p>",
                "updated": 1573501309,
                "_links": {
                    "self": {
                        "href": "http://api.tvmaze.com/shows/157"
                    },
                    "previousepisode": {
                        "href": "http://api.tvmaze.com/episodes/1384837"
                    }
                },
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
            const tabsResult = [
                { name: "episodes", icon: "ondemand_video" },
                { name: "cast", icon: "cast" },
                { name: "crew", icon: "streetview" }
            ]
            const castsResult = tvshowsDetails._embedded.cast
            const crewsResult = tvshowsDetails._embedded.crew
            const seasonsResult = tvshowsDetails._embedded.episodes.reduce(function (r, a) {
                r[a.season] = r[a.season] || [];
                r[a.season].push(a);
                return r;
            }, Object.create(null))
            const tvshowsDetailsResult = tvshowsDetails
            TvshowModule.mutations[types.FETCH_TV_SHOWS_DETAILS](state, tvshowsDetails)
            expect(state.tabs).toEqual(tabsResult)
            expect(state.casts).toEqual(castsResult)
            expect(state.crews).toEqual(crewsResult)
            expect(state.seasons).toEqual(seasonsResult)
            expect(state.tvshowsDetails).toEqual(tvshowsDetailsResult)
        })
        it("SEARCHED_TV_SHOWS mutation", () => {
            const shows = [
                {
                    "score": 26.002966,
                    "show": {
                        "id": 4,
                        "url": "http://www.tvmaze.com/shows/4/arrow",
                        "name": "Arrow",
                        "type": "Scripted",
                        "language": "English",
                        "genres": [
                            "Drama",
                            "Action",
                            "Science-Fiction"
                        ],
                        "status": "Ended",
                        "runtime": 60,
                        "premiered": "2012-10-10",
                        "officialSite": "http://www.cwtv.com/shows/arrow",
                        "schedule": {
                            "time": "21:00",
                            "days": [
                                "Tuesday"
                            ]
                        },
                        "rating": {
                            "average": 7.4
                        },
                        "weight": 98,
                        "network": {
                            "id": 5,
                            "name": "The CW",
                            "country": {
                                "name": "United States",
                                "code": "US",
                                "timezone": "America/New_York"
                            }
                        },
                        "webChannel": null,
                        "externals": {
                            "tvrage": 30715,
                            "thetvdb": 257655,
                            "imdb": "tt2193021"
                        },
                        "image": {
                            "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
                            "original": "http://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg"
                        },
                        "summary": "<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
                        "updated": 1591210321,
                        "_links": {
                            "self": {
                                "href": "http://api.tvmaze.com/shows/4"
                            },
                            "previousepisode": {
                                "href": "http://api.tvmaze.com/episodes/1744752"
                            }
                        }
                    }
                }
            ]
            const result = [
                {
                    "id": 4,
                    "url": "http://www.tvmaze.com/shows/4/arrow",
                    "name": "Arrow",
                    "type": "Scripted",
                    "language": "English",
                    "genres": [
                        "Drama",
                        "Action",
                        "Science-Fiction"
                    ],
                    "status": "Ended",
                    "runtime": 60,
                    "premiered": "2012-10-10",
                    "officialSite": "http://www.cwtv.com/shows/arrow",
                    "schedule": {
                        "time": "21:00",
                        "days": [
                            "Tuesday"
                        ]
                    },
                    "rating": {
                        "average": 7.4
                    },
                    "weight": 98,
                    "network": {
                        "id": 5,
                        "name": "The CW",
                        "country": {
                            "name": "United States",
                            "code": "US",
                            "timezone": "America/New_York"
                        }
                    },
                    "webChannel": null,
                    "externals": {
                        "tvrage": 30715,
                        "thetvdb": 257655,
                        "imdb": "tt2193021"
                    },
                    "image": {
                        "medium": "http://static.tvmaze.com/uploads/images/medium_portrait/213/534017.jpg",
                        "original": "http://static.tvmaze.com/uploads/images/original_untouched/213/534017.jpg"
                    },
                    "summary": "<p>After a violent shipwreck, billionaire playboy Oliver Queen was missing and presumed dead for five years before being discovered alive on a remote island in the Pacific. He returned home to Starling City, welcomed by his devoted mother Moira, beloved sister Thea and former flame Laurel Lance. With the aid of his trusted chauffeur/bodyguard John Diggle, the computer-hacking skills of Felicity Smoak and the occasional, reluctant assistance of former police detective, now beat cop, Quentin Lance, Oliver has been waging a one-man war on crime.</p>",
                    "updated": 1591210321,
                    "_links": {
                        "self": {
                            "href": "http://api.tvmaze.com/shows/4"
                        },
                        "previousepisode": {
                            "href": "http://api.tvmaze.com/episodes/1744752"
                        }
                    }
                }
            ]
            TvshowModule.mutations[types.SEARCHED_TV_SHOWS](state, shows)
            expect(state.searchedShows).toEqual(result)
        })
    })

})
