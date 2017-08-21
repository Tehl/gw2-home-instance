import { connect } from "react-redux";
import Grid from "./Grid";

const mapStateToProps = state => ({
  nodes: state.nodeDb
});

const SwingValueContainer = connect(mapStateToProps)(Grid);

export default SwingValueContainer;
