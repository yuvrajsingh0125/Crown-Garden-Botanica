const GITHUB_BASE = "/data/";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: "herbal" | "bouquet";
  description?: string;
}

export const herbalProducts: Product[] = [
  { id: "h1", name: "Rose Syrup", price: 150, image: `${GITHUB_BASE}rosesyrup.jpg`, category: "herbal" },
  { id: "h2", name: "Lavender Perfume", price: 450, image: `${GITHUB_BASE}lavenderperfume.jpg`, category: "herbal" },
  { id: "h3", name: "Jasmine Oil", price: 300, image: `${GITHUB_BASE}jasmineoil.jpg`, category: "herbal" },
  { id: "h4", name: "Hibiscus Powder", price: 200, image: `${GITHUB_BASE}hibiscuspowder.jpg`, category: "herbal" },
  { id: "h5", name: "Lotus Extract", price: 350, image: `${GITHUB_BASE}lotusextract.jpg`, category: "herbal" },
  { id: "h6", name: "Marigold Cream", price: 250, image: `${GITHUB_BASE}marigoldcream.jpg`, category: "herbal" },
  { id: "h7", name: "Tulip Serum", price: 400, image: `${GITHUB_BASE}tulipserum.jpg`, category: "herbal" },
  { id: "h8", name: "Sunflower Oil", price: 280, image: `${GITHUB_BASE}sunfloweroil.jpg`, category: "herbal" },
  { id: "h9", name: "Chamomile Tea", price: 180, image: `${GITHUB_BASE}Chamomiletea.jpg`, category: "herbal" },
  { id: "h10", name: "Geranium Spray", price: 320, image: `${GITHUB_BASE}geraniumspray.jpg`, category: "herbal" },
  { id: "h11", name: "Peony Lotion", price: 370, image: `${GITHUB_BASE}peonylotion.jpg`, category: "herbal" },
  { id: "h12", name: "Lily Mist", price: 290, image: `${GITHUB_BASE}lilymist.jpg`, category: "herbal" },
  { id: "h13", name: "Orchid Extract", price: 500, image: `${GITHUB_BASE}Orchidextract.jpg`, category: "herbal" },
  { id: "h14", name: "Daisy Facepack", price: 220, image: `${GITHUB_BASE}daisyfacepack.jpg`, category: "herbal" },
  { id: "h15", name: "Magnolia Serum", price: 410, image: `${GITHUB_BASE}magnoliaserum.jpg`, category: "herbal" },
  { id: "h16", name: "Rosemary Oil", price: 260, image: `${GITHUB_BASE}rosemaryoil.jpg`, category: "herbal" },
  { id: "h17", name: "Mint Flower Gel", price: 190, image: `${GITHUB_BASE}mintflowergel.jpg`, category: "herbal" },
  { id: "h18", name: "Calendula Cream", price: 340, image: `${GITHUB_BASE}calendulacream.jpg`, category: "herbal" },
  { id: "h19", name: "Blue Pea Tea", price: 210, image: `${GITHUB_BASE}bluepeatea.jpg`, category: "herbal" },
  { id: "h20", name: "Saffron Essence", price: 600, image: `${GITHUB_BASE}saffronessence.jpg`, category: "herbal" },
  { id: "h21", name: "Acacia Extract", price: 275, image: `${GITHUB_BASE}acaciaextract.jpg`, category: "herbal" },
  { id: "h22", name: "Poppy Seed Oil", price: 330, image: `${GITHUB_BASE}poppyseedoil.jpg`, category: "herbal" },
  { id: "h23", name: "Aloe Flower Gel", price: 230, image: `${GITHUB_BASE}aloeveragel.jpg`, category: "herbal" },
  { id: "h24", name: "Citrus Blossom Spray", price: 310, image: `${GITHUB_BASE}citrusblossomspray.jpg`, category: "herbal" },
  { id: "h25", name: "Gardenia Perfume", price: 480, image: `${GITHUB_BASE}gardeniaperfume.jpg`, category: "herbal" },
  { id: "h26", name: "Lavender Soap", price: 160, image: `${GITHUB_BASE}lavendersoap.jpg`, category: "herbal" },
  { id: "h27", name: "Rose Facewash", price: 210, image: `${GITHUB_BASE}rosefacewash.jpg`, category: "herbal" },
  { id: "h28", name: "Hibiscus Shampoo", price: 350, image: `${GITHUB_BASE}hibiscusshampoo.jpg`, category: "herbal" },
  { id: "h29", name: "Lotus Face Cream", price: 390, image: `${GITHUB_BASE}lotusfacecream.jpg`, category: "herbal" },
  { id: "h30", name: "Jasmine Attar", price: 550, image: `${GITHUB_BASE}jasmineattar.jpg`, category: "herbal" },
];

