import { Injectable, signal, Signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {
private signals = new Map<string, Signal<any>>();
  get<T>(key:string):T |null;
  set<T>(key:string, value:T): void;
  remove(key:string):void;

  clear(): void;
  signal<T>(key: string, initial?: T): Signal<T | null>;


  constructor() { }
}

