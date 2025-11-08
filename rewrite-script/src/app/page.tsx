export default function Home() {
  const scriptSections = [
    {
      time: "0s – 3s",
      title: "Cú móc cảm xúc",
      description:
        "Cận cảnh chiếc Spider-Car phiên bản sưu tầm lấp lánh trong tay Ben Parker; máy rung nhẹ tạo cảm giác bất ổn.",
      lines: [
        {
          speaker: "Lời dẫn",
          text: "Ben Parker vừa dành cả mùa hè rửa xe để mua Spider-Car đời đầu, vậy mà chỉ một cái chớp mắt… nó biến mất.",
        },
        { speaker: "Ben", text: "\"Không thể nào…\"" },
      ],
    },
    {
      time: "3s – 10s",
      title: "Gia tăng áp lực",
      description:
        "Máy quay xoay 360°: một bóng đen giật chiếc xe khỏi tay Ben; tín hiệu cảnh báo đỏ hiện trên HUD Spider-Tech.",
      lines: [
        { speaker: "Ben", text: "\"Ba ơi! Chiếc xe biến mất rồi!\"" },
        {
          speaker: "Peter (qua comlink)",
          text: "\"Ben, hít sâu. Kể lại mọi thứ con thấy trong ba giây trước đó.\"",
        },
        {
          speaker: "Lời dẫn",
          text: "Đồng hồ đếm ngược bật lên: 30 giây để lấy lại món đồ hoặc nó biến mất khỏi thành phố.",
        },
      ],
    },
    {
      time: "10s – 18s",
      title: "Cuộc rượt đuổi",
      description:
        "POV từ kính của Ben lao xuống phố, overlay bản đồ với đường tín hiệu mờ đi.",
      lines: [
        {
          speaker: "Lời dẫn",
          text: "Ben kích hoạt chế độ Spider-Sprint, bám theo tín hiệu định vị tí hon mà cậu lén gắn vào bánh xe.",
        },
        { speaker: "Ben", text: "\"Đường 32, tín hiệu yếu dần!\"" },
        {
          speaker: "Peter",
          text: "\"Nhớ lời ba: con không phải một siêu anh hùng để liều lĩnh.\"",
        },
      ],
    },
    {
      time: "18s – 28s",
      title: "Nguy hiểm lập tức",
      description:
        "Góc flycam từ trên cao: kẻ trộm nhảy khỏi xe máy, Spider-Car lăn đúng vào luồng xe tải lao tới.",
      lines: [
        {
          speaker: "Lời dẫn",
          text: "Khoảnh khắc chuyển sang slow-motion, tiếng phanh rít chói tai.",
        },
        { speaker: "Ben", text: "\"Nếu con không lao ra, nó sẽ nát bét!\"" },
        {
          speaker: "Giọng nữ lạ",
          text: "\"Nhóc! Bước sang trái trong ba… hai…\"",
        },
      ],
    },
    {
      time: "28s – 40s",
      title: "Cú cứu bất ngờ",
      description:
        "Miles Morales rơi xuống từ mái nhà, tia điện tím chớp lên, hai sợi tơ đan chéo kéo Ben ra khỏi quỹ đạo va chạm.",
      lines: [
        { speaker: "Miles", text: "\"Không phải hôm nay đâu Spider-Kid!\"" },
        {
          speaker: "Lời dẫn",
          text: "Miles xoay người, bắn thêm một sợi tơ ôm lấy Spider-Car ngay trước mũi xe tải.",
        },
        { speaker: "Ben", text: "\"Anh Miles?! Anh theo dõi con à?\"" },
        {
          speaker: "Miles",
          text: "\"Nghe nói gia đình Spider vừa mất một món đồ quý. Anh chỉ tình cờ ở đúng nơi.\"",
        },
      ],
    },
    {
      time: "40s – 55s",
      title: "Bài học & CTA",
      description:
        "Ben quay selfie với Miles, nền trời New York chuyển ánh sáng bình minh; logo Spider-Verse mờ hiện cuối khung hình.",
      lines: [
        {
          speaker: "Peter",
          text: "\"Ghi nhớ đi con: đồ chơi có thể thay, mạng người thì không. Cảm ơn Miles nhé.\"",
        },
        {
          speaker: "Ben",
          text: "\"Bài học hôm nay: khi rối trí, hãy nhờ đồng đội. Và khóa xe bằng tơ kép!\"",
        },
        {
          speaker: "Miles",
          text: "\"Nhấn follow nếu muốn thấy Ben tập bắn tơ lần đầu tiên.\"",
        },
      ],
    },
  ];

  const visualBeats = [
    {
      title: "Gam màu & ánh sáng",
      detail:
        "Tông xanh tím neon trên nền đêm New York, bổ sung viền đỏ Spider để nổi bật nhân vật và props.",
    },
    {
      title: "Chuyển cảnh",
      detail:
        "Whip-pan nối POV của Ben với góc drone; slow-motion chỉ xuất hiện đúng thời điểm xe tải lao tới để nhấn cao trào.",
    },
    {
      title: "HUD Spider-Tech",
      detail:
        "Overlay bán trong suốt với radar, đồng hồ đếm ngược và cảnh báo giật nhẹ 3px để tăng sự khẩn cấp.",
    },
  ];

  const soundDesign = [
    {
      label: "Âm nhạc nền",
      content:
        "Giữ nền 'Past Lives' bản slowed + reverb; hạ -3dB khi lời thoại xuất hiện để tránh lấn tiếng.",
    },
    {
      label: "Foley & hiệu ứng",
      content:
        "Thêm tiếng tơ bắn stereo, tiếng bước chân dội tường, screech phanh xe tải, kết thúc bằng âm tơ bật lại nhẹ nhàng.",
    },
    {
      label: "Voice mix",
      content:
        "Ben EQ thiên sáng (boost 4kHz), Miles ấm hơn (boost 200Hz); chèn chút reverb plate cực ngắn cho Peter để gợi cảm giác liên lạc từ xa.",
    },
  ];

  const distributionNotes = [
    "Dựng khung 9:16, safe zone 5% hai bên để chữ không bị cắt trên Shorts/Reels/TikTok.",
    "Caption song ngữ: tiếng Việt phía trên, tiếng Anh phía dưới; sử dụng font đậm 54pt với shadow đen 45%.",
    "Thumbnail: freeze-frame khắc khoải của Ben + Miles xuất hiện từ trên xuống, chèn chữ \"Ai bất ngờ cứu Ben?\" màu vàng.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 md:px-12 lg:px-20">
        <header className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
            Viết lại kịch bản video ngắn
          </span>
          <h1 className="mt-4 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            Spider-Man: Cú cứu bất ngờ khi Ben Parker làm mất Spider-Car
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate-200 md:text-lg">
            Phiên bản kể chuyện mới, tối ưu cho Shorts/Reels với nhịp dồn dập,
            điểm nhấn cảm xúc rõ ràng và kết thúc kêu gọi người xem tương tác.
          </p>
        </header>

        <main className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:gap-12">
          <section className="space-y-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-200">
              Nhịp kể chính
            </h2>
            <div className="space-y-6">
              {scriptSections.map((section) => (
                <article
                  key={section.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_60px_-35px_rgba(56,189,248,0.45)] backdrop-blur"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.35em] text-sky-300">
                    <span>{section.time}</span>
                    <span className="text-white/30">•</span>
                    <span>{section.title}</span>
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-slate-100">
                    {section.description}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {section.lines.map((line, index) => (
                      <li
                        key={`${section.title}-${index}`}
                        className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-3"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-200">
                          {line.speaker}
                        </span>
                        <span className="text-base leading-relaxed text-slate-100">
                          {line.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <aside className="space-y-10">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-200">
                Điểm nhấn hình ảnh
              </h2>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-100">
                {visualBeats.map((beat) => (
                  <li key={beat.title}>
                    <p className="font-semibold text-white">{beat.title}</p>
                    <p className="mt-1 text-slate-200">{beat.detail}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                Âm thanh & nhịp điệu
              </h2>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-slate-100">
                {soundDesign.map((item) => (
                  <li key={item.label}>
                    <p className="font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-slate-200">{item.content}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-fuchsia-200">
                Ghi chú phát hành
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-100">
                {distributionNotes.map((note, index) => (
                  <li key={`note-${index}`} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-fuchsia-300" />
                    <span className="text-slate-200">{note}</span>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </main>

        <footer className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <h2 className="text-lg font-semibold text-white md:text-xl">
            Thông điệp kết
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-200">
            Kết thúc bằng lời mời gọi cộng đồng Spider-Fam chia sẻ lần cuối
            cùng khi họ suýt đánh mất thứ quan trọng. Ghim bình luận của Miles
            với câu hỏi: “Bạn sẽ cứu Ben như thế nào trong 30 giây?” để kích
            hoạt chủ đề bàn luận.
          </p>
        </footer>
      </div>
    </div>
  );
}
