// Created by Curtis Spence Sep 8, 2022

import { Author } from "../pages/model/Author"
import { BlogPost } from "../pages/model/BlogPost"
import { PostComment } from "../pages/model/PostComment"

test("BlogPost constructor instantiated with valid properties", () => {
    const test = new BlogPost(
        '1',
        'title 1',
        'Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque',
        new Date("2021-05-20T01:13:07.861Z"),
        new Date("2021-09-17T04:11:19.105Z"),
        [
            new Author(
                '1',
                '1',
                'Lela Abernathy',
                new URL('https://cdn.fakercloud.com/avatars/uberschizo_128.jpg'),
                new Date("2021-02-22T05:09:21.861Z"),
                new Date("2021-09-17T09:58:16.837Z")
            )
        ],
        [
            new PostComment(
                "1",
                "1",
                "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
                "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
                new Date("2021-04-26T03:23:35.554Z"),
                new Date("2021-09-17T14:44:21.221Z")
            ),
            new PostComment(
                "1",
                "1",
                "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
                "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
                new Date("2021-04-26T03:23:35.554Z"),
                new Date("2021-09-17T14:44:21.221Z")
            )
        ]
    )

    expect(test.postID).toEqual('1')
    expect(test.title).toEqual('title 1')
    expect(test.description.toString()).toEqual('Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque')
    expect(test.createdDate.getTime()).toEqual(1621473187861)
    expect(test.updatedDate?.getTime()).toEqual(1631851879105)
    expect(test.authors.length).toEqual(1)
    expect(test.comments.length).toEqual(2)
})

test("BlogPost constructor instantiated with Invalid properties", () => {
    expect(() => {
        new BlogPost(
            '',
            'title 1',
            'Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque',
            new Date("2021-05-20T01:13:07.861Z"),
            new Date("2021-09-17T04:11:19.105Z"),
            [
                new Author(
                    '1',
                    '1',
                    'Lela Abernathy',
                    new URL('https://cdn.fakercloud.com/avatars/uberschizo_128.jpg'),
                    new Date("2021-02-22T05:09:21.861Z"),
                    new Date("2021-09-17T09:58:16.837Z")
                )
            ],
            [
                new PostComment(
                    "1",
                    "1",
                    "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
                    "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
                    new Date("2021-04-26T03:23:35.554Z"),
                    new Date("2021-09-17T14:44:21.221Z")
                ),
                new PostComment(
                    "1",
                    "1",
                    "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
                    "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
                    new Date("2021-04-26T03:23:35.554Z"),
                    new Date("2021-09-17T14:44:21.221Z")
                )
            ]
        )
    }).toThrow("Invalid postID, must have a length > 0")

    expect(() => {
        new BlogPost(
            '1',
            'title 1',
            'Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque',
            new Date("2021-05-20T01:13:07.861Z"),
            new Date("2020-09-17T04:11:19.105Z"),
            [
                new Author(
                    '1',
                    '1',
                    'Lela Abernathy',
                    new URL('https://cdn.fakercloud.com/avatars/uberschizo_128.jpg'),
                    new Date("2021-02-22T05:09:21.861Z"),
                    new Date("2021-09-17T09:58:16.837Z")
                )
            ],
            [
                new PostComment(
                    "1",
                    "1",
                    "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
                    "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
                    new Date("2021-04-26T03:23:35.554Z"),
                    new Date("2021-09-17T14:44:21.221Z")
                ),
                new PostComment(
                    "1",
                    "1",
                    "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
                    "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
                    new Date("2021-04-26T03:23:35.554Z"),
                    new Date("2021-09-17T14:44:21.221Z")
                )
            ]
        )
    }).toThrow("Invalid createdDate, must be equal or prior to an existing updatedDate time")
})

