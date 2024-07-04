import css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onLoadMore}) => {
    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onLoadMore()} type="button">
                Load more
            </button>
        </div>
    )
}

export default LoadMoreBtn;