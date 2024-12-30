const getAgePlugin = require('get-age')

export const getAge = (birthdate: string) => {
    if(!birthdate) return new Error('Birthdate is required');

    return getAgePlugin(birthdate);
}
