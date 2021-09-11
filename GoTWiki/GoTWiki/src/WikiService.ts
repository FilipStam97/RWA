import { catchError, combineAll, concatAll, debounceTime, filter, map, mergeMap, retry, scan, switchMap, take, takeUntil,toArray,zip, zipAll } from "rxjs/operators";
import { combineLatest, concat, forkJoin, merge } from 'rxjs';
import { from, interval, of, range, Observable, Subject, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { SERVER_CONNECTION } from "./Config";

export function getSearchResults(value: string): Observable<any> {
    return concat(
      ajax({
        url:`${SERVER_CONNECTION}/characters/characterName/${value}`,
        method: 'GET',
        headers : { 'Content-Type': 'application/json' },
    }).pipe(
        map(res => res.response)
    ),
    ajax({
        url:`${SERVER_CONNECTION}/characters/actorName/${value}`,
        method: 'GET',
        headers : { 'Content-Type': 'application/json' },
    }).pipe(
        map(res => res.response)
    )
).pipe(
    concatAll(),
    toArray()
)
}