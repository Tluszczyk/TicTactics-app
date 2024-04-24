import * as types from "./types";

import CookieManager, { Cookie } from '@react-native-cookies/cookies';
import { SessionManager } from "../common/SessionManager";

import { API_ADDRESS, API_PORT } from "@env"

export namespace API {

/**
 * Parses a session cookie into a Cookie object.
 *
 * @param {string} name - The name of the cookie.
 * @param {string} cookie - The cookie string to parse.
 * @return {Cookie} The parsed Cookie object.
 */
    const parseSessionCookie = (name: string, cookie: string): Cookie => {
        return cookie.split("; ").map(
            value => {
                let [key, val, ...tail] = value.split("=")

                return {
                    name: key == name ? "value" : key,
                    value: val ?? true
                }
            }
        ).reduce((cookie: Cookie, val) => {
            Object.assign(cookie, {
                [val.name]: val.value
            })
            return cookie

        }, {
            name: name
        } as Cookie)
    }

    export const auth = {

        signin: async (credentials: types.Credentials): Promise<[boolean,string|null]> => {

            const req = {
                credentials: credentials
            }

            try {
                const res = await fetch(`${API_ADDRESS}:${API_PORT}/auth/signin`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(req)
                })

                await CookieManager.set( 
                    API_ADDRESS, 
                    parseSessionCookie("session", res.headers.get("Set-Cookie") ?? "")
                );

                let userId = await SessionManager.getUserId();

                return [true, userId]

            } catch(error: any) {
                console.log(error);
                return [false, ""];
            }
        }
    };
}