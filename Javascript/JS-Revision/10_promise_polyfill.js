class MyPromise {
    constructor(executorFn) {
        this._state = 'pending';
        this._successCallbacks = [];
        this._errorCallbacks = [];
        this._finallyCallbacks = [];

        executorFn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        );
    }

    then(cb) {
        this._state = 'fulfiled';
        this._successCallbacks.push(cb);
        return this;
    }

    catch(cb) {
        this._state = 'rejected';
        this._errorCallbacks.push(cb);
        return this;
    }

    finally(cb){
        this._finallyCallbacks.push(cb);
        return this;
    }

    resolverFunction() {
        this._state = 'fulfiled';
        this._successCallbacks.forEach((cb)=> cb());
        this._finallyCallbacks.forEach((cb)=> cb());
    }

    rejectorFunction() {
        this._state = 'rejected';
        this._errorCallbacks.forEach((cb) => cb());
        this._finallyCallbacks.forEach((cb)=> cb());
    }
}

function wait(seconds){
    return new MyPromise((resolve,reject) => {
        setTimeout(() => resolve(),seconds * 1000)
    })
}

wait(5)
    .then( () => console.log("Promise resolved after 10 seconds"))
    .catch( () => console.log("Promise rejected"))
    .finally( () => console.log("Done"))