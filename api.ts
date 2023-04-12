/* tslint:disable */
/* eslint-disable */
/**
 * Weather
 * \"Internal API endpoint for Rumbo to get weather info.\" 
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface ClientErrorResponse
 */
export interface ClientErrorResponse {
    /**
     * Message describing the reason(s) the service deems the request from the client as invalid.
     * @type {string}
     * @memberof ClientErrorResponse
     */
    'message'?: string;
}
/**
 * 
 * @export
 * @interface Day
 */
export interface Day {
    /**
     * The date for which the daily values are given
     * @type {string}
     * @memberof Day
     */
    'date'?: string;
    /**
     * The URL for the weather icon to display.
     * @type {string}
     * @memberof Day
     */
    'iconUrl'?: string;
    /**
     * The Hex code for the weather background colour gradient to display.
     * @type {string}
     * @memberof Day
     */
    'gradientColor'?: string;
    /**
     * 
     * @type {DayTemperature}
     * @memberof Day
     */
    'temperature'?: DayTemperature;
    /**
     * The percentage chance that it will rain that day
     * @type {number}
     * @memberof Day
     */
    'chanceOfRain'?: number;
    /**
     * The humidity in the air expressed as a percentage, for the day.
     * @type {number}
     * @memberof Day
     */
    'humidity'?: number;
    /**
     * The uv factor for the day
     * @type {number}
     * @memberof Day
     */
    'uv'?: number;
}
/**
 * 
 * @export
 * @interface DayTemperature
 */
export interface DayTemperature {
    /**
     * 
     * @type {Temperature}
     * @memberof DayTemperature
     */
    'minimum'?: Temperature;
}
/**
 * 
 * @export
 * @interface Hourly
 */
export interface Hourly {
    /**
     * The date and hour for which the forecast data is given. This is given in UTC.
     * @type {string}
     * @memberof Hourly
     */
    'datetime'?: string;
    /**
     * 
     * @type {Temperature}
     * @memberof Hourly
     */
    'temperature'?: Temperature;
    /**
     * The URL for the weather icon to display.
     * @type {string}
     * @memberof Hourly
     */
    'iconUrl'?: string;
    /**
     * The percentage chance that it will rain that day
     * @type {number}
     * @memberof Hourly
     */
    'chanceOfRain'?: number;
}
/**
 * The weather conditions at the time (or within an hour of) the API call being made
 * @export
 * @interface Now
 */
export interface Now {
    /**
     * The URL for the weather icon to display.
     * @type {string}
     * @memberof Now
     */
    'iconUrl'?: string;
    /**
     * The Hex code for the weather background colour gradient to display.
     * @type {string}
     * @memberof Now
     */
    'gradientColor'?: string;
    /**
     * 
     * @type {Temperature}
     * @memberof Now
     */
    'temperature'?: Temperature;
}
/**
 * 
 * @export
 * @interface ServerErrorResponse
 */
export interface ServerErrorResponse {
    /**
     * Message describing the reason(s) the service can\'t complete the request. Includes the status code from the downstream API as well as their status message.
     * @type {string}
     * @memberof ServerErrorResponse
     */
    'message'?: string;
}
/**
 * The degrees and unit of temperature
 * @export
 * @interface Temperature
 */
export interface Temperature {
    /**
     * The value of the temperature
     * @type {number}
     * @memberof Temperature
     */
    'degrees'?: number;
    /**
     * The unit in which the temperature was reported. Celsius or Fahrenheit.
     * @type {string}
     * @memberof Temperature
     */
    'unit'?: string;
}
/**
 * 
 * @export
 * @interface WeatherForecast
 */
export interface WeatherForecast {
    /**
     * 
     * @type {Now}
     * @memberof WeatherForecast
     */
    'now'?: Now | null;
    /**
     * A list of days with daily weather values for each.
     * @type {Array<Day>}
     * @memberof WeatherForecast
     */
    'day'?: Array<Day> | null;
    /**
     * A list of forecast for each hour of the day that the API request was made and the next day
     * @type {Array<Hourly>}
     * @memberof WeatherForecast
     */
    'hourly'?: Array<Hourly> | null;
    /**
     * The PM2.5 value for the day that the API request was made
     * @type {number}
     * @memberof WeatherForecast
     */
    'airQuality'?: number | null;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * \"Get weather details based on provided H3 index\" 
         * @param {string} h3Index \&quot;The h3 index for which weather is requested. The responsibility falls on the client side to come up with  \&#39;good\&#39; h3 indeces to make caching work and also know when to update the weather widget should the device\&#39;s  location change enough.\&quot; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWeatherByH3Index: async (h3Index: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'h3Index' is not null or undefined
            assertParamExists('getWeatherByH3Index', 'h3Index', h3Index)
            const localVarPath = `/weather/v1/forecast/{h3Index}`
                .replace(`{${"h3Index"}}`, encodeURIComponent(String(h3Index)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication firebase required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "firebase", [], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * \"Get weather details based on provided H3 index\" 
         * @param {string} h3Index \&quot;The h3 index for which weather is requested. The responsibility falls on the client side to come up with  \&#39;good\&#39; h3 indeces to make caching work and also know when to update the weather widget should the device\&#39;s  location change enough.\&quot; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWeatherByH3Index(h3Index: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WeatherForecast>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWeatherByH3Index(h3Index, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * \"Get weather details based on provided H3 index\" 
         * @param {string} h3Index \&quot;The h3 index for which weather is requested. The responsibility falls on the client side to come up with  \&#39;good\&#39; h3 indeces to make caching work and also know when to update the weather widget should the device\&#39;s  location change enough.\&quot; 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWeatherByH3Index(h3Index: string, options?: any): AxiosPromise<WeatherForecast> {
            return localVarFp.getWeatherByH3Index(h3Index, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * \"Get weather details based on provided H3 index\" 
     * @param {string} h3Index \&quot;The h3 index for which weather is requested. The responsibility falls on the client side to come up with  \&#39;good\&#39; h3 indeces to make caching work and also know when to update the weather widget should the device\&#39;s  location change enough.\&quot; 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getWeatherByH3Index(h3Index: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).getWeatherByH3Index(h3Index, options).then((request) => request(this.axios, this.basePath));
    }
}


