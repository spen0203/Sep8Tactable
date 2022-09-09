// Created by Curtis Spence Sep 8, 2022

import { Author } from "../pages/model/Author"

test("Author constructor instantiated with valid properties", () => {
    const test = new Author(
        '1',
        '12',
        'Lela Abernathy',
        new URL('https://cdn.fakercloud.com/avatars/uberschizo_128.jpg'),
        new Date("2021-02-22T05:09:21.861Z"),
        new Date("2021-09-17T09:58:16.837Z")
    )

    expect(test.authorID).toEqual('1')
    expect(test.postID).toEqual('12')
    expect(test.name).toEqual('Lela Abernathy')
    expect(test.avatarURL.toString()).toEqual('https://cdn.fakercloud.com/avatars/uberschizo_128.jpg')
    expect(test.createdDate.getTime()).toEqual(1613970561861)
    expect(test.updatedDate.getTime()).toEqual(1631872696837)
})

test("Author constructor instantiated with Invalid properties", () => {
    expect(() => {
        const test = new Author(
            '',
            '12',
            'Lela Abernathy',
            new URL('https://cdn.fakercloud.com/avatars/uberschizo_128.jpg'),
            new Date("2021-02-22T05:09:21.861Z"),
            new Date("2021-09-17T09:58:16.837Z")
        )
    }).toThrow("Invalid authorID, must have a length > 0")

    expect(() => {
        const test = new Author(
            '1',
            '12',
            'Lela Abernathy',
            new URL('https://cdn.fakercloud.com/avatars/uberschizo_128.jpg'),
            new Date("2021-02-22T05:09:21.861Z"),
            new Date("2020-09-17T09:58:16.837Z")
        )
    }).toThrow("Invalid createdDate, must be equal or prior to an existing updatedDate time")
})

/* JSON Deserializer Tests -------------------------------------------------- */
const jsonDataGood = {
    "createdAt": "2020-10-07T21:01:51.705Z",
    "name": "Roland Mayert IV",
    "avatar": "https://cdn.fakercloud.com/avatars/kirangopal_128.jpg",
    "updatedAt": "2021-09-17T19:36:01.227Z",
    "id": "14",
    "postId": "1"
}

const jsonDataBad = {
    "createdAt": "2020-10-07T21:01:51.705Z",
    "name": "",
    "avatar": "https://cdn.fakercloud.com/avatars/kirangopal_128.jpg",
    "updatedAt": "2021-09-17T19:36:01.227Z",
    "id": "14",
    "postId": "1"
}

test("Author.deserialize - Instantiated with valid json ", () => {
    const test = Author.deserializer(jsonDataGood)
    expect(test.authorID).toEqual("14")
    expect(test.postID).toEqual("1")
    expect(test.name).toEqual("Roland Mayert IV")
    expect(test.avatarURL.toString()).toEqual("https://cdn.fakercloud.com/avatars/kirangopal_128.jpg")
    expect(test.createdDate.getTime()).toEqual(1602104511705)
    expect(test.updatedDate.getTime()).toEqual(1631907361227)
})


test("Author.deserializer - Asserts with invalid json ", () => {
    expect(() => {
        const test = Author.deserializer(jsonDataBad)
    }).toThrow("Invalid name, must have a length > 0")
})

