import { memo } from "react";

const BackgroundWave = memo(() => (
  <div className="spline-background" aria-hidden="true">
    <iframe
      className="spline-canvas"
      src="https://my.spline.design/wavesofsound-Ehqyot4kG5FKAycugbvd6EK9/"
      title="3D Wave Background"
      loading="lazy"
      allow="autoplay; fullscreen"
      allowFullScreen
      tabIndex={-1}
    />
    <div className="spline-overlay" />
  </div>
));

BackgroundWave.displayName = "BackgroundWave";

export default BackgroundWave;
