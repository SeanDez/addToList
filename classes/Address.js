
export default class Address {
    constructor(address1, address2, city, state, zip) {
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    parseAddress1() {
        const address1Bits = this.address1.split(" ");

        // find each piece: street num/name, suffix, 
    }
}