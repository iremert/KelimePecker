import { Language, WordList } from "@/types";

// Mock languages
export const LANGUAGES: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Spanish", flag: "🇪🇸" },
  { code: "fr", name: "French", flag: "🇫🇷" },
  { code: "de", name: "German", flag: "🇩🇪" },
  { code: "it", name: "Italian", flag: "🇮🇹" },
  { code: "pt", name: "Portuguese", flag: "🇵🇹" },
  { code: "ru", name: "Russian", flag: "🇷🇺" },
  { code: "ja", name: "Japanese", flag: "🇯🇵" },
  { code: "zh", name: "Chinese", flag: "🇨🇳" },
  { code: "ko", name: "Korean", flag: "🇰🇷" },
  { code: "ar", name: "Arabic", flag: "🇸🇦" },
  { code: "hi", name: "Hindi", flag: "🇮🇳" },
  { code: "tr", name: "Turkish", flag: "🇹🇷" },
  { code: "nl", name: "Dutch", flag: "🇳🇱" },
  { code: "sv", name: "Swedish", flag: "🇸🇪" },
  { code: "pl", name: "Polish", flag: "🇵🇱" },
  { code: "vi", name: "Vietnamese", flag: "🇻🇳" },
  { code: "th", name: "Thai", flag: "🇹🇭" },
  { code: "id", name: "Indonesian", flag: "🇮🇩" },
  { code: "he", name: "Hebrew", flag: "🇮🇱" },
];

// Mock categories
export const CATEGORIES = [
  "Business",
  "Travel",
  "Food",
  "Technology",
  "Health",
  "Education",
  "Entertainment",
  "Sports",
  "Science",
  "Arts",
  "Daily Life",
  "Nature",
  "Politics",
  "History",
  "Literature",
  "Music",
  "Fashion",
  "Hobbies",
  "Family",
  "Relationships",
];

