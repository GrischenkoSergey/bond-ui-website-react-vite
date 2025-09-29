import React, { useState, useEffect } from 'react';

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
    const [isPreviewEnabled, setIsPreviewEnabled] = useState(true);

    useEffect(() => {
        const checkScreenSize = () => {
            // Enable preview on desktop screens (width >= 1151px)
            // Disable only on mobile/tablet (width < 1151px)
            const isLargeScreen = window.innerWidth >= 1151;
            setIsPreviewEnabled(isLargeScreen);

            // Close preview if screen becomes too small
            if (!isLargeScreen && isVisible) {
                setIsVisible(false);
            }
        };

        // Check on mount
        checkScreenSize();

        // Check on resize and orientation change
        window.addEventListener('resize', checkScreenSize);
        window.addEventListener('orientationchange', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            window.removeEventListener('orientationchange', checkScreenSize);
        };
    }, [isVisible]);

    const showPreview = () => {
        // Only show preview if screen is large enough
        if (isPreviewEnabled) {
            setIsVisible(true);
        }
    };

    const hidePreview = () => {
        setIsVisible(false);
    };

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close when clicking anywhere in the preview container
        // This includes both the backdrop and the image itself
        hidePreview();
    };

    const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        // Prevent event bubbling and close the preview
        e.stopPropagation();
        hidePreview();
    };

    return (
        <>
            <div onClick={showPreview} style={{ cursor: 'pointer', width: '100%', height: 'auto' }}>
                {children}
            </div>

            {isVisible && isPreviewEnabled && (
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
                        style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                        alt="Preview"
                        onClick={handleImageClick}
                    />
                </div>
            )}
        </>
    );
};

export default ImagePreview;