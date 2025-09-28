import React, { useState } from 'react';

interface ImagePreviewProps {
    children: React.ReactNode;
    fullImageSrc: string;
    previewId?: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
    children,
    fullImageSrc,
    previewId = 'preview-container'
}) => {
    const [isVisible, setIsVisible] = useState(false);

    const showPreview = () => {
        setIsVisible(true);
    };

    const hidePreview = () => {
        setIsVisible(false);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            hidePreview();
        }
    };

    return (
        <>
            <div onClick={showPreview} style={{ cursor: 'pointer', width: '100%', height: 'auto' }}>
                {children}
            </div>

            {isVisible && (
                <div
                    id={previewId}
                    style={{
                        visibility: 'visible',
                        opacity: 1,
                        position: 'fixed',
                        zIndex: 150,
                        boxShadow: '1px 2px 2px 2px rgba(0,0,0,0.3)',
                        width: previewId === 'preview-container2' ? '516px' : '1356px',
                        height: 'auto',
                        overflow: 'auto',
                        maxHeight: '80vh',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        borderRadius: '20px',
                        padding: '10px',
                        backgroundColor: 'white',
                        cursor: 'pointer'
                    }}
                    onClick={handleBackdropClick}
                >
                    <img
                        src={fullImageSrc}
                        style={{ width: '100%', height: '100%' }}
                        alt="Preview"
                    />
                </div>
            )}
        </>
    );
};

export default ImagePreview;