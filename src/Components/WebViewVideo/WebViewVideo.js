import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";
import { initializeVideoViewer } from "@pdftron/webviewer-video";

export function WebViewVideo() {
  const viewer = useRef(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        selectAnnotationOnCreation: true,
      },
      viewer.current
    ).then(async (instance) => {
      const license =
        "---- Insert commercial license key here after purchase ----";

      const { loadVideo } = await initializeVideoViewer(instance, { license });

      const videoUrl =
        "https://pdftron.s3.amazonaws.com/downloads/pl/video/video.mp4";
      loadVideo(videoUrl);
    });
  }, []);

  return (
    <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
  );
}
