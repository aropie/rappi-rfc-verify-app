import React, { useState, useEffect } from "react";
import { Transition } from "semantic-ui-react";

export const Message = ({ visible, type, children, onClose }) => {
  const [_visible, setVisible] = useState();
  useEffect(() => {
    setVisible(visible);
  }, [visible]);
  return (
    <Transition visible={_visible} animation="scale" duration={500}>
      <div className={type}>
        <p
          className="closeButton"
          onClick={() => {
            setVisible(false);
            if (onClose) {
              onClose();
            }
          }}
        >
          x
        </p>
        {children}
      </div>
    </Transition>
  );
};
