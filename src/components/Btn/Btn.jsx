import { string, node } from "prop-types";
import cx from "classnames";
import "./btn.scss";

const propTypes = { classes: string, Children: node };

const Btn = (props) => {
  const { classes, children, icon, ...otherProps } = props;
  const classNames = cx("btn", classes);
  return (
    <button className={classNames} {...otherProps}>
      {children}
    </button>
  );
};

Btn.propTypes = propTypes;
export default Btn;
