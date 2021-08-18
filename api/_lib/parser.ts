import { IncomingMessage } from 'http';
import { parse } from 'url';
import { ParsedRequest } from './types';

function stringify(param: any) {
    let text = '';
    if (param.length === 0) {
        text = '';
    } else if (param.length === 1) {
        text = param[1];
    } else {
        text = param.join('');
    }

    return text;
}

export function parseRequest(req: IncomingMessage) {
    console.log('HTTP ' + req.url);
    const { pathname, query } = parse(req.url || '/', true);

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

    const description = query.desc;
    const link = query.link;

    const parsedRequest: ParsedRequest = {
        fileType: extension === 'jpeg' ? extension : 'png',
        title: decodeURIComponent(text),
        description: stringify(description),
        link: stringify(link)
    };

    return parsedRequest;
}