export const bouquetProducts: Product[] = [
  { id: "b1", name: "Rose Bouquet", price: 499, image: `${GITHUB_BASE}rosebouquet.jpg`, category: "bouquet" },
  { id: "b2", name: "Tulip Bouquet", price: 599, image: `${GITHUB_BASE}tulipbouquet.jpg`, category: "bouquet" },
  { id: "b3", name: "Lily Bouquet", price: 549, image: `${GITHUB_BASE}lilybouquet.jpg`, category: "bouquet" },
  { id: "b4", name: "Orchid Bouquet", price: 699, image: `${GITHUB_BASE}orchidbouquet.jpeg`, category: "bouquet" },
  { id: "b5", name: "Sunflower Bouquet", price: 449, image: `${GITHUB_BASE}sunflowerbouquet.jpg`, category: "bouquet" },
  { id: "b6", name: "Carnation Bouquet", price: 399, image: `${GITHUB_BASE}carnationbouquet.jpg`, category: "bouquet" },
  { id: "b7", name: "Daisy Bouquet", price: 379, image: `${GITHUB_BASE}daisybouquet.jpg`, category: "bouquet" },
  { id: "b8", name: "Marigold Bouquet", price: 349, image: `${GITHUB_BASE}marigoldbouquet.jpg`, category: "bouquet" },
  { id: "b9", name: "Jasmine Bouquet", price: 459, image: `${GITHUB_BASE}jasminebouquet.jpg`, category: "bouquet" },
  { id: "b10", name: "Lotus Bouquet", price: 529, image: `${GITHUB_BASE}lotusbouquet.jpg`, category: "bouquet" },
  { id: "b11", name: "Lavender Bouquet", price: 479, image: `${GITHUB_BASE}lavenderbouquet.jpg`, category: "bouquet" },
  { id: "b12", name: "Hibiscus Bouquet", price: 429, image: `${GITHUB_BASE}hibiscusbouquet.jpg`, category: "bouquet" },
  { id: "b13", name: "Peony Bouquet", price: 649, image: `${GITHUB_BASE}peonybouquet.jpg`, category: "bouquet" },
  { id: "b14", name: "Chrysanthemum Bouquet", price: 399, image: `${GITHUB_BASE}chrysanthemumsbouquet.jpg`, category: "bouquet" },
  { id: "b15", name: "Gerbera Bouquet", price: 449, image: `${GITHUB_BASE}gerberabouquet.jpg`, category: "bouquet" },
  { id: "b16", name: "Blue Rose Bouquet", price: 799, image: `${GITHUB_BASE}bluerosebouquet.jpg`, category: "bouquet" },
  { id: "b17", name: "Mixed Flower Bouquet", price: 559, image: `${GITHUB_BASE}mixedflowerbouquet.jpg`, category: "bouquet" },
  { id: "b18", name: "Wedding Bouquet", price: 999, image: `${GITHUB_BASE}weddingbouquet.jpg`, category: "bouquet" },
  { id: "b19", name: "Anniversary Bouquet", price: 749, image: `${GITHUB_BASE}anniversarybouquet.jpg`, category: "bouquet" },
  { id: "b20", name: "Birthday Bouquet", price: 599, image: `${GITHUB_BASE}birthdaybouquet.jpg`, category: "bouquet" },
  { id: "b21", name: "Valentine Special Bouquet", price: 899, image: `${GITHUB_BASE}valentinesbouquet.jpg`, category: "bouquet" },
];

export const allProducts = [...herbalProducts, ...bouquetProducts];

export const collections = [
  { name: "Roses", emoji: "🌹" },
  { name: "Hibiscus", emoji: "🌺" },
  { name: "Sunflower", emoji: "🌻" },
  { name: "Daisies", emoji: "🌼" },
  { name: "Tulip", emoji: "🌷" },
  { name: "Orchid", emoji: "🪷" },
  { name: "Lotus", emoji: "🪷" },
  { name: "Jasmine", emoji: "🌼" },
  { name: "Calotropis", emoji: "💮" },
  { name: "Marigold", emoji: "🌻" },
  { name: "Lavender", emoji: "🪻" },
  { name: "Acacia", emoji: "🪷" },
  { name: "Amaltas", emoji: "🌼" },
  { name: "Coriandrum", emoji: "🪷" },
];

