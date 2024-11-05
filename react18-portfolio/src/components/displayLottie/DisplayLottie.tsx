import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";
import { Component, Suspense } from "react";

export default class DisplayLottie extends Component<{ animationData: any }> {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <Lottie
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}
