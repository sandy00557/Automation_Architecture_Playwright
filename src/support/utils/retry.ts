import { logger } from "../infra/logger_1";

export async function retry<T>(
    action: () => Promise<T>,
    retries: number = 3,
    delayMs: number = 1000
): Promise<T> {
    let lastError: any;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            return await action();
        } catch (error) {
            lastError = error;
            logger.warn(`Retry attempt ${attempt} failed`);

            if (attempt < retries) {
                await new Promise(res => setTimeout(res, delayMs));
            }
        }
    }

    throw lastError;
}
