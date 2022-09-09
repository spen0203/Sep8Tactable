// Created by Curtis Spence Sep 8, 2022

import { strict as assert } from "assert"
import { readJsonValue } from "../util/readJsonUtil"

/**
 * Class representing the author of a post.
 */
export class Author {
    readonly authorID: string
    readonly postID: string
    readonly name: string
    readonly avatarURL: URL
    readonly createdDate: Date
    readonly updatedDate: Date

    constructor(
        authorID: string,
        postID: string,
        name: string,
        avatarURL: URL,
        createdDate: Date,
        updatedDate: Date
    ) {
        assert.ok(authorID.length > 0, "Invalid authorID, must have a length > 0")
        assert.ok(postID.length > 0, "Invalid postID, must have a length > 0")
        assert.ok(name.length > 0, "Invalid name, must have a length > 0")
        assert.ok(
            updatedDate == null || createdDate.getTime() <= updatedDate.getTime(),
            "Invalid createdDate, must be equal or prior to an existing updatedDate time"
        )

        this.authorID = authorID
        this.postID = postID
        this.name = name
        this.avatarURL = avatarURL
        this.createdDate = createdDate
        this.updatedDate = updatedDate
    }

    /**
     * Attempts to deserialize the provided json value into a new Author,
     * else asserts.
     *
     * @param json - JSON value to deserialize into an object.
     * @returns Author
     */
    static deserializer(json: any): Author {
        const authorID = readJsonValue(json, 'id')
        assert.ok(authorID.length > 0, "Author.Deserializer: Invalid id, must have a length > 0")

        const postID = readJsonValue(json, 'postId')
        assert.ok(postID.length > 0, "Author.Deserializer: Invalid postID, must have a length > 0")

        const name = readJsonValue(json, 'name')
        assert.ok(name.length > 0, "Author.Deserializer: Invalid name, must have a length > 0")

        const avatarStr = readJsonValue(json, 'avatar')
        assert.ok(avatarStr.length > 0, "Author.Deserializer: Invalid avatarStr, must have a length > 0")

        const createdDate = new Date(readJsonValue(json, 'createdAt'))
        const updatedDate = new Date(readJsonValue(json, 'updatedAt'))
        assert.ok(
            updatedDate == null || createdDate.getTime() <= updatedDate.getTime(),
            "Author.Deserializer: Invalid createdAt, must be equal or prior to an existing updatedDate time"
        )

        return new Author(
            authorID,
            postID,
            name,
            new URL(avatarStr),
            createdDate,
            updatedDate
        )
    }
}
