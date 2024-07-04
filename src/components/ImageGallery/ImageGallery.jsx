import css from './ImageGallery.module.css';
import ImageCard from "../ImageCard/ImageCard.jsx";

const ImageGallery = ({images, handleOpenModal}) => {
    return (
        <ul className={css.list}>
            {images.map(image => (
                <li onClick={() => handleOpenModal(image.id)} key={image.id}>
                    <ImageCard urls={image.urls} alt={image.alt_description}/>
                </li>
            ))}
        </ul>
    )
}

export default ImageGallery;