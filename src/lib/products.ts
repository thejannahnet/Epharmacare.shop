export interface Product {
    id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    image: string;
}

export const products: Product[] = [
    {
        id: "ambien-10mg",
        name: "Ambien 10mg",
        price: "$324.00 – $564.00",
        description: "High-quality Ambien for effective sleep management.",
        category: "Ambien",
        image: "/ambien.png",
    },
    {
        id: "belbien-10mg",
        name: "Belbien 10mg",
        price: "$369.00 – $524.00",
        description: "Premium Belbien for restful nights.",
        category: "Ambien",
        image: "/ambien.png",
    },
    {
        id: "xanax-1mg",
        name: "Xanax 1mg",
        price: "$349.00 – $524.00",
        description: "Reliable Xanax for anxiety relief.",
        category: "Xanax",
        image: "/xanax.png",
    },
    {
        id: "xanax-2mg",
        name: "Xanax 2mg",
        price: "$349.00 – $524.00",
        description: "Stronger Xanax dosage for effective management.",
        category: "Xanax",
        image: "/xanax.png",
    },
    {
        id: "adderall-30mg",
        name: "Adderall 30mg",
        price: "$299.00 – $499.00",
        description: "Quality Adderall for focus and clarity.",
        category: "Adderall",
        image: "/adderall.png",
    },
    {
        id: "percocet-10-325mg",
        name: "Percocet 10/325mg",
        price: "$299.00 – $499.00",
        description: "Effective pain management solution.",
        category: "Pain Relief",
        image: "/xanax.png",
    },
    {
        id: "valium-10mg",
        name: "Valium 10mg",
        price: "$329.00 – $524.00",
        description: "High-quality Valium for effective anxiety and muscle spasm relief.",
        category: "Valium",
        image: "/valium.png",
    },
    {
        id: "valium-5mg",
        name: "Valium 5mg",
        price: "$329.00 – $524.00",
        description: "Reliable Valium dosage for balanced management.",
        category: "Valium",
        image: "/valium.png",
    }
];
