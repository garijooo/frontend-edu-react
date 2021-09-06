export default (text, size) => (
    text.length > size 
        ? `${text.substr(0, size).trim()}...`
        : text
);
