class LRUCache {

    constructor(maxLength = 10) {
        this.itemMap = new Map();
        this.maxLength = maxLength;
    }

    getItem(key) {
        if (!this.itemMap.has(key)) {
            return -1;
        }
        const item = this.itemMap.get(key);
        this.itemMap.delete(key);
        this.itemMap.set(key, item);
    }

    set(key, value) {
        if (!value) {
            return -1;
        }
        if (this.itemMap.has(key)) {
            this.itemMap.delete(key);
            this.itemMap.set(key, value);
        }
        if (this.getLength() > this.maxLength) {

        }
    }

    getFirstElement() {
        return this.itemMap.entries().next().value;
    }

    getLeastUsedElement() {

    }

    getLength() {
        return this.itemMap.size;
    }

}
const LRUCacheObj = Object.freeze(new LRUCache());
export default LRUCacheObj;