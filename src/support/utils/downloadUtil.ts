import fs from 'fs';
import path from 'path';

export class DownloadUtil {

    static ensureDownloadFolder(): string {
        const downloadDir = path.resolve('downloads');
        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir);
        }
        return downloadDir;
    }

    static readJson(filePath: string): any {
        const content = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(content);
    }

    static fileContains(filePath: string, expectedText: string): boolean {
        const content = fs.readFileSync(filePath, 'utf-8');
        return content.includes(expectedText);
    }

    static deleteFile(filePath: string): void {
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }
    }
}
