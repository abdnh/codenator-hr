import { Country, State, City } from 'country-state-city';

export function getAllCountries() {
    return Object.fromEntries(Country.getAllCountries().map(country => {
        return [country.name, {
            isoCode: country.isoCode,
            name: country.name,
            phonecode: country.phonecode,
            flag: country.flag,
        }];
    }));
}

export function getStates(countryCode) {
    return Object.fromEntries(State.getStatesOfCountry(countryCode).map(state => {
        return [state.name, {
            name: state.name,
            isoCode: state.isoCode,
        }];
    }));
}

export function getCities(countryCode, stateCode) {
    return City.getCitiesOfState(countryCode, stateCode).map(city => city.name);
}
