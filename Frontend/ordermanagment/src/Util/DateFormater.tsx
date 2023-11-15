import {format} from 'date-fns';
import {DATE_FORMAT,DATE_FORMAT_DATE_PICKER} from '../types/Constants';


export function formatDATE(dateValue: Date) {
    if(!dateValue){
        return format(new Date(), DATE_FORMAT);

        return format(new Date(dateValue), DATE_FORMAT);
    }
}

export function FormatDatePicker(dateValue: Date){

    if(!dateValue){
        return format(new Date(), DATE_FORMAT_DATE_PICKER);

        return format(new Date(dateValue), DATE_FORMAT_DATE_PICKER);
    }

}