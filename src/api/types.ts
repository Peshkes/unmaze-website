export type ArticlePreview = {
    id: number
    link: string
    en_title: string
    ru_title: string
    ru_category: string
    en_category: string
    image: string
}

type ContentType = "header" | "description" | "image" | "paragraph" | "removal";

type Content = {
    type: ContentType;
    ru_text?: string;
    en_text?: string;
    image?: string;
    src?: string
    alt?: string;
    ru_header?: string
    en_header?: string
}

export type ArticleContent = Array<Content>

export type Article = {
    content: ArticleContent
} & ArticlePreview;
