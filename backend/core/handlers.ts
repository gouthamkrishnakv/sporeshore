import { type Route } from "@std/http/unstable-route";
import { type DatabaseSync } from "node:sqlite";

export const createHandlers = (db: DatabaseSync): Route[] => {
    return [shortenUrlHandler(db)];
}

const shortenUrlHandler = (db: DatabaseSync): Route => {
    const getActualUrlQ = db.prepare(`SELECT id FROM records r WHERE r.actual_url = ? LIMIT 1`);
    const saveUrlQ = db.prepare(`INSERT INTO RECORDS (actual_url, url_hash) VALUES (?, ?)`);
    return {
        pattern: new URLPattern({pathname: "/"}),
        handler: async (req: Request, params: URLPatternResult | undefined): Promise<Response> => {
            return new Response("Not implemented", {status: 501});// TODO
        }
    }
}