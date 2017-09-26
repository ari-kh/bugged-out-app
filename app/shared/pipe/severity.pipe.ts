import{ Pipe, PipeTransform } from '@angular/core';
import { SEVERITY } from '../constant/constant';

@Pipe({
    name: 'severity'
})
export class SeverityPipe implements PipeTransform{
    private severities = SEVERITY;

    transform (severityNum: number) {
        return this.severities[severityNum]
    }

}