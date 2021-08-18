import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname } = parse(req.url || '/', true);

    const arr = (pathname || '/').slice(1).split('.');
    let extension = '';
    let text = '';
    if (arr.length === 0) {
        text = '';
    } else if (arr.length === 1) {
        text = arr[0];
    } else {
        extension = arr.pop() as string;
        text = arr.join('.');
    }

    const url = new URL(`https://siva.dev/${req.url}`);
    const description = url.searchParams.get('desc') || '';
    const link = url.searchParams.get('link') || '';

    const parsedRequest: ParsedRequest = {
        fileType: extension === 'jpeg' ? extension : 'png',
        title: decodeURIComponent(text),
        description,
        link
    };

    return parsedRequest;
}
