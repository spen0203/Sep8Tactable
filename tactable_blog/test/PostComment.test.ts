// Created by Curtis Spence Sep 8, 2022

import { PostComment } from "../pages/model/PostComment"

test("PostComment constructor instantiated with valid properties", () => {
    const test = new PostComment(
        "1",
        "12",
        "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
        "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
        new Date("2021-04-26T03:23:35.554Z"),
        new Date("2021-09-17T14:44:21.221Z")
    )

    expect(test.commentID).toEqual('1')
    expect(test.postID).toEqual('12')
    expect(test.title).toEqual("Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.")
    expect(test.description.toString()).toEqual("Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.")
    expect(test.createdDate.getTime()).toEqual(1619407415554)
    expect(test.updatedDate.getTime()).toEqual(1631889861221)
})

test("PostComment constructor instantiated with Invalid properties", () => {
    expect(() => {
        const test = new PostComment(
            "",
            "1",
            "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
            "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
            new Date("2021-04-26T03:23:35.554Z"),
            new Date("2021-09-17T14:44:21.221Z")
        )
    }).toThrow("Invalid commentID, must have a length > 0")

    expect(() => {
        const test = new PostComment(
            "1",
            "1",
            "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
            "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
            new Date("2021-04-26T03:23:35.554Z"),
            new Date("2020-09-17T14:44:21.221Z")
        )
    }).toThrow("Invalid createdDate, must be equal or prior to an existing updatedDate time")
})

/* JSON Deserializer Tests -------------------------------------------------- */
const jsonDataGood = {
    "createdAt": "2021-04-26T03:23:35.554Z",
    "title": "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
    "description": "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
    "updatedAt": "2021-09-17T14:44:21.221Z",
    "id": "14",
    "postId": "1"
}

const jsonDataBad = {
    "createdAt": "2021-04-26T03:23:35.554Z",
    "title": "",
    "description": "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
    "updatedAt": "2021-09-17T14:44:21.221Z",
    "id": "1",
    "postId": "1"
}

test("PostComment.deserialize - Instantiated with valid json ", () => {
    const test = PostComment.deserializer(jsonDataGood)
    expect(test.commentID).toEqual("14")
    expect(test.postID).toEqual("1")
    expect(test.title).toEqual("Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.")
    expect(test.description).toEqual("Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.")
    expect(test.createdDate.getTime()).toEqual(1619407415554)
    expect(test.updatedDate.getTime()).toEqual(1631889861221)
})

test("PostComment.deserialize - Asserts with invalid json ", () => {
    expect(() => {
        const test = PostComment.deserializer(jsonDataBad)
    }).toThrow("Invalid title, must have a length > 0")
})
