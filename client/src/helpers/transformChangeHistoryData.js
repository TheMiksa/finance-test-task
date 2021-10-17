export const transformChangeHistoryData = data => data.map(element => ({ name: '', change: +element.change }));
