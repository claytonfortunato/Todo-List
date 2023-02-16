import { useDispatch } from "react-redux";
import { VISIBILITY_FILTER } from "../constant";
import { setFilter } from "../redux/actions";

export const VisibilityFilter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <div>
          {Object.keys(VISIBILITY_FILTER).map((filterkey) => {
            const currentFilter = VISIBILITY_FILTER[filterkey];
            return (
              <p
                key={`visibility-filter-${currentFilter}`}
                onClick={() => dispatch(setFilter(currentFilter))}
              >
                {currentFilter}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
