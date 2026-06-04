import React, { FC, useState, useEffect } from "react";
import Head from "next/head";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";
import { fetchEntries } from "@utils/contentfulPosts";
import { ProjectsContent } from "@components/sections/ProjectsContent";
import { AboutContent } from "@components/sections/AboutContent";
import { BlogContent } from "@components/sections/BlogContent";
import { PostContent } from "@components/sections/PostContent";

type Section = "projects" | "blog" | "about";
// [left, center, right]
type Arrangement = [Section, Section, Section];

const LABELS: Record<Section, string> = {
  projects: "Projects",
  blog: "Blog",
  about: "About",
};

const ALL_SECTIONS: Section[] = ["projects", "blog", "about"];

type SlideDir = "from-left" | "from-right" | "init";

// Stack-mode link button — same underline-fill hover as the site's Link component
const StackBtn = styled.button<{ $color: string }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(p) => p.$color};
  font-family: inherit;
  font-size: 3em;
  line-height: 1.2;
  padding: 2px 4px;
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 60%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    background-color: rgba(144, 205, 244, 0.5);
  }
  &:hover:after {
    top: 0%;
  }
`;

// Edge nav button — horizontal text, centered in its side column.
const EdgeBtn = styled.button<{ $color: string }>`
  background: none;
  border: none;
  cursor: pointer;
  color: ${(p) => p.$color};
  font-family: inherit;
  font-size: 1.5em;
  padding: 8px 12px;
  opacity: 0.45;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  white-space: nowrap;

  &:after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 60%;
    left: -0.1em;
    right: -0.1em;
    bottom: 0;
    transition: top 200ms cubic-bezier(0, 0.8, 0.13, 1);
    background-color: rgba(144, 205, 244, 0.5);
  }
  &:hover {
    opacity: 1;
  }
  &:hover:after {
    top: 0%;
  }
