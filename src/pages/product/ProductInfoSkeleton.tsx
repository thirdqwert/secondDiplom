import ContentLoader from "react-content-loader"

const ProductInfoSkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            width='100%'
            height='100%'
            viewBox="0 0 570 480"
            backgroundColor="#dedede"
            foregroundColor="#ecebeb"
        >
            <rect x="0" y="66" rx="0" ry="0" width="251" height="19" />
            <rect x="0" y="99" rx="0" ry="0" width="100%" height="56" />
            <rect x="0" y="170" rx="0" ry="0" width="141" height="19" />
            <rect x="0" y="211" rx="0" ry="0" width="192" height="19" />
            <rect x="0" y="246" rx="0" ry="0" width="129" height="19" />
            <rect x="0" y="281" rx="0" ry="0" width="104" height="19" />
            <rect x="40%" y="369" rx="0" ry="0" width="100" height="30" />
        </ContentLoader>
    )
}

export default ProductInfoSkeleton
