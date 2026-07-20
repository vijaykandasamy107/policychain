/* ===========================================
   PolicyChain
   blockchain.js
   Part 1
===========================================*/

// Blockchain Block Class
class Block {

    constructor(index, timestamp, data, previousHash = "0") {

        this.index = index;

        this.timestamp = timestamp;

        this.data = data;

        this.previousHash = previousHash;

        this.hash = "";

        this.nonce = 0;

        this.hash = this.calculateHash();

    }

    // Generate SHA-256 Hash
    calculateHash() {

        return CryptoJS.SHA256(

            this.index +

            this.previousHash +

            this.timestamp +

            JSON.stringify(this.data) +

            this.nonce

        ).toString();

    }

    // Simple Proof of Work
    mineBlock(difficulty) {

        let target = "";

        for (let i = 0; i < difficulty; i++) {

            target += "0";

        }

        while (this.hash.substring(0, difficulty) !== target) {

            this.nonce++;

            this.hash = this.calculateHash();

        }

        console.log("Block Mined");

        console.log(this.hash);

    }

}

// Blockchain Class
class Blockchain {

    constructor() {

        this.chain = [this.createGenesisBlock()];

        this.difficulty = 2;

    }

    // Genesis Block
    createGenesisBlock() {

        return new Block(

            0,

            new Date().toLocaleString(),

            {

                documentName: "Genesis Block",

                owner: "PolicyChain",

                status: "Initial Block"

            },

            "0"

        );

    }

    // Latest Block
    getLatestBlock() {

        return this.chain[this.chain.length - 1];

    }

}
