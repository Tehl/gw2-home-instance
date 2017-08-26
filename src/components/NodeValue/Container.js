import { connect } from "react-redux";
import Grid from "./Grid";

const mapStateToProps = state => ({
  nodes: state.nodeDb
});

const NodeValueContainer = connect(mapStateToProps)(Grid);

export default NodeValueContainer;
