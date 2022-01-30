import * as json from '../mock-data/segments.json';

export const useSegments = () => {
    const data = json.default;

    return Array.isArray(data) ? data : [];
};

