import React from 'react';

function DetailsThumb(props) {
    const { images, tab, myRef } = props;
    return (
        <div className="thumb" ref={myRef}>
            {images?.map((img) => (
                <img
                    src={img}
                    alt=""
                    key={img}
                    onClick={() => tab(images.indexOf(img))}
                />
            ))}
        </div>
    );
}

export default DetailsThumb;
