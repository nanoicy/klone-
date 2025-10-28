import { memo } from "react";

const BackgroundWave = memo(() => (
  <div className="spline-background" aria-hidden="true">
    <iframe
      src="https://my.spline.design/wavesofsound-Ehqyot4kG5FKAycugbvd6EK9/"
      title="3D Wave Background"
      className="spline-canvas"
      loading="lazy"
      allow="autoplay"
    />
    <div className="spline-overlay" />
  </div>
));

BackgroundWave.displayName = "BackgroundWave";

export default BackgroundWave;
