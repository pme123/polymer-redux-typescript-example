/// <reference types="polymer-ts" />
declare class MyApp extends polymer.Base {
    page: string;
    _routePageChanged(page: string): void;
    _pageChanged(page: string): void;
    _showPage404(): void;
}
