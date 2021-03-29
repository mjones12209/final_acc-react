import { useContext } from "react";
import { AdvancedMoviesContext } from "../../../contexts/AdvancedMoviesContext";
import moment from 'moment';

const AdvancedModalControls = () => {
  const { advanced, setAdvanced } = useContext(AdvancedMoviesContext);
  const showHideClassName = advanced.showAdvanced
    ? "modal d-block"
    : "modal d-none";

  const setAdvancedStateReleaseYear = (target) => {
    setAdvanced({
      ...advanced,
      releaseDateYearValue: target,
      releaseDateType: null,
      isAdvancedSearch: true,
      afterIsChecked: false,
      beforeIsChecked: false,
      advancedSearchQueryAppend: "&primary_release_year=" + target,
    });
  };

  const setAdvancedStateBefore = (checked) => {
    setAdvanced({
      ...advanced,
      beforeIsChecked: checked,
      releaseDateYear: null,
      afterIsChecked: false,
      isAdvancedSearch: true,
      releaseDateType: "primary_release_date.lte",
    });
  };

  const setAdvancedStateAfter = (checked) => {
    setAdvanced({
      ...advanced,
      afterIsChecked: checked,
      releaseDateYear: null,
      beforeIsChecked: false,
      isAdvancedSearch: true,
      releaseDateType: "primary_release_date.gte",
    });
  }

  const setAdvancedStateCalendar = (event) => {
    setAdvanced({
      ...advanced,
      releaseDateYear: null,
      isAdvancedSearch: true,
      advancedSearchQueryAppend: `&${advanced.releaseDateType}=${moment(
        event
      ).format("YYYY-MM-DD")}`,
    });
  }

  const clearAdvancedState = () => {
      setAdvanced({
        beforeIsChecked: false,
        afterIsChecked: false,
        advancedSearchType: null,
        isAdvancedSearch: false,
        releaseDateYearValue: "",
        releaseDateType: "primary_release_date.lte",
        searchQuery: "",
        searchValue: "",
        advancedSearchQueryAppend: "",
      });
  }

  return {
    setAdvancedStateReleaseYear,
    setAdvancedStateBefore,
    setAdvancedStateAfter,
    clearAdvancedState,
    setAdvancedStateCalendar,
    showHideClassName
  };
};

export default AdvancedModalControls;
