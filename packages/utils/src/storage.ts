export default class Storage<T> {
  constructor(private key: string, private initial: T) {
    !this.load() && this.save(initial);
  }

  save(data: T) {
    if (data === null || data === undefined) {
      return;
    }

    return localStorage.setItem(this.key, JSON.stringify(data));
  }

  load() {
    if (typeof window === "undefined") {
      return this.initial;
    }

    return JSON.parse(localStorage.getItem(this.key) as string) as T;
  }

  clear() {
    localStorage.removeItem(this.key);
  }
}
