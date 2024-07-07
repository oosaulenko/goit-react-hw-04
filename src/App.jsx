import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn.jsx";
import Loader from "./components/Loader/Loader.jsx";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import fetchList from "./api/unsplash.js";
import ImageGallery from "./components/ImageGallery/ImageGallery.jsx";
import toast, {Toaster} from "react-hot-toast";

function App() {
    const [query, setQuery] = useState("");
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');
    const [modalImage, setModalImage] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (!query) return;
        setLoader(true);

        fetchList(query, page)
            .then(({data}) => {
                if (data.results.length === 0) {
                    setErrorMessage(`No results were found for ${query}`);
                    return;
                }

                setImages((prevImages) => [...prevImages, ...data.results]);
                setTotalPages(data.total_pages);
            })
            .catch((error) => setErrorMessage(error.message))
            .finally(() => setLoader(false));

    }, [query, page]);

    useEffect(() => {
        if (!errorMessage) return;
        toast.error(errorMessage);
    }, [errorMessage]);

    const handleSearch = (query) => {
        setErrorMessage(false);
        setImages([]);
        setPage(1);
        setQuery(query);
    }

    const onLoadMore = () => setPage((prevPage) => prevPage + 1);
    const visibleLoadMoreBtn = () => images.length !== 0 && page < totalPages;

    const handleOpenModal = (currentId) => {
        const [currentImg] = images.filter(({id}) => id === currentId);
        setModalImage(currentImg);
        setOpenModal(!openModal);
    };

    return (
        <>
            <SearchBar handleSearch={handleSearch}/>
            <ImageGallery images={images} handleOpenModal={handleOpenModal}/>

            {loader && <Loader/>}
            {visibleLoadMoreBtn() && <LoadMoreBtn onLoadMore={onLoadMore}/>}
            {openModal && <ImageModal handleModal={setOpenModal} img={modalImage}/>}
            <Toaster position="top-right" reverseOrder={false} />
        </>
    )
}

export default App
