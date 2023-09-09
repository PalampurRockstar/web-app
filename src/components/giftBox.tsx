import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { fetchImage } from "utils/urlFormatter";
interface GiftBoxProp {
  open: boolean;
  ifOpen?: () => void;
}
const GiftBox = ({ open, ifOpen }: GiftBoxProp) => {
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setIsOpen(true);
        setTimeout(() => {
          ifOpen && ifOpen();
        }, 1500);
      }, 500);
    }
  }, [open]);
  const [isOpen, setIsOpen] = useState(false);

  const animationProps = useSpring({
    transform: isOpen ? "translateY(-100px)" : "translateY(100px)",
    config: { tension: 150, friction: 10 },
  });

  return (
    <div className="gift-box">
      <animated.div
        className={`gift-box-lid ${isOpen ? "open" : ""}`}
        style={animationProps}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="gift-box-wrap">
          <div className="gift-box-content">
            {isOpen && (
              <img
                src={fetchImage(["icons", "gift.svg"])}
                className="gift-image"
                width="40px"
                height="40px"
              />
            )}
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default GiftBox;
