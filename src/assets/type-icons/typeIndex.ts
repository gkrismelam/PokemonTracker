const modules = import.meta.glob("./*.svg", {
    eager: true
});

const types: Record<string, string> = Object.fromEntries(
    Object.entries(modules).map(([path, module]) => {
        const fileName = path
            .split("/")
            .pop()
            ?.replace(".svg", "");

        return [
            fileName,
            (module as { default: string }).default
        ];
    })
) as Record<string, string>;

export default types;