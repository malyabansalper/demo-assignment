export const fetchArticlesData = async (): Promise<any> => {
  try {
    const response = await fetch(
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=MWGwpcSBs3jA50V0GTqUs8WzPIYInGpB"
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch articls data:", error);
    throw error; // Rethrow or handle the error as needed
  }
};
