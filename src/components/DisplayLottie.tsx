import Lottie from "lottie-react";
import Loading from "../containers/Loading";
import { Component, Suspense } from "react";

// a Lottie import CJS/ESM interop workaround miatt Vite 8 alatt:
const LottieComponent = (Lottie as unknown as { default?: typeof Lottie }).default ?? Lottie;

export default class DisplayLottie extends Component<{ animationData: Record<string, unknown> }> {
  render() {
    const animationData = this.props.animationData;
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    };

    return (
      <Suspense fallback={<Loading />}>
        <LottieComponent
          animationData={defaultOptions.animationData}
          loop={defaultOptions.loop}
        />
      </Suspense>
    );
  }
}