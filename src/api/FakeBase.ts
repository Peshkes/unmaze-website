export class FakeBase {
    static getFakeArticlesPreview = () => {
        return Promise.resolve([
            {
                id: 1,
                ru_title: "У моего ребенка дислексия. Как ему помочь?",
                en_title: "My child's dyslexia. How can I help?",
                image: "https://picsum.photos/400/600"
            },
            {
                id: 2,
                ru_title: "Травля в школе: причины и решения",
                en_title: "School treats: reasons and solutions",
                image: "https://picsum.photos/400/600"
            },
            {
                id: 3,
                ru_title: "“Я не справляюсь”: методы самоподдержки",
                en_title: "“I can't do it”: support methods",
                image: "https://picsum.photos/400/600"
            },
            {
                id: 4,
                ru_title: "Раскрываем таланты ребенка",
                en_title: "Unlocking child's talents",
                image: "https://picsum.photos/400/600"
            }
        ]);
    }
}
