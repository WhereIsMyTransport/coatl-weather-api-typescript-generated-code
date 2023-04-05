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

import { RequestFile } from './models';
import { Day } from './day';
import { Hourly } from './hourly';
import { Now } from './now';

export class TwoDayForecast {
    'now'?: Now;
    /**
    * A list of days with daily weather values for each.
    */
    'day'?: Array<Day>;
    /**
    * A list of forecast for each hour of the day that the API request was made and the next day
    */
    'hourly'?: Array<Hourly>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "now",
            "baseName": "now",
            "type": "Now"
        },
        {
            "name": "day",
            "baseName": "day",
            "type": "Array<Day>"
        },
        {
            "name": "hourly",
            "baseName": "hourly",
            "type": "Array<Hourly>"
        }    ];

    static getAttributeTypeMap() {
        return TwoDayForecast.attributeTypeMap;
    }
}

