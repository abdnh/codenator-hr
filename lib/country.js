import { Country, State, City } from 'country-state-city';

export function getAllCountries() {
    // TODO: use Object.fromEntries instead
    const countries = {};
    Country.getAllCountries().forEach(country => {
        countries[country.name] = {
            isoCode: country.isoCode,
            name: country.name,
            phonecode: country.phonecode,
            flag: country.flag,
        };
    });
    return countries;
}

export function getStates(countryCode) {
    const states = Object.fromEntries(State.getStatesOfCountry(countryCode).map(state => {
        return [state.name, {
            name: state.name,
            isoCode: state.isoCode,
        }];
    }));
    return states;
}

export function getCities(countryCode, stateCode) {
    return City.getCitiesOfState(countryCode, stateCode).map(city => city.name);
}

// export function getStatesAndCities(countryCode) {
//     const states = Object.fromEntries(State.getStatesOfCountry(countryCode).map(state => {
//         return [state.name, {
//             name: state.name,
//             isoCode: state.isoCode,
//             cities: City.getCitiesOfState(countryCode, state.isoCode).map(city => city.name),
//         }];
//     }));
//     return states;
// }
