import * as types from "./types";

import { API_ADDRESS, API_PORT } from "@env"

export namespace API {
    export const auth = {
        signin: async (credentials: types.Credentials) => {
            const req = {
                credentials: credentials
            }

            return fetch(`${API_ADDRESS}:${API_PORT}/auth/signin`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(req)
            })
        }
    };
}