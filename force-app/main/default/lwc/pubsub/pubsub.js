// step 1. Create a store

const store = {}

//step 2 . Create susbcribe method

const subscribe = (eventName, callback) => {
    if (!store[eventName]) {
        store[eventName] = new Set();
    }
    store[eventName].add(callback)
}

// step 3 Create Publish method
const publish = (eventName, payload) => {
    if (store[eventName]) {
        store[eventName].forEach(callback => {
            try {
                callback(payload)
            } catch (error) {
                console.error(error)
            }
        })
    }
}

// step 4 Create unsubscribe method
const unsubscribe = (eventName, callback) => {
    if (store[eventName]) {
        store[eventName].delete(callback)
    }
}
export default {
    subscribe,
    unsubscribe,
    publish
}