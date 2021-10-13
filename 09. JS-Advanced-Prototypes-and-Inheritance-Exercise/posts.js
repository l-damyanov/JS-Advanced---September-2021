function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    };

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let BaseToString = super.toString();
            let commentsString = this.comments.map(c => ` * ${c}`).join('\n');
            let fullCommentsString = this.comments.length > 0
            ? `\nComments:\n${commentsString}`
            : '';

            return `${BaseToString}\nRating: ${this.likes - this.dislikes}${fullCommentsString}`;
        }
    };

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views = this.views + 1;
            return this;
        }

        toString() {
            let BaseToString = super.toString();
            return `${BaseToString}\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };
}

const classes = solve();
let post = new classes.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());
