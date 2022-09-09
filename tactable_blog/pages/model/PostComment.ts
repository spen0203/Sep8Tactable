// Created by Curtis Spence Sep 8, 2022

import { strict as assert } from "assert"
import { readJsonValue } from "../util/readJsonUtil"

/**
 * Class representing a Post comment.
 */
export class PostComment {
    readonly commentID: string
    readonly postID: string
    readonly title: string
    readonly description: string
    readonly createdDate: Date
    readonly updatedDate: Date

    constructor(
        commentID: string,
        postID: string,
        title: string,
        description: string,
        createdDate: Date,
        updatedDate: Date
    ) {
        assert.ok(commentID.length > 0, "Invalid commentID, must have a length > 0")
        assert.ok(postID.length > 0, "Invalid postID, must have a length > 0")
        assert.ok(title.length > 0, "Invalid title, must have a length > 0")
        assert.ok(description.length > 0, "Invalid description, must have a length > 0")
        assert.ok(
            updatedDate == null || createdDate.getTime() <= updatedDate.getTime(),
            "Invalid createdDate, must be equal or prior to an existing updatedDate time"
        )

        this.commentID = commentID
        this.postID = postID
        this.title = title
        this.description = description
        this.createdDate = createdDate
        this.updatedDate = updatedDate
    }

    /**
     * Attempts to deserialize the provided json value into a new PostComment,
     * else asserts.
     *
     * @param json - JSON value to deserialize into an object.
     * @returns PostComment
     */
    static deserializer(json: any): PostComment {
        const commentID = readJsonValue(json, 'id')
        assert.ok(commentID.length > 0, "PostComment.Deserializer: Invalid id, must have a length > 0")

        const postID = readJsonValue(json, 'postId')
        assert.ok(postID.length > 0, "PostComment.Deserializer: Invalid postID, must have a length > 0")

        const title = readJsonValue(json, 'title')
        assert.ok(title.length > 0, "PostComment.Deserializer: Invalid title, must have a length > 0")

        const description = readJsonValue(json, 'description')
        assert.ok(description.length > 0, "PostComment.Deserializer: Invalid description, must have a length > 0")

        const createdDate = new Date(readJsonValue(json, 'createdAt'))
        const updatedDate = new Date(readJsonValue(json, 'updatedAt'))
        assert.ok(
            updatedDate == null || createdDate.getTime() <= updatedDate.getTime(),
            "PostComment.Deserializer: Invalid createdAt, must be equal or prior to an existing updatedAt time"
        )

        return new PostComment(
            commentID,
            postID,
            title,
            description,
            createdDate,
            updatedDate
        )
    }
}
