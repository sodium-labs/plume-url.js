/**
 * Encode a search params string.
 */
export const queryfy = (options: Record<string, unknown>): string => {
    const params = new URLSearchParams(
        Object.entries(options)
            .filter(([, v]) => v !== undefined)
            .map(([k, v]) => [k, `${v}`]),
    );
    const encoded = params.toString();
    return encoded ? `?${encoded}` : "";
};
