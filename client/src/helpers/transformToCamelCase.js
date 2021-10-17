export const transformToCamelCase = data => (
    data.map(oldObject => {
        const newObject = {};

        for (const key in oldObject) {
            const newKey = key.split('_')
                .map((word, index) => index > 0 ? word[0].toUpperCase() + word.slice(1) : word).join('');

            newObject[newKey] = oldObject[key];
        }

        return newObject;
    }));
