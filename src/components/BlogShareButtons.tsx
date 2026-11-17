"use client";

import { useEffect, useState } from "react";

export default function BlogShareButtons() {
  const [shareUrl, setShareUrl] = useState("");

  // Capture URL on client side only
  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  return (
    <div className="flex items-center space-x-4 mb-12">
      <span className="font-medium">Share:</span>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Twitter
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline"
      >
        LinkedIn
      </a>
    </div>
  );
}
