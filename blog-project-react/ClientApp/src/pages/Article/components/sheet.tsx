import React from 'react'
import SheetHeader from './header'
import SheetContent from './content'
import {
    ArticleType
} from '../types'

function Sheet(props: Props) {

    return (
        <section className="sheet-wrap">
            <SheetHeader clickGoBack={props.clickGoBack} title={props.articleData.title} />
            <SheetContent {...props} />
        </section>
    )
}

type Props = {
    articleData: ArticleType
    clickGoBack: any
}

export default Sheet