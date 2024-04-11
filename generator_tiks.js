

class Generator {
    constructor() {
        this.timerId;
        this.observer = new Observer()
    }

    start_generation() {
        setInterval(() => {this.geration_tick()}, 200)
    }

    geration_tick() {
        this.observer.notify("new tick")
        console.log("Gen Tick")
    }



}


class Observer {
    constructor () {
        this.actions = []
    }

    subscribe(action) {
        this.actions.push(action)
    }

    unsubscribe(action) {
        this.actions = this.actions.filter(subscriber => subscriber !== action);
    }

    notify(data) {
        this.actions.forEach(observer => observer(data));
    }
}

let generator = new Generator()
generator.start_generation()


class GameObject {
    constructor (generator,) {
        this.generator = generator
        this.subscribe_update()
    }

    subscribe_update() {
        this.generator.observer.subscribe(data => {
            console.log('subscribe was fired', data)
          })
    }
}



