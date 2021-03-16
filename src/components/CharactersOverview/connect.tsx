import { connect, ConnectedProps, RootStateOrAny } from "react-redux";
import { getVisibleCharacters, getIsNotFoundError } from "../../redux/selectors";
import { loadAllCharacters } from "../../redux/actions";

const mapStateToProps = (state: RootStateOrAny) => ({
  characters: getVisibleCharacters(state),
  isLoading: state?.characters?.isLoading,
  isNotFoundError: getIsNotFoundError(state),
});

const mapDispatchToProps = {
    loadAllCharacters,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector;
export type ReduxProps = ConnectedProps<typeof connector>;