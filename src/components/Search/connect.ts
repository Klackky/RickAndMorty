import { connect, ConnectedProps } from "react-redux"
import { makeSearch, createFilterSearch as createFilters } from "../../redux/actions"

const mapDispatchToProps = {
  makeSearch,
  createFilters,
}

const connector = connect(null, mapDispatchToProps)

export default connector
export type ReduxProps = ConnectedProps<typeof connector>