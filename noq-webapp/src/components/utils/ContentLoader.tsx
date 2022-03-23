import ContentLoader from 'react-content-loader';

export const MyLoader = () => (
    <ContentLoader viewBox="0 0 400 150">
      {/* Only SVG shapes */}    
      <rect x="15" y="0" rx="30" ry="30" width="365" height="120" />
    </ContentLoader>
)