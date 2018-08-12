import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

class TimeUtils {
    constructor() {
        momentDurationFormatSetup(moment);
    }

    static convertNanosecondsToTime(durationInNanoseconds) {
        const durationInMilliseconds = Math.floor(durationInNanoseconds / 1000000);

        return moment.duration(durationInMilliseconds, 'milliseconds').format('h[h] m[m] s[s]', {
            trim: true
        });
    }

    static getWidthBasedOnTimeRate(timeRate) {
        return `${timeRate * 30}vw`;
    }
}

export default TimeUtils;