import { Pipe, PipeTransform } from '@angular/core';

import { STATUS } from '../constant/constant';

@Pipe ({
    name:'status'
})
export class StatusPipe implements PipeTransform {
    private statuses = STATUS;
    transform(statusNum: number) {
        return this.statuses[statusNum];
    }

}