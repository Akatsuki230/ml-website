import {Alert, Button} from "react-bootstrap";
import {useEffect, useRef, useState} from "react";
import {ArticleExtended} from "@/types/articles";

export default function LatestArticleDisplay() {
    const [hasLoaded, setHasLoaded] = useState(false)
    const [article, setArticle] = useState(null as ArticleExtended | null)

    const hasRan = useRef(false);

    useEffect(() => {
        if (hasRan.current) return;
        hasRan.current = true;

        fetch('/api/article/latest1').then(x => {
            if (x.status !== 200) return;
            x.json().then((article: ArticleExtended) => {
                setArticle(article);
                setHasLoaded(true);
            })
        })
    }, []);

    return (
        <>
            {hasLoaded && article !== null && (
                <Alert variant="primary">
                    <h4>{article.title}</h4>
                    <p>{article.paragraphs[0]}...</p>
                    <Button as="a" href={`/article/${article.id}`}>
                        Read more
                    </Button>
                </Alert>
            )}
        </>
    )

}
