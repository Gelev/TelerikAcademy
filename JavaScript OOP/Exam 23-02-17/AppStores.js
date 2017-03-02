function solve() {
    
    class App {
        constructor(name, description, version, rating) {
            this.name = name;
            this.description = description;
            this.version = version;
            this.rating = rating;
        }
 
        set name(value) {
            // name - a string with length between 1 and 24 latin letters, numbers and whitespace
            let pattern = /^[a-zA-Z0-9 ]+$/;
            if (typeof value !== 'string') {
                throw 'Name should be a string';
            } else if (value.length && (value.length < 1 || 24 < value.length)) {
                throw 'Name should be with length between 1 and 24 latin letters';
            } else if (!value.match(pattern)) {
                throw 'Only latin letters, numbers and space are allowed';
            }
 
            this._name = value;
        }
        get name() { return this._name; }
 
        set description(value) {
            if (typeof value !== 'string') {
                throw 'Description should be a string';
            }
 
            this._description = value;
        }
        get description() { return this._description; }
 
        set version(value) {
            if (typeof value !== 'number') {
                throw 'Version should be a number';
            } else if (value <= 0) {
                throw 'Version should be a positive';
            }
 
            if (this._version && this._version >= value) {
                throw 'New version should be greater than old one';
            }
 
            this._version = value;
        }
        get version() { return this._version; }
 
        set rating(value) {
            if (typeof value !== 'number') {
                throw 'Rating should be a number';
            } else if (value < 1 || 10 < value) {
                throw 'Rating should be between 1 and 10';
            }
 
            this._rating = value;
        }
        get rating() { return this._rating; }
 
        release(params) {
            if (typeof params === 'number') {
                this.version = params;
            } else if (typeof params === 'object') {
                // version - mandatory - changes the app version
 
                if (!params.version) {
                    // throws if not specified
                    throw 'Version should be specified';
                } else {
                    this.version = params.version;
                }
 
                // description - optional - changes the app description
                if (params.description) {
                    this.description = params.description;
                }
 
                // rating - optional - changes the app rating
                if (params.rating) {
                    this.rating = params.rating;
                }
            } else {
                throw 'Parameter should be a number or an object';
            }
        }
    }
 
    class Store extends App {
        constructor(name, description, version, rating) {
            super(name, description, version, rating);
            this.apps = [];
        }
        uploadApp(app) {
            if (!(app instanceof App)) {
                throw 'app should be instance of App';
            } else {
                let existingApp = this.apps.find(a => a.name === app.name);
                if (existingApp) {
                    existingApp.version = app.version;
                    existingApp.description = app.description;
                    existingApp.rating = app.rating;
                } else {
                    this.apps.push(new App(app.name, app.description, app.version, app.rating));
                }
            }
 
            return this;
        }
        takedownApp(name) {
            let existingAppIndex = this.apps.findIndex(a => a.name === name);
            if (existingAppIndex === -1) {
                throw 'App does not exist in the store';
            } else {
                this.apps.splice(existingAppIndex, 1);
            }
 
            return this;
        }
        search(pattern) {
            pattern = pattern.toLowerCase();
            return this.apps
                .filter(a => a.name.toLowerCase().indexOf(pattern) !== -1)
                .sort((x, y) => {
                    if (x.name < y.name) { return -1; }
                    if (x.name > y.name) { return 1; }
                    return 0;
                });
        }
        listMostRecentApps(count = 10) {
            return this.apps
                .slice(this.apps.length - count)
                .reverse();
        }
        listMostPopularApps(count = 10) {
            return this.apps
                .slice(0)
                .sort((x, y) => y.rating - x.rating)
                .splice(0, count);
        }
    }
 
    class Device {
        constructor(hostname, apps) {
            this.hostname = hostname;
            this.apps = apps;
        }
 
        set hostname(value) {
            if (typeof(value) !== 'string') {
                throw 'Hostname should be a string';
            } else if (value.length && (value.length < 1 || 32 < value.length)) {
                throw 'Hostname should be with length between 1 and 32 symbols';
            }
 
            this._hostname = value;
        }
        get hostname() {
            return this._hostname;
        }
 
        set apps(value) {
            if (!Array.isArray(value)) {
                throw 'apps parameter should be an array';
            }
 
            if (value.filter(v => !(v instanceof App)).length > 0) {
                throw 'All should be apps';
            }
 
            this._apps = value.slice(0);
        }
        get apps() {
            return this._apps;
        }
 
        search(pattern) {
            pattern = pattern.toLowerCase();
            let apps = this.apps
                .filter(v => v instanceof Store)
                .reduce((arr, st) => {
                    return arr.concat(st.apps.filter(v => v.name.toLowerCase().indexOf(pattern) !== -1)
                        .sort((x, y) => {
                            if (x.name < y.name) { return -1; }
                            if (x.name > y.name) { return 1; }
                            return 0;
                        }).slice(0));
                }, []);
 
            return apps;
        }
 
        install(name) {
            let stores = this.apps.filter(v => v instanceof Store),
                isInstalled = this.apps.find(x => x.name === name);
 
            if (!isInstalled) {
                stores.forEach(st => {
                    let app = st.apps.find(a => a.name === name);
                    if (app) {
                        this.apps.push(new App(app.name, app.description, app.version, app.rating));
                        isInstalled = true;
                    }
                });
 
                if (!isInstalled) {
                    throw 'App not found in store';
                }
            }
 
            return this;
        }
 
        uninstall(name) {
            let appIndexToUninstall = this.apps.findIndex(x => x.name === name),
                appToUninstall;
 
            if (appIndexToUninstall) {
                throw 'No app with that name is installed';
            } else {
                this.apps.splice(appIndexToUninstall, 1);
            }
 
            return this;
        }
 
        listInstalled() {
            return this.apps
                .sort((x, y) => {
                    if (x.name < y.name) { return -1; }
                    if (x.name > y.name) { return 1; }
                    return 0;
                }).slice(0);
        }
 
        update() {
            let stores = this.apps.filter(v => v instanceof Store),
                apps = this.apps.filter(v => !(v instanceof Store));
 
            apps.forEach(app => {
                stores.forEach(store => {
                    store.apps.forEach(stApp => {
                        if (stApp.name === app.name) {
                            app.release(stApp);
                        }
                    })
                })
            })
 
            return this;
        }
    }
 
    return {
        createApp(name, description, version, rating) {
            // returns a new App object
            return new App(name, description, version, rating);
        },
        createStore(name, description, version, rating) {
            // returns a new Store object
            return new Store(name, description, version, rating);
        },
        createDevice(hostname, apps) {
            // returns a new Device object
            return new Device(hostname, apps);
        }
    };
}