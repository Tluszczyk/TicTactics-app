import CookieManager from "@react-native-cookies/cookies";
import { API_ADDRESS } from "@env"

export namespace SessionManager {

    export const getUserId = async () => {
        let cookies = await CookieManager.get(API_ADDRESS) ?? null;
        if( !cookies ) return null;

        let sessionCookie = cookies.session ?? null;
        if( !sessionCookie ) return null;

        return JSON.parse(atob(sessionCookie.value)).id
    }
}