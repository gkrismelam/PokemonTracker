const imageModules = import.meta.glob('./*.png', { 
    eager: true,
    import: "default"
});

const images: Record<string, string> = {};

for (const path in imageModules) {
    const fileName = path
        .split('/')
        .pop()
        ?.replace(".png", "");
    
    if (fileName) {
        images[fileName] = imageModules[path] as string;
    }
}

export default images;