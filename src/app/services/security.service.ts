/**
 * https://github.com/google/google-api-javascript-client
 */

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    private clientSettings = {
        apiKey: 'AIzaSyCfi84XC0edw9RkxOspihzDh3MIYT4F3CM',
        clientId: '131910832628-2hnl92lqenqpom4jo0r5hh7bcqovc4af.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/spreadsheets',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    };

    private inited = false;

    public get isSignedIn() {
        return gapi.auth2.getAuthInstance().isSignedIn.get();
    }

    public get user(): gapi.auth2.BasicProfile {
        return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    }

    constructor() { }

    public init(): Promise<void> {
        if (this.inited)
            return Promise.resolve();

        return new Promise(resolve => gapi.load('client:auth2', resolve))
            .then(() => gapi.client.init(this.clientSettings))
            .then(() => {
                this.inited = true;
                return Promise.resolve();
            });
    }

    public signIn(): Promise<gapi.auth2.GoogleUser> {
        if (this.inited)
            return gapi.auth2.getAuthInstance().signIn({ ux_mode: 'redirect', redirect_uri: window.location.href });

        throw 'can\'t signIn SecurityService not inited';
    }

    public signOut(): any {
        if (this.inited)
            return gapi.auth2.getAuthInstance().signOut();

        throw 'can\'t signOut: SecurityService not inited';
    }
}