`;

export const Home: FC<{ posts: any[] }> = ({ posts }) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [arrangement, setArrangement] = useState<Arrangement | null>(null);
  const [slideDir, setSlideDir] = useState<SlideDir>("init");
  const [contentKey, setContentKey] = useState(0);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 640px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (!mounted) return null;

  const bgColor = resolvedTheme === "light" ? "white" : "#152427";
  const textColor = resolvedTheme === "light" ? "black" : "white";

  const activate = (_section: Section, dir: SlideDir, newArr: Arrangement) => {
    setSlideDir(dir);
    setArrangement(newArr);
    setSelectedPost(null);
    setContentKey((k) => k + 1);
  };

  const handleSelectPost = (post: any) => {
    setSelectedPost(post);
    setSlideDir("init");
    setContentKey((k) => k + 1);
  };

  const handleBackToBlog = () => {
    setSelectedPost(null);
    setSlideDir("init");
    setContentKey((k) => k + 1);
  };

  const handleStackClick = (section: Section) => {
    const others = ALL_SECTIONS.filter((s) => s !== section);
    activate(section, "init", [others[0], section, others[1]]);
  };

  // [A, B, C] → click left (A) → [C, A, B]
  const handleLeftClick = () => {
    if (!arrangement) return;
    const [left, center, right] = arrangement;
    activate(left, "from-left", [right, left, center]);
  };

  // [A, B, C] → click right (C) → [B, C, A]
  const handleRightClick = () => {
    if (!arrangement) return;
    const [left, center, right] = arrangement;
    activate(right, "from-right", [center, right, left]);
  };

  const renderContent = (section: Section) => {
    switch (section) {
      case "projects":
        return <ProjectsContent />;
      case "blog":
        return selectedPost ? (
          <PostContent post={selectedPost} onBack={handleBackToBlog} />
        ) : (
          <BlogContent posts={posts} onSelectPost={handleSelectPost} />
        );
      case "about":
        return <AboutContent />;
    }
  };

  const animClass =
    slideDir === "from-left"
      ? "content-from-left"
      : slideDir === "from-right"
      ? "content-from-right"
      : "content-init";

  return (
    <>
      <Head>
        <title>Home - Connor Pawar</title>
        <link
          rel="icon"
          href="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/274/keyboard_2328-fe0f.png"
        />
        <meta
          name="description"
          content="Welcome to my personal site! Reach out to me and checkout some webdev projects."
        />
      </Head>

      <style>{`
        /* ── content panel ── */
        @keyframes fromLeft {
          from { opacity: 0; transform: translateX(-48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fromRight {
          from { opacity: 0; transform: translateX(48px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .content-from-left  { animation: fromLeft  0.35s cubic-bezier(0.22, 0.61, 0.36, 1); }
        .content-from-right { animation: fromRight 0.35s cubic-bezier(0.22, 0.61, 0.36, 1); }
        .content-init       { animation: fadeUp    0.4s  cubic-bezier(0.22, 0.61, 0.36, 1); }

        /* ── edge column entrance (plays once when spread mode mounts) ── */
        @keyframes edgeSlideInLeft {
          from { transform: translateX(calc(50vw - 75px)); opacity: 0; }
          to   { transform: translateX(0);                 opacity: 1; }
        }
        @keyframes edgeSlideInRight {
          from { transform: translateX(calc(-50vw + 75px)); opacity: 0; }
          to   { transform: translateX(0);                  opacity: 1; }
        }
        .edge-col-left  { animation: edgeSlideInLeft  0.45s cubic-bezier(0.22, 0.61, 0.36, 1) both; }
        .edge-col-right { animation: edgeSlideInRight 0.45s cubic-bezier(0.22, 0.61, 0.36, 1) both; }

        /* ── label swap on rotation ── */
        /* left label always comes from the right (previous center or right slot) */
        /* right label always comes from the left (previous center or left slot)  */
        @keyframes labelFromRight {
          from { opacity: 0; transform: translateX(20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes labelFromLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .label-from-right { animation: labelFromRight 0.28s cubic-bezier(0.22, 0.61, 0.36, 1); }
        .label-from-left  { animation: labelFromLeft  0.28s cubic-bezier(0.22, 0.61, 0.36, 1); }
      `}</style>

      <main
        style={{
          background: bgColor,
          color: textColor,
          height: "calc(100vh - 100px)",
          overflow: "hidden",
        }}
      >
        {!arrangement ? (
          /* ── Stack mode ── */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "calc(100vh - 100px)",
              gap: "8px",
            }}
          >
            {ALL_SECTIONS.map((section) => (
              <StackBtn
                key={section}
                $color={textColor}
                onClick={() => handleStackClick(section)}
              >
                {LABELS[section]}
              </StackBtn>
            ))}
          </div>
        ) : /* ── Spread mode ── */
        isMobile ? (
          /* Mobile: top nav bar + full-width content */
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "calc(100vh - 100px)",
            }}
          >
            {/* Top nav bar */}
            <div
              style={{
                display: "flex",
                borderBottom: `1px solid ${
                  resolvedTheme === "light"
                    ? "rgba(0,0,0,0.12)"
                    : "rgba(255,255,255,0.12)"
                }`,
                background: bgColor,
                flexShrink: 0,
              }}
            >
              <EdgeBtn
                $color={textColor}
                onClick={handleLeftClick}
                style={{ flex: 1, textAlign: "center" }}
                aria-label={`Switch to ${LABELS[arrangement[0]]}`}
              >
                <span
                  key={`left-${contentKey}`}
                  className={slideDir !== "init" ? "label-from-right" : ""}
                >
                  {LABELS[arrangement[0]]}
                </span>
              </EdgeBtn>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "inherit",
                  fontSize: "1.5em",
                  fontWeight: 700,
                  padding: "8px",
                  color: textColor,
                }}
              >
                {LABELS[arrangement[1]]}
              </div>
              <EdgeBtn
                $color={textColor}
                onClick={handleRightClick}
                style={{ flex: 1, textAlign: "center" }}
                aria-label={`Switch to ${LABELS[arrangement[2]]}`}
              >
                <span
                  key={`right-${contentKey}`}
                  className={slideDir !== "init" ? "label-from-left" : ""}
                >
                  {LABELS[arrangement[2]]}
                </span>
              </EdgeBtn>
            </div>

            {/* Scrollable content */}
            <div
              key={contentKey}
              className={animClass}
              style={{ flex: 1, overflowY: "auto" }}
            >
              <div
                style={{
                  minHeight: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px 20px",
                }}
              >
                <div style={{ maxWidth: "900px", width: "100%" }}>
                  {renderContent(arrangement[1])}
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop: side columns */
          <div
            style={{
              display: "flex",
              height: "calc(100vh - 100px)",
              overflow: "hidden",
            }}
          >
            {/* Left column — slides in from center on mount */}
            <div
              className="edge-col-left"
              style={{
                width: "150px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EdgeBtn
                $color={textColor}
                onClick={handleLeftClick}
                aria-label={`Switch to ${LABELS[arrangement[0]]}`}
              >
                <span
                  key={`left-${contentKey}`}
                  className={slideDir !== "init" ? "label-from-right" : ""}
                >
                  {LABELS[arrangement[0]]}
                </span>
              </EdgeBtn>
            </div>

            {/* Center content — scrollable; inner wrapper centers content both axes */}
            <div
              key={contentKey}
              className={animClass}
              style={{ flex: 1, overflowY: "auto" }}
            >
              <div
                style={{
                  minHeight: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "40px 32px",
                }}
              >
                <div style={{ maxWidth: "900px", width: "100%" }}>
                  {renderContent(arrangement[1])}
                </div>
              </div>
            </div>

            {/* Right column — slides in from center on mount */}
            <div
              className="edge-col-right"
              style={{
                width: "150px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EdgeBtn
                $color={textColor}
                onClick={handleRightClick}
                aria-label={`Switch to ${LABELS[arrangement[2]]}`}
              >
                <span
                  key={`right-${contentKey}`}
                  className={slideDir !== "init" ? "label-from-left" : ""}
                >
                  {LABELS[arrangement[2]]}
                </span>
              </EdgeBtn>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export async function getStaticProps() {
  try {
    const res = await fetchEntries();
    const posts = res.map((p: any) => p.fields);
    return { props: { posts } };
  } catch {
    return { props: { posts: [] } };
  }
}

export default Home;