// Mock word lists
export const MOCK_WORD_LISTS: WordList[] = [
  {
    id: "list1",
    userId: "user1",
    title: "Basic Spanish Phrases",
    description: "Essential phrases for traveling in Spanish-speaking countries",
    sourceLanguage: "en",
    targetLanguage: "es",
    category: "Travel",
    source: "Duolingo",
    createdAt: "2023-05-10T12:00:00Z",
    updatedAt: "2023-05-15T14:30:00Z",
    totalWords: 20,
    learnedWords: 15,
    words: [
      {
        id: "word1",
        listId: "list1",
        sourceWord: "Hello",
        targetWord: "Hola",
        pronunciation: "OH-lah",
        contextSentence: "Hola, ¿cómo estás?",
        difficulty: "easy",
        lastReviewed: "2023-05-15T10:00:00Z",
        reviewCount: 5,
        mastered: true,
      },
      {
        id: "word2",
        listId: "list1",
        sourceWord: "Thank you",
        targetWord: "Gracias",
        pronunciation: "GRAH-see-ahs",
        contextSentence: "Gracias por tu ayuda.",
        difficulty: "easy",
        lastReviewed: "2023-05-14T11:00:00Z",
        reviewCount: 4,
        mastered: true,
      },
      {
        id: "word3",
        listId: "list1",
        sourceWord: "Excuse me",
        targetWord: "Disculpe",
        pronunciation: "dees-KOOL-peh",
        contextSentence: "Disculpe, ¿dónde está el baño?",
        difficulty: "medium",
        lastReviewed: "2023-05-13T09:30:00Z",
        reviewCount: 3,
        mastered: false,
      },
      {
        id: "word4",
        listId: "list1",
        sourceWord: "Where is",
        targetWord: "Dónde está",
        pronunciation: "DON-deh es-TAH",
        contextSentence: "¿Dónde está el hotel?",
        difficulty: "medium",
        lastReviewed: "2023-05-12T14:20:00Z",
        reviewCount: 2,
        mastered: false,
      },
      {
        id: "word5",
        listId: "list1",
        sourceWord: "How much",
        targetWord: "Cuánto cuesta",
        pronunciation: "KWAN-toh KWES-tah",
        contextSentence: "¿Cuánto cuesta este libro?",
        difficulty: "medium",
        lastReviewed: "2023-05-11T16:45:00Z",
        reviewCount: 2,
        mastered: false,
      },
    ],
  },
  {
    id: "list2",
    userId: "user1",
    title: "French Food Vocabulary",
    description: "Common food terms in French",
    sourceLanguage: "en",
    targetLanguage: "fr",
    category: "Food",
    source: "Cooking Class",
    createdAt: "2023-05-05T09:15:00Z",
    updatedAt: "2023-05-14T11:20:00Z",
    totalWords: 15,
    learnedWords: 10,
    words: [
      {
        id: "word6",
        listId: "list2",
        sourceWord: "Bread",
        targetWord: "Pain",
        pronunciation: "pan",
        contextSentence: "J'aime le pain frais.",
        difficulty: "easy",
        lastReviewed: "2023-05-14T10:30:00Z",
        reviewCount: 4,
        mastered: true,
      },
      {
        id: "word7",
        listId: "list2",
        sourceWord: "Cheese",
        targetWord: "Fromage",
        pronunciation: "fro-MAHJ",
        contextSentence: "Le fromage français est délicieux.",
        difficulty: "easy",
        lastReviewed: "2023-05-13T11:45:00Z",
        reviewCount: 3,
        mastered: true,
      },
      {
        id: "word8",
        listId: "list2",
        sourceWord: "Wine",
        targetWord: "Vin",
        pronunciation: "van",
        contextSentence: "Un verre de vin rouge, s'il vous plaît.",
        difficulty: "easy",
        lastReviewed: "2023-05-12T09:20:00Z",
        reviewCount: 3,
        mastered: true,
      },
      {
        id: "word9",
        listId: "list2",
        sourceWord: "Dessert",
        targetWord: "Dessert",
        pronunciation: "deh-SEHR",
        contextSentence: "Je voudrais un dessert, s'il vous plaît.",
        difficulty: "medium",
        lastReviewed: "2023-05-11T14:10:00Z",
        reviewCount: 2,
        mastered: false,
      },
      {
        id: "word10",
        listId: "list2",
        sourceWord: "Restaurant",
        targetWord: "Restaurant",
        pronunciation: "res-to-RAHN",
        contextSentence: "Allons au restaurant ce soir.",
        difficulty: "easy",
        lastReviewed: "2023-05-10T12:30:00Z",
        reviewCount: 2,
        mastered: true,
      },
    ],
  },
  {
    id: "list3",
    userId: "user1",
    title: "Japanese Greetings",
    description: "Basic greetings and introductions in Japanese",
    sourceLanguage: "en",
    targetLanguage: "ja",
    category: "Daily Life",
    source: "Language Exchange",
    createdAt: "2023-04-28T15:45:00Z",
    updatedAt: "2023-05-13T10:10:00Z",
    totalWords: 10,
    learnedWords: 5,
    words: [
      {
        id: "word11",
        listId: "list3",
        sourceWord: "Hello",
        targetWord: "こんにちは",
        pronunciation: "Kon-ni-chi-wa",
        contextSentence: "こんにちは、お元気ですか？",
        difficulty: "medium",
        lastReviewed: "2023-05-13T09:15:00Z",
        reviewCount: 4,
        mastered: true,
      },
      {
        id: "word12",
        listId: "list3",
        sourceWord: "Good morning",
        targetWord: "おはようございます",
        pronunciation: "O-ha-you go-za-i-ma-su",
        contextSentence: "おはようございます、今日はいい天気ですね。",
        difficulty: "hard",
        lastReviewed: "2023-05-12T08:30:00Z",
        reviewCount: 3,
        mastered: false,
      },
      {
        id: "word13",
        listId: "list3",
        sourceWord: "Good evening",
        targetWord: "こんばんは",
        pronunciation: "Kon-ban-wa",
        contextSentence: "こんばんは、お疲れ様でした。",
        difficulty: "medium",
        lastReviewed: "2023-05-11T19:45:00Z",
        reviewCount: 3,
        mastered: true,
      },
      {
        id: "word14",
        listId: "list3",
        sourceWord: "Thank you",
        targetWord: "ありがとうございます",
        pronunciation: "A-ri-ga-tou go-za-i-ma-su",
        contextSentence: "ありがとうございます、助かりました。",
        difficulty: "hard",
        lastReviewed: "2023-05-10T14:20:00Z",
        reviewCount: 2,
        mastered: false,
      },
      {
        id: "word15",
        listId: "list3",
        sourceWord: "Excuse me",
        targetWord: "すみません",
        pronunciation: "Su-mi-ma-sen",
        contextSentence: "すみません、トイレはどこですか？",
        difficulty: "medium",
        lastReviewed: "2023-05-09T11:30:00Z",
        reviewCount: 2,
        mastered: true,
      },
    ],
  },
];