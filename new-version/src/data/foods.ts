import { v4 as uuidv4 } from 'uuid';

export const foods = [
    {
        id: uuidv4(),
        category: "All Day Breakfast",
        items: [
            {
                title: "Bruschetta",
                description: "Toasted baguette slices topped with fresh tomatoes, basil, garlic, and olive oil.",
                cover: "https://plus.unsplash.com/premium_photo-1663852297522-d01619dc3e55",
                nutrition: {
                    energy: "150 kcal",
                    carbohydrates: "20g",
                    protein: "5g",
                    fat: "7g",
                    fiber: "3g"
                }
            },
            {
                title: "Calamari",
                description: "Lightly breaded and fried calamari served with marinara sauce.",
                cover: "https://images.unsplash.com/photo-1609167830220-7164aa360951",
                nutrition: {
                    energy: "250 kcal",
                    carbohydrates: "15g",
                    protein: "12g",
                    fat: "14g",
                    fiber: "2g"
                }
            },
             {
                title: "Grilled Salmon",
                description: "Fresh salmon fillet grilled to perfection, served with roasted vegetables.",
                cover: "https://images.unsplash.com/photo-1432139555190-58524dae6a55",
                nutrition: {
                    energy: "300 kcal",
                    carbohydrates: "10g",
                    protein: "25g",
                    fat: "18g",
                    fiber: "5g"
                }
            },
            {
                title: "Pasta Primavera",
                description: "Spaghetti tossed with seasonal vegetables in a creamy garlic sauce.",
                cover: "https://images.unsplash.com/photo-1492470026006-0e12a33eb7fb",
                nutrition: {
                    energy: "350 kcal",
                    carbohydrates: "40g",
                    protein: "12g",
                    fat: "16g",
                    fiber: "6g"
                }
            },
        ]
    },
    {
        id: uuidv4(),
        category: "Appetizers",
        items: [
            {
                title: "Bruschetta",
                description: "Toasted baguette slices topped with fresh tomatoes, basil, garlic, and olive oil.",
                cover: "https://plus.unsplash.com/premium_photo-1663852297522-d01619dc3e55",
                nutrition: {
                    energy: "150 kcal",
                    carbohydrates: "20g",
                    protein: "5g",
                    fat: "7g",
                    fiber: "3g"
                }
            },
            {
                title: "Calamari",
                description: "Lightly breaded and fried calamari served with marinara sauce.",
                cover: "https://images.unsplash.com/photo-1609167830220-7164aa360951",
                nutrition: {
                    energy: "250 kcal",
                    carbohydrates: "15g",
                    protein: "12g",
                    fat: "14g",
                    fiber: "2g"
                }
            },
            {
                title: "Stuffed Mushrooms",
                description: "Mushroom caps stuffed with a savory mixture of breadcrumbs, herbs, and cheese.",
                cover: "https://plus.unsplash.com/premium_photo-1677192449817-61a418e01d81",
                nutrition: {
                    energy: "180 kcal",
                    carbohydrates: "10g",
                    protein: "8g",
                    fat: "11g",
                    fiber: "2g"
                }
            }
        ]
    },
    {
        id: uuidv4(),
        category: "Main Course",
        items: [
            {
                title: "Grilled Salmon",
                description: "Fresh salmon fillet grilled to perfection, served with roasted vegetables.",
                cover: "https://images.unsplash.com/photo-1432139555190-58524dae6a55",
                nutrition: {
                    energy: "300 kcal",
                    carbohydrates: "10g",
                    protein: "25g",
                    fat: "18g",
                    fiber: "5g"
                }
            },
            {
                title: "Pasta Primavera",
                description: "Spaghetti tossed with seasonal vegetables in a creamy garlic sauce.",
                cover: "https://images.unsplash.com/photo-1492470026006-0e12a33eb7fb",
                nutrition: {
                    energy: "350 kcal",
                    carbohydrates: "40g",
                    protein: "12g",
                    fat: "16g",
                    fiber: "6g"
                }
            },
            {
                title: "Filet Mignon",
                description: "Tender filet mignon cooked to your liking, served with mashed potatoes and grilled asparagus.",
                cover: "https://images.unsplash.com/photo-1498601761256-9e93c6f5c181",
                nutrition: {
                    energy: "500 kcal",
                    carbohydrates: "15g",
                    protein: "30g",
                    fat: "35g",
                    fiber: "3g"
                }
            }
        ]
    },
    {
        id: uuidv4(),
        category: "Desserts",
        items: [
            {
                title: "Tiramisu",
                description: "Layers of espresso-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.",
                cover: "https://images.unsplash.com/photo-1609167921919-9436787fdecd",
                nutrition: {
                    energy: "200 kcal",
                    carbohydrates: "25g",
                    protein: "5g",
                    fat: "10g",
                    fiber: "1g"
                }
            },
            {
                title: "New York Cheesecake",
                description: "Creamy cheesecake on a graham cracker crust, topped with fresh berries.",
                cover: "https://images.unsplash.com/photo-1634141614476-1b421ce4aace",
                nutrition: {
                    energy: "350 kcal",
                    carbohydrates: "30g",
                    protein: "8g",
                    fat: "20g",
                    fiber: "2g"
                }
            },
            {
                title: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a gooey chocolate center, served with vanilla ice cream.",
                cover: "https://images.unsplash.com/photo-1498601761256-9e93c6f5c181",
                nutrition: {
                    energy: "400 kcal",
                    carbohydrates: "45g",
                    protein: "6g",
                    fat: "22g",
                    fiber: "4g"
                }
            },
            {
                title: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a gooey chocolate center, served with vanilla ice cream.",
                cover: "https://images.unsplash.com/photo-1581065556762-ee5e34e5f181",
                nutrition: {
                    energy: "400 kcal",
                    carbohydrates: "45g",
                    protein: "6g",
                    fat: "22g",
                    fiber: "4g"
                }
            }
        ]
    }
]