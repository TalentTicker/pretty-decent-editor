export const convertToHtml = (value: string) => new DOMParser().parseFromString(value, 'text/html');
