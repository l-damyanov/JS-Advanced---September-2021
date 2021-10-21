class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    };

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (username == this.creator) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    };

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        } else {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (id == undefined || !this._comments.some(c => c['id'] == id)) {
            this._comments.push({
                'id': (this._comments.length + 1),
                'username': username,
                'content': content,
                'replies': []
            });
            return `${username} commented on ${this.title}`;
        }

        let comment = this._comments.filter(c => c['id'] == id)[0]
        comment['replies'].push({
            'id': Number(comment['id']) + Number((comment['replies'].length + 1) * 0.1),
            'username': username,
            'content': content
        });

        return "You replied successfully";
    }

    toString(sortingType) {
        let result = [
            `Title: ${this.title}`,
            `Creator: ${this.creator}`,
            `Likes: ${this._likes.length}`,
            `Comments:`
        ];

        if (sortingType == 'asc') {
            for (let comment of this._comments.sort((a, b) => a['id'] - b['id'])) {
                result.push(`-- ${comment['id']}. ${comment['username']}: ${comment['content']}`);
                if (comment['replies'].length != 0) {
                    for (let reply of comment['replies'].sort((a, b) => a['id'] - b['id'])) {
                        result.push(`--- ${reply['id']}. ${reply['username']}: ${reply['content']}`);
                    }
                }
            }
        } else if(sortingType == 'desc') {
            for (let comment of this._comments.sort((a, b) => b['id'] - a['id'])) {
                result.push(`-- ${comment['id']}. ${comment['username']}: ${comment['content']}`);
                if (comment['replies'].length != 0) {
                    for (let reply of comment['replies'].sort((a, b) => b['id'] - a['id'])) {
                        result.push(`--- ${reply['id']}. ${reply['username']}: ${reply['content']}`);
                    }
                }
            }
        } else if(sortingType == 'username') {
            for (let comment of this._comments.sort((a, b) => a['username'].localeCompare(b['username']))) {
                result.push(`-- ${comment['id']}. ${comment['username']}: ${comment['content']}`);
                if (comment['replies'].length != 0) {
                    for (let reply of comment['replies'].sort((a, b) => a['username'].localeCompare(b['username']))) {
                        result.push(`--- ${reply['id']}. ${reply['username']}: ${reply['content']}`);
                    }
                }
            }
        }
        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art._comments[0]);
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