/* JSON Deserializer Tests -------------------------------------------------- */
const jsonDataGood =
{
    "title": "title 1",
    "description": "Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.",
    "createdAt": "2021-05-20T01:13:07.861Z",
    "updatedAt": "2021-09-17T04:11:19.105Z",
    "id": "1",
    "authors": [
        {
            "createdAt": "2021-02-22T05:09:21.861Z",
            "name": "Lela Abernathy",
            "avatar": "https://cdn.fakercloud.com/avatars/uberschizo_128.jpg",
            "updatedAt": "2021-09-17T09:58:16.837Z",
            "id": "1",
            "postId": "1"
        },
        {
            "createdAt": "2020-10-07T21:01:51.705Z",
            "name": "Roland Mayert IV",
            "avatar": "https://cdn.fakercloud.com/avatars/kirangopal_128.jpg",
            "updatedAt": "2021-09-17T19:36:01.227Z",
            "id": "14",
            "postId": "1"
        }
    ],
    "comments": [
        {
            "createdAt": "2021-04-26T03:23:35.554Z",
            "title": "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
            "description": "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
            "updatedAt": "2021-09-17T14:44:21.221Z",
            "id": "1",
            "postId": "1"
        },
        {
            "createdAt": "2021-07-01T17:58:03.663Z",
            "title": "Nisi iusto ut est quia eligendi excepturi quos non.",
            "description": "Est minus vel repellat accusamus. Nisi ab maiores porro omnis. Est quo at. Culpa assumenda autem natus omnis et qui recusandae sint sed. Ducimus culpa sed dolor aut labore. Quaerat aut alias et.",
            "updatedAt": "2021-09-17T14:18:57.572Z",
            "id": "13",
            "postId": "1"
        },
        {
            "createdAt": "2021-01-04T10:52:16.873Z",
            "title": "My Comment",
            "description": "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
            "updatedAt": "2021-09-17T18:24:08.048Z",
            "id": "21",
            "postId": "1"
        }
    ]
}

const jsonDataBad =
{
    "title": "",
    "description": "Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.",
    "createdAt": "2021-05-20T01:13:07.861Z",
    "updatedAt": "2021-09-17T04:11:19.105Z",
    "id": "1",
    "authors": [
        {
            "createdAt": "2021-02-22T05:09:21.861Z",
            "name": "Lela Abernathy",
            "avatar": "https://cdn.fakercloud.com/avatars/uberschizo_128.jpg",
            "updatedAt": "2021-09-17T09:58:16.837Z",
            "id": "1",
            "postId": "1"
        },
        {
            "createdAt": "2020-10-07T21:01:51.705Z",
            "name": "Roland Mayert IV",
            "avatar": "https://cdn.fakercloud.com/avatars/kirangopal_128.jpg",
            "updatedAt": "2021-09-17T19:36:01.227Z",
            "id": "14",
            "postId": "1"
        }
    ],
    "comments": [
        {
            "createdAt": "2021-04-26T03:23:35.554Z",
            "title": "Itaque quam molestias dignissimos minus nulla voluptatem ea fugiat quisquam.",
            "description": "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
            "updatedAt": "2021-09-17T14:44:21.221Z",
            "id": "1",
            "postId": "1"
        },
        {
            "createdAt": "2021-07-01T17:58:03.663Z",
            "title": "Nisi iusto ut est quia eligendi excepturi quos non.",
            "description": "Est minus vel repellat accusamus. Nisi ab maiores porro omnis. Est quo at. Culpa assumenda autem natus omnis et qui recusandae sint sed. Ducimus culpa sed dolor aut labore. Quaerat aut alias et.",
            "updatedAt": "2021-09-17T14:18:57.572Z",
            "id": "13",
            "postId": "1"
        },
        {
            "createdAt": "2021-01-04T10:52:16.873Z",
            "title": "My Comment",
            "description": "Omnis sed perspiciatis ut rerum nesciunt neque optio laboriosam rerum. Consequatur et iusto iste dolorem sunt. Vel deleniti aut ab. Nostrum qui voluptatem. Consequatur minima laborum et quaerat rerum sit cupiditate explicabo.",
            "updatedAt": "2021-09-17T18:24:08.048Z",
            "id": "21",
            "postId": "1"
        }
    ]
}

test("BlogPost.deserialize - Instantiated with valid json ", () => {
    const test = BlogPost.deserializer(jsonDataGood)
    expect(test.postID).toEqual("1")
    expect(test.title).toEqual("title 1")
    expect(test.description).toEqual("Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.")
    expect(test.createdDate.getTime()).toEqual(1621473187861)
    expect(test.updatedDate?.getTime() ?? 0).toEqual(1631851879105)
    expect(test.authors.length).toEqual(2)
    expect(test.comments.length).toEqual(3)
})

test("BlogPost.deserialize - Asserts with invalid json ", () => {
    expect(() => {
        const test = BlogPost.deserializer(jsonDataBad)
    }).toThrow("BlogPost.Deserializer: Invalid title, must have a length > 0")
})
