// Created by Curtis Spence Sep 8, 2022

import { strict as assert } from "assert"

/**
 * Reads a value from the provided json with a specific key.
 */
export function readJsonValue(json: any, key: string) {
    if (key in json) {
        return json[key]

    } else {
        assert.ok(false, `Deserializer Error: JSON missing ${key}`)

    }
}
