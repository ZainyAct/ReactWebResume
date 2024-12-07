import AnimatedCursor from "react-animated-cursor";

const AnimCursor: React.FC = () => {
    return (
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    );
  };
  
  export default AnimCursor;