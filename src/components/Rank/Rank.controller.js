export const Emoji = async (rank) => {
    const url = 'https://nu6wnwss54.execute-api.us-east-1.amazonaws.com/hello/'
    const data = await fetch(url + rank || 1);
    const emoji = data.json();
    return emoji;
}

export const removeChild = (node, child)=>{
    return node.removeChild(child);
}