export default function ReelTiktok() {
  return (
    <div className="relative w-full max-w-[326px] mx-auto overflow-hidden">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@arabicwithm/video/7570386301594258710"
        data-video-id="7570386301594258710"
        style={{ maxWidth: 325 }}
      >
        <section>
          <a
            target="_blank"
            title="@arabicwithm"
            href="https://www.tiktok.com/@arabicwithm?refer=embed"
          >
            @arabicwithm
          </a>
          يا أيتها البلهاء
          <a
            title="اسلام"
            target="_blank"
            href="https://www.tiktok.com/tag/%D8%A7%D8%B3%D9%84%D8%A7%D9%85?refer=embed"
          >
            #اسلام
          </a>
          …
        </section>
      </blockquote>

      <style jsx global>{`
        .tiktok-embed iframe {
          width: 325px !important;
          max-width: 325px !important;
        }
      `}</style>

      <script async src="https://www.tiktok.com/embed.js" />
    </div>
  );
}