import React from "react"
import ContentLoader from "react-content-loader"

const LoadingBlock = (props) => (
    <div className="pizza-block">
        <ContentLoader
            speed={2}
            width={280}
            height={470}
            viewBox="0 0 280 470"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="138" cy="138" r="138" />
            <rect x="0" y="325" rx="6" ry="6" width="280" height="84" />
            <rect x="0" y="289" rx="6" ry="6" width="280" height="24" />
            <rect x="0" y="430" rx="5" ry="5" width="89" height="27" />
            <rect x="128" y="422" rx="28" ry="28" width="151" height="44" />
        </ContentLoader>
    </div>
)

export default LoadingBlock
