// Created by Curtis Spence Sep 8, 2022

import { strict as assert } from "assert"
import { readJsonValue } from "../util/readJsonUtil"
import { Author } from "./Author"
import { PostComment } from "./PostComment"

export class BlogPost {
    readonly postID: string
    readonly title: string
    readonly description: string
    readonly createdDate: Date
    updatedDate: Date | null
    readonly authors: Author[]
    readonly comments: PostComment[]

    constructor(
        postID: string,
        title: string,
        description: string,
        createdDate: Date,
        updatedDate: Date | null,
        authors: Author[],
        comments: PostComment[]
    ) {
        assert.ok(postID.length > 0, "Invalid postID, must have a length > 0")
        assert.ok(title.length > 0, "Invalid title, must have a length > 0")
        assert.ok(description.length > 0, "Invalid description, must have a length > 0")
        assert.ok(
            updatedDate == null || createdDate.getTime() <= updatedDate.getTime(),
            "Invalid createdDate, must be equal or prior to an existing updatedDate time"
        )
        assert.ok(authors.length > 0, "Invalid author(s), must have a length > 0")

        this.postID = postID
        this.title = title
        this.description = description
        this.createdDate = createdDate
        this.updatedDate = updatedDate
        this.authors = authors
        this.comments = comments
    }

    /**
    * Attempts to deserialize the provided json value into a new BlogPost,
    * else asserts.
    *
    * @param json - JSON value to deserialize into an object.
    * @returns BlogPost
    */
    static deserializer(json: any): BlogPost {
        const postID = readJsonValue(json, 'id')
        assert.ok(postID.length > 0, "BlogPost.Deserializer: Invalid id, must have a length > 0")

        const title = readJsonValue(json, 'title')
        assert.ok(title.length > 0, "BlogPost.Deserializer: Invalid title, must have a length > 0")

        const description = readJsonValue(json, 'description')
        assert.ok(description.length > 0, "BlogPost.Deserializer: Invalid description, must have a length > 0")

        const createdDate = new Date(readJsonValue(json, 'createdAt'))
        const updatedDate = new Date(readJsonValue(json, 'updatedAt'))
        assert.ok(
            updatedDate == null || createdDate.getTime() <= updatedDate.getTime(),
            "BlogPost.Deserializer: Invalid createdAt, must be equal or prior to an existing updatedAt time"
        )

        const authorsRawArr: any[] = readJsonValue(json, 'authors')
        const authors = authorsRawArr.map(authorRaw => Author.deserializer(authorRaw))
        assert.ok(authors.length > 0, "BlogPost.Deserializer: Invalid author(s), must have a length > 0")

        const commentsRawArr: any[] = readJsonValue(json, 'comments')
        const comments = commentsRawArr.map(commentRaw => PostComment.deserializer(commentRaw))

        return new BlogPost(
            postID,
            title,
            description,
            createdDate,
            updatedDate,
            authors,
            comments
        )
    }
}