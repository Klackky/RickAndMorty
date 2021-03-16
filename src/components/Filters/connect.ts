import { connect, ConnectedProps } from "react-redux";
import { createFilterSearch as createFilters } from "../../redux/actions";

const mapDispatchToProps = {
  createFilters,
};

const connector = connect(null, mapDispatchToProps);

export default connector;
export type ReduxProps = ConnectedProps<typeof connector>;