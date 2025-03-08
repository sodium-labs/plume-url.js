import PlumeURLError from "./PlumeURLError";
import { version } from "@/../package.json";

export interface PlumeURLRESTOptions {
    apiKey?: string;
    userAgent?: string;
}

export default class PlumeURLREST {
    public static readonly baseURL = "https://url.ptarmigan.xyz/api";
    public static readonly defaultUserAgent = `plume-url.js/${version}`;

    public constructor(public readonly options: PlumeURLRESTOptions = {}) {
        this.options = options;
    }

    public async request(method: string, path: string, body?: object): Promise<Response> {
        if (!path.startsWith("/")) {
            throw new Error(`Invalid path: ${path}`);
        }

        const url = `${PlumeURLREST.baseURL}${path}`;
        try {
            const headers = new Headers({
                "User-Agent": `${PlumeURLREST.defaultUserAgent} ${this.options.userAgent || ""}`.trim(),
            });

            if (this.options.apiKey) {
                headers.set("Authorization", this.options.apiKey);
            }

            if (body) {
                headers.append("Content-Type", "application/json");
            }

            const res = await fetch(url, { method, headers, body: body ? JSON.stringify(body) : undefined });
            if (!res.ok) {
                throw new PlumeURLError(`Failed to fetch ${url}: ${res.statusText}`, undefined, res);
            }

            return res;
        } catch (err) {
            throw new PlumeURLError(`Failed to fetch ${url}`, { cause: err });
        }
    }

    public async get<T = unknown>(path: string): Promise<T> {
        const res = await this.request("GET", path);
        return (await res.json()) as T;
    }

    public async post<T = unknown>(path: string, body?: object): Promise<T> {
        const res = await this.request("POST", path, body);
        return (await res.json()) as T;
    }
}
