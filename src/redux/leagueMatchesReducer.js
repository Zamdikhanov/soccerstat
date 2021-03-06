import { API } from './../API/API';

const SET_LEAGUE_MATCHES = 'SET_LEAGUE_MATCHES';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
    count: 205,
    filters: {},
    competition: {
        id: 2001,
        area: {
            id: 2077,
            name: "повторите через 30-60 секунд"
        },
        name: "не загружено",
        code: "CL",
        plan: "TIER_ONE",
        lastUpdated: "не загружено"
    },
    matches: [{
        id: 328846,
        season: {
            id: 734,
            startDate: "2021-06-26",
            endDate: "2022-05-22",
            currentMatchday: 7
        },
        utcDate: "не загружено",
        status: "не загружено",
        matchday: null,
        stage: "PRELIMINARY_ROUND",
        group: null,
        lastUpdated: "не загружено",
        odds: {
            msg: "Activate Odds-Package in User-Panel to retrieve odds."
        },
        score: {
            winner: "AWAY_TEAM",
            duration: "REGULAR",
            fullTime: {
                homeTeam: '',
                awayTeam: ''
            },
            halfTime: {
                homeTeam: 0,
                awayTeam: 0
            },
            extraTime: {
                homeTeam: null,
                awayTeam: null
            },
            penalties: {
                homeTeam: null,
                awayTeam: null
            }
        },
        homeTeam: {
            id: 8166,
            name: "не загружено"
        },
        awayTeam: {
            id: 8912,
            name: "не загружено"
        },
        referees: []
    }, ],
    isLoading: false,
}

const leagueMatchesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LEAGUE_MATCHES:
            return ({
                ...state,
                ...action.matches
            });
        case TOGGLE_IS_LOADING:
            return ({
                ...state,
                isLoading: action.isLoading,
            });

        default:
            return state;
    }
}


export const setLeagueMatches = (matches) => ({ type: SET_LEAGUE_MATCHES, matches: matches });
export const toogleIsLoadingLeagueMatches = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading: isLoading });

export const requestLeagueMatches = (id) => {
    return (dispatch) => {
        dispatch(toogleIsLoadingLeagueMatches(true));
        API.getLeagueMatches(id).then(data => {
            dispatch(setLeagueMatches(data));
            dispatch(toogleIsLoadingLeagueMatches(false));
        });
    }
}

export default leagueMatchesReducer;