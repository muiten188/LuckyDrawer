import * as action_types from '../actions/action_types';
const initState = {
    LuckyObject: {
        special: ["89370"],
        first: ["73044"],
        second: ["91392", "91392"],
        third: ["06858", "03361", "47744", "93298", "42624", "39990"],
        fourth: ["4773", "8133", "5864", "2201"],
        fifth: ["5540", "2870", "5563", "9150", "8172", "5631"],
        sixth: ["069", "936", "829"],
        seventh: ["26", "99", "13", "36"]
    }
};
const initState1 = {
    LuckyObject: {
        special: ["12345"],
        first: ["003300"],
        second: ["92322", "12312"],
        third: ["001293", "04371", "47744", "93298", "42624", "39990"],
        fourth: ["4773", "8133", "5864", "2201"],
        fifth: ["5540", "2870", "5563", "9150", "8172", "5631"],
        sixth: ["069", "936", "829"],
        seventh: ["12", "00", "21", "99"]
    }
};
export default function homeReducer(state = initState || {} || {}, action = {}) {
    switch (action.type) {
        case action_types.GETLUCKYDRAWER:
            let currentState;
            if (state.LuckyObject == initState.LuckyObject) {
                return {
                    ...state,
                    LuckyObject: initState1.LuckyObject
                }
            }
            else {
                return {
                    ...state,
                    LuckyObject: initState.LuckyObject
                }
            }

        default:
            return state;
    }
}