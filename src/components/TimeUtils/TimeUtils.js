import {Component} from 'react';
import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

class TimeUtils extends Component {
    constructor(props) {
        super(props);

        momentDurationFormatSetup(moment);
    }

    static convertNanosecondsToTime(durationInNanoseconds) {
        const durationInMilliseconds = Math.floor(durationInNanoseconds / 1000000);

        return moment.duration(durationInMilliseconds, 'milliseconds').format('h[h] m[m] s[s]', {
            trim: true
        });
    }
}

export default TimeUtils;