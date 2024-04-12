import React, { Component, MouseEvent } from "react";
import Image from "next/image";

interface HoverImgProps {
  displayText: string;
  img: string;
}

interface HoverImgState {
  isHovered: boolean;
  position: { x: number; y: number };
}

export class HoverImg extends Component<HoverImgProps, HoverImgState> {
  constructor(props: HoverImgProps) {
    super(props);

    this.state = {
      isHovered: false,
      position: { x: 0, y: 0 },
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    this.setState({ position: { x: e.clientX, y: e.clientY } });
  };

  render() {
    const { isHovered, position } = this.state;
    const { displayText, img } = this.props;

    return (
      <div onMouseMove={this.handleMouseMove}>
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {displayText}
        </div>
        {isHovered && (
          <div
            style={{
              position: "absolute",
              top: position.y + 15,
              left: position.x + 15,
            }}
          >
            <Image
              src={img}
              alt="static"
              className="cursor-pointer"
              width={100} // Set a default width
              height={100} // Set a default height
              style={{
                width: "30vw",
                height: "auto",
              }}
            />
          </div>
        )}
      </div>
    );
  }
}
