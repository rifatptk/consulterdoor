import React from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { JsxElement } from 'typescript';



interface IImageProps {

    original: string;
    thumbnail: string;
    embedUrl: string;
    description: string;

}

interface IProps {
    images: IImageProps[];
}


export const ImageGallery: React.FunctionComponent<IProps> = React.memo(
    ({ images }: IProps): JSX.Element => (
        <div className='image-gallery-wrapper'>
            <ReactImageGallery items={images} additionalClass="wrapperIm" />
        </div>

    )

);
