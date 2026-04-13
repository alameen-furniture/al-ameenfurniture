import { useRef, useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink, CheckCircle } from "lucide-react";

const reviews = [
  { author: "Md. Arman Khan", text: "Fast service and excellent behaviour. Best sofa maker in Kolkata!" },
  { author: "Ayaan Ali", text: "Top-quality furniture with great finishing. Very affordable sofa prices." },
  { author: "Saif Ahmed", text: "Beautiful design and premium quality. Got a custom 3-seater sofa for ₹4,999." },
  { author: "Imran Hussain", text: "Professional and delivered on time. Best furniture manufacturer in Kolkata." },
  { author: "Faizan Khan", text: "Loved the custom sofa work! Perfect for our living room in Salt Lake." },
  { author: "Rizwan Ansari", text: "Ordered a designer bed and wardrobe. Quality is unmatched in Kolkata." },
  { author: "Shahid Parvez", text: "Amazing sofa maker. Custom L-shape sofa delivered within 2 weeks." },
  { author: "Naseem Ahmed", text: "Got complete home interior done. Sofas, beds, wardrobes — all perfect!" },
  { author: "Tarique Anwar", text: "Very affordable custom furniture in Kolkata. Highly recommend Al Ameen." },
  { author: "Danish Raza", text: "Best sofa and bed maker in Kolkata. Quality materials and fair pricing." },
  { author: "Asif Iqbal", text: "Excellent craftsmanship. Our custom wardrobe fits perfectly. Great team!" },
  { author: "Junaid Alam", text: "Ordered a Chesterfield sofa — premium look at an affordable price in Kolkata." },
];

const Stars = () => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
    ))}
  </div>
);

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="flex-shrink-0 w-[80vw] sm:w-[300px] snap-center">
    <div className="h-full bg-card border border-border/30 rounded-2xl p-5 flex flex-col gap-3 hover:-translate-y-1 transition-transform duration-300">
      <Stars />
      <p className="text-foreground text-sm leading-relaxed">"{review.text}"</p>
      <div className="mt-auto pt-3 border-t border-border/20 flex items-center justify-between">
        <p className="text-foreground font-semibold text-sm">– {review.author}</p>
        <div className="flex items-center gap-1">
          <CheckCircle className="w-3 h-3 text-primary" />
          <span className="text-primary text-[10px] font-medium">Verified</span>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const autoSlideRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 300;
    const idx = Math.round(el.scrollLeft / (cardWidth + 16));
    setActiveIndex(Math.min(idx, reviews.length - 1));
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const doAutoSlide = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10;
    if (atEnd) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      const cardWidth = el.querySelector("div")?.offsetWidth ?? 300;
      el.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
    }
  };

  useEffect(() => {
    autoSlideRef.current = setInterval(doAutoSlide, 3500);
    return () => { if (autoSlideRef.current) clearInterval(autoSlideRef.current); };
  }, []);

  const pauseAutoSlide = () => { if (autoSlideRef.current) clearInterval(autoSlideRef.current); };
  const resumeAutoSlide = () => {
    pauseAutoSlide();
    autoSlideRef.current = setInterval(doAutoSlide, 3500);
  };

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.05 }
    );
    const children = el.querySelectorAll(".animate-scroll-fade");
    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: direction === "left" ? -340 : 340, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 animate-scroll-fade">
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-sans">
            Based on Google Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-foreground">
            Rated 5<span className="text-primary">★</span> by 50+ Customers
          </h2>
          <div className="w-16 h-[1px] bg-primary mx-auto mt-6" />
        </div>

        <div
          className="relative animate-scroll-fade"
          onMouseEnter={pauseAutoSlide}
          onMouseLeave={resumeAutoSlide}
          onTouchStart={pauseAutoSlide}
          onTouchEnd={resumeAutoSlide}
        >
          <button
            onClick={() => scroll("left")}
            className={`hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-border bg-card/80 transition-all duration-300 ${
              canScrollLeft ? "opacity-100 hover:border-primary hover:text-primary" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full border border-border bg-card/80 transition-all duration-300 ${
              canScrollRight ? "opacity-100 hover:border-primary hover:text-primary" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  activeIndex === i
                    ? "w-6 h-2.5 bg-primary"
                    : "w-2.5 h-2.5 bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 animate-scroll-fade">
          <a
            href="https://share.google/nnaV7LoYXubIFYTg8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all duration-300"
          >
            View All Reviews on Google
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
