import { FC } from 'react'
import ContentLoader from 'react-content-loader'

const ProductsGridSkeleton:FC = () => {
    return (
        <>
            <ContentLoader
                speed={2}
                width='100%'
                height='100%'
                viewBox="0 0 400 460"
                backgroundColor="#dedede"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="0" rx="0" ry="0" width="100%" height="270" />
                <rect x="55" y="280" rx="0" ry="0" width="300" height="19" />
                <rect x="0" y="310" rx="0" ry="0" width="100%" height="40" />
                <rect x="0" y="360" rx="0" ry="0" width="151" height="19" />
                <rect x="0" y="390" rx="0" ry="0" width="123" height="19" />
                <rect x="110" y="420" rx="0" ry="0" width="200" height="30" />
            </ContentLoader>
        </>
    )
}

export default ProductsGridSkeleton
