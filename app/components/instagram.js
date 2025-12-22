export default function ReelInstagram() {
  return (
    <div className="relative w-full max-w-[326px] mx-auto overflow-hidden">
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DRaC8Q5iA86/?utm_source=ig_embed&utm_campaign=loading"
        data-instgrm-version="14"
      >
        {/* Instagram’s skeleton markup (loader) – keep it minimal */}
        <div>
          <a
            href="https://www.instagram.com/reel/DRaC8Q5iA86/?utm_source=ig_embed&utm_campaign=loading"
            target="_blank"
            rel="noopener noreferrer"
          >
            View this post on Instagram
          </a>
        </div>
      </blockquote>

      {/* force the injected iframe to the exact width */}
      <style jsx global>{`
        .instagram-media iframe {
          width: 326px !important;
          max-width: 326px !important;
        }
      `}</style>

      <script async src="//www.instagram.com/embed.js" />
    </div>
  );
}