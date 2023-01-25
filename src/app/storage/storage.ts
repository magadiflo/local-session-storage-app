//* Recordar: La api nativa de local/session Storage implementan Storage


export abstract class StorageService implements Storage {

    get length(): number {
        return this.api.length;
    }

    constructor(protected readonly api: Storage) { }

    /**
     * * Definimos el value un tipo de dato unknown, 
     * * ya que puede ser un string, un objeto, un número, etc..
     * * es decir, de antemoano no sabemos qué valor es.
     */
    setItem(key: string, value: unknown): void {
        const data = JSON.stringify(value);
        this.api.setItem(key, data);
    }

    /**
     * * Aquí usamos un genérico, porque este método
     * * se encargará de devolvernos la información
     * * almacenada en el Storage en el formato en el que fue
     * * almacenado. Si almacenamos un número o un objeto, el 
     * * método getItem, nos devolverá el mismo tipo de dato
     * * que mandamos a almacenar, y eso es gracias al genérico <T>,
     * * ya que de antemano le diremos que nos devuelva tal tipo, y 
     * * ese genérico será usado para hacer el casteo, tal como 
     * * se ve dentro del if.
     */
    getItem<T>(key: string): T | null {
        const data = this.api.getItem(key);
        if (data !== null) {
            return JSON.parse(data) as T;
        }
        return null;
    }

    clear(): void {
        this.api.clear();
    }
    key(index: number): string | null {
        return this.api.key(index);
    }

    removeItem(key: string): void {
        this.api.removeItem(key);
    }

}