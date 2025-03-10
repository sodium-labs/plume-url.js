export interface CreateURLOptions {
    url: string;
    expiresAt?: number | null;
    description?: string | null;
    customId?: string | null;
}

export type EditURLOptions = Partial<CreateURLOptions>;

export interface SearchURLOptions {
    customId?: string | null;
    limit?: number;
    page?: number;
    expired?: boolean;
}

export interface SearchURLResults {
    urls: URLData[];
}

export interface URLData {
    userId: string;
    createdAt: number;
    destination: string;
    shortenId: string;
    shorten: string;
    infoPage: string;
    customId: string | null;
    description: string | null;
    expiresAt: number | null;
    expired: boolean;
    views: number;
    disabled: boolean;
}
