export const fetchLogements = async () => {
    try {
        const response = await fetch("/kasa/logements.json"); // Chemin dans `public`
        if (!response.ok) {
            throw new Error("Erreur lors de la récupération des logements");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur dans fetchLogements :", error);
        throw error;
    }
};
