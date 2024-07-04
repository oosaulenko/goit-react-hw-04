import css from './ImageCard.module.css';

const ImageCard = ({urls, alt}) => {
    return (
        <>
            <img src={urls.small} alt={alt}/>
        </>
    )
}

export default ImageCard;