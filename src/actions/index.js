import trackConstants from "../constants/track-constants";

const payload = [
    {
        id: 1,
        name: 'Enter Sandman'
    },
    {
        id: 2,
        name: 'Welcome Home'
    },
    {
        id: 3,
        name: 'Master of Puppets'
    },
    {
        id: 4,
        name: 'Fade to Black'
    },
    {
        id: 5,
        name: 'Nothing Else Matters'
    }
];

export const addtrack = () => {
    return {
        type: trackConstants.ADD_TRACK,
        value: track
    }
};

export const addTracks = () => {
    return {
        type: trackConstants.ADD_TRACKS
    }
};