export type FileType = 'png' | 'jpeg';

export interface ParsedRequest {
    fileType: FileType;
    title: string;
    description: string;
    link: string;
}
