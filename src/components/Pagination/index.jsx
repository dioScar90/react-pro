import PropTypes from 'prop-types'

export const Pagination = ({ isPreviousDisabled, isNextDisabled, onClickPrevious, onClickNext, page }) => {
  return (
    <div className="join">
      <button
        className="join-item btn"
        disabled={isPreviousDisabled}
        onClick={onClickPrevious}
      >
        left
      </button>

      <button className="join-item btn-bg-primary text-white">
        Página {page}
      </button>

      <button
        className="join-item btn"
        disabled={isNextDisabled}
        onClick={onClickNext}
      >
        right
      </button>
    </div>
  )
}

Pagination.propTypes = {
  isPreviousDisabled: PropTypes.bool,
  onClickPrevious: PropTypes.func,
  page: PropTypes.number,
  isNextDisabled: PropTypes.bool,
  onClickNext: PropTypes.func,
}