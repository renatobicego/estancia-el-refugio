interface ImageInfo {
    src: string;
    alt: string;
    width: number;
    height: number;
    description?: string;
}

export const images: ImageInfo[] = [
    {
        src: "/images/carrousel/arbol-laguna.jpg",
        alt: "Arbol en laguna",
        width: 1024,
        height: 681,
        description: "Arbol en laguna"
    },
    {
        src: "/images/carrousel/casa-estancia.jpg",
        alt: "Casa de la estancia",
        width: 4000,
        height: 2250,
        description: "Casa de la estancia"
    },
    {
        src: "/images/carrousel/ovejas-campo.jpg",
        alt: "Ovejas en campo",
        width: 4000,
        height: 2252,
        description: "Ovejas pastando"
    },
    {
        src: "/images/carrousel/paisaje-montanias.jpg",
        alt: "Paisaje de montañas",
        width: 3920,
        height: 2204,
        description: "Cordón montañoso"
    },
    {
        src: "/images/carrousel/ovejas-corral-paisaje.jpg",
        alt: "Ovejas en corral",
        width: 4032,
        height: 2034,
        description: "Ovejas en corral"
    },
    {
        src: "/images/carrousel/paisaje-nevado-nubes.jpg",
        alt: "Paisaje nevado con nubes",
        width: 4032,
        height: 2034,
        description: "Paisaje nevado con neblina"
    },
    {
        src: "/images/carrousel/vacas-corral-montanias.jpg",
        alt: "Vacas en corral",
        width: 4032,
        height: 2034,
        description: "Vacas en corral"
    }
]