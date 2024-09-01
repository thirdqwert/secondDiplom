import ContentLoader from "react-content-loader"

const ProductImgSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width='100%'
            height='100%'
            viewBox="0 0 570 480"
            backgroundColor="#dedede"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="0" rx="0" ry="0" width="570" height="500" />
        </ContentLoader>
    )
}

export default ProductImgSkeleton
