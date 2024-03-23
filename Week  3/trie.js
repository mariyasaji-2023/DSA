class TrieNode {
    constructor() {
        this.children = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            const letter = word[i];
            if (!node.children[letter]) {
                node.children[letter] = new TrieNode();
            }
            node = node.children[letter];
        }
        node.end = true;
    }

    search(word) {
        let node = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!node.children[word[i]]) {
                return false;
            }
            node = node.children[word[i]];
        }
        return node.end;
    }
}

const trie = new Trie();
trie.insert('apple');
trie.insert('app');
trie.insert('apricot');
console.log(trie.search('apple')); // Output: true
