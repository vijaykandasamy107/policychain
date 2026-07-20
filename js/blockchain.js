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
/* ===========================================
   PolicyChain
   blockchain.js
   Part 2
===========================================*/

// Add New Block
Blockchain.prototype.addBlock = function(data){

    const newBlock = new Block(

        this.chain.length,

        new Date().toLocaleString(),

        data,

        this.getLatestBlock().hash

    );

    newBlock.mineBlock(this.difficulty);

    this.chain.push(newBlock);

    this.saveChain();

};


// Validate Blockchain
Blockchain.prototype.isChainValid = function(){

    for(let i=1;i<this.chain.length;i++){

        const currentBlock = this.chain[i];

        const previousBlock = this.chain[i-1];

        if(currentBlock.hash !== currentBlock.calculateHash()){

            return false;

        }

        if(currentBlock.previousHash !== previousBlock.hash){

            return false;

        }

    }

    return true;

};


// Save Blockchain
Blockchain.prototype.saveChain = function(){

    localStorage.setItem(

        "policyChain",

        JSON.stringify(this.chain)

    );

};


// Load Blockchain
Blockchain.prototype.loadChain = function(){

    const storedChain = localStorage.getItem("policyChain");

    if(storedChain){

        this.chain = JSON.parse(storedChain);

    }

};


// Display Blockchain
Blockchain.prototype.printChain = function(){

    console.log("========== POLICYCHAIN ==========");

    console.table(this.chain);

};


// Get Blockchain Length
Blockchain.prototype.getChainLength = function(){

    return this.chain.length;

};


// Search Block by Hash
Blockchain.prototype.findBlock = function(hash){

    return this.chain.find(

        block => block.hash === hash

    );

};


// Search Block by Index
Blockchain.prototype.findBlockByIndex = function(index){

    return this.chain.find(

        block => block.index === index

    );

};
