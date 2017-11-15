import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    store(key: string, value: string, onlySession: boolean) {
        if (typeof(Storage) !== 'undefined') {
            if (onlySession) {
                this.setSessionStorage(key, value);
            } else {
                this.setLocalStorage(key, value);
            }
        } else {
            // falback to cookies
            this.setValueCookie(key, value);
        }
    }

    retrive(key: string, fromSession: boolean): string {
        if (typeof(Storage) !== 'undefined') {
            if (fromSession) {
                return this.getSessionStorage(key);
            } else {
                return this.getLocalStorage(key);
            }
        } else {
            return this.getValueCookie(key);
        }
    }

    delete(key: string, fromSession: boolean) {
        if (typeof(Storage) !== 'undefined') {
            if (fromSession) {
                this.removeSessionlStorage(key);
            } else {
                this.removeLocalStorage(key);
            }
        } else {
            this.removeValueCookie(key);
        }
    }

    deleteAll() {
        if (typeof(Storage) !== 'undefined') {
            localStorage.clear();
            sessionStorage.clear();
        }

        let cookies = document.cookie.split(";");
        
        for (let i = 0; i < cookies.length; i++) {
            let cookie = cookies[i];
            let eqPos = cookie.indexOf("=");
            let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }
    }

    private setLocalStorage(key: string, value: string) {
        localStorage.setItem(key, value);
    }

    private getLocalStorage(key: string) {
        return localStorage.getItem(key);
    }

    private removeLocalStorage(key: string) {
        localStorage.removeItem(key);
    }

    private setSessionStorage(key: string, value: string) {
        sessionStorage .setItem(key, value);
    }

    private getSessionStorage(key: string) {
        return sessionStorage .getItem(key);
    }

    private removeSessionlStorage(key: string) {
        sessionStorage .removeItem(key);
    }

    private setValueCookie(key: string, value: string, day: number = 1) {
        const expireDate = new Date();
        expireDate.setSeconds((expireDate.getSeconds() + day * 24 * 60 * 60 * 1000));
        document.cookie = key + '=' + value + ';path=/;expires=' + expireDate.toUTCString();
    }

    private getValueCookie(key: string) {
        const nameEQ = key + '=';
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length, c.length);
            }
        }

        return null;
    }

    private removeValueCookie(key: string) {
        this.setValueCookie(key, '', -1);
    }

}
