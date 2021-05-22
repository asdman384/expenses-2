import { Injectable } from "@angular/core";

@Injectable()
export abstract class StorageService {
    abstract get<T>(key: new () => T): T;
    abstract put<T>(key: new () => T, value: T): void;
}