import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
    'providedIn':'root'
})

export class communicationService{
    user:BehaviorSubject<any> = new BehaviorSubject('rohini');
    $user:Observable<any>;
    constructor(){
        this.$user = this.user.asObservable();
    }


    updateUser(name){
        this.user.next(name);
    }
    endSubject(){
        this.user.complete();
    }
}