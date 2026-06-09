import { useState } from "react";

const sections = [
  {
    id: "research",
    label: "RESEARCH",
    number: "01",
    content: {
      title: "Gamification Research",
      subtitle: "Behavioral foundations for a luxury accessory app",
      blocks: [
        {
          heading: "Framework: Octalysis (Yu-kai Chou)",
          body: "The most relevant gamification framework for a design-conscious millennial audience. It identifies 8 core drives behind human motivation. For your app, four drives are especially potent:",
          items: [
            { label: "Epic Meaning & Calling", text: "The user feels they are creating something rare, expressive, and personal. Each transfer is not a transaction — it's authorship." },
            { label: "Ownership & Possession", text: "Collecting colorways, completing palettes, and building a closet of customized pieces activates endowment psychology — people value what they own." },
            { label: "Scarcity & Impatience", text: "Limited-edition seasonal palettes or design drops create urgency without cheapening the brand." },
            { label: "Unpredictability & Curiosity", text: "A 'reveal' moment after transfer — an animation, an unlocked detail — creates a reward loop that drives repeat behavior." }
          ]
        },
        {
          heading: "Behavioral Psychology: The Hook Model (Nir Eyal)",
          body: "Trigger → Action → Variable Reward → Investment. Applied to your flow:",
          items: [
            { label: "Trigger", text: "Push notification: 'A new palette just dropped — curated for this season.' Or internal: the incomplete feeling of a half-built closet." },
            { label: "Action", text: "Opening the studio, selecting a colorway, customizing. Friction must be minimal here." },
            { label: "Variable Reward", text: "The post-transfer moment is your biggest lever. Not every purchase unlocks something — but some do, unexpectedly." },
            { label: "Investment", text: "Each design saved, each palette collected, each transfer completed makes leaving the app feel like a loss. This is the core retention mechanism." }
          ]
        },
        {
          heading: "Luxury Gamification Precedents",
          body: "Brands that have successfully layered reward mechanics onto premium experiences:",
          items: [
            { label: "Nike By You", text: "No points, no bars — but a vivid before/after reveal and the ability to name your creation makes customization feel like authorship, not shopping." },
            { label: "Glossier", text: "Earned access to products via community status. Exclusivity as reward. The 'you're in' moment is the dopamine hit." },
            { label: "Duolingo (inverted lesson)", text: "What NOT to do: gamification that becomes the product. Streaks, leaderboards, and XP counters work for habit formation but feel juvenile against a luxury aesthetic. Borrow the psychology, not the UI." },
            { label: "Apple Fitness+ (Closing Rings)", text: "Subtle, elegant progress visualization. No score, no ranking — just personal completion. The closest analog to what your app should feel like." }
          ]
        },
        {
          heading: "Millennial-Specific Insights",
          body: "Design-conscious millennials (25–35) respond best to gamification that feels curated, not coercive:",
          items: [
            { label: "Identity expression over competition", text: "They want to signal taste, not beat a leaderboard. Gamification should reward self-expression, not performance." },
            { label: "Narrative over mechanics", text: "A story around a palette ('Inspired by Antwerp in October') is more compelling than '+50 XP unlocked.'" },
            { label: "Earned exclusivity", text: "Access to limited palettes via usage milestones feels premium. Paying for randomized loot boxes does not." },
            { label: "Aesthetic coherence above all", text: "Any gamification element that breaks the visual language of the app will feel like a violation. Every reward state must look as good as the base app." }
          ]
        }
      ]
    }
  },
  {
    id: "moments",
    label: "KEY MOMENTS",
    number: "02",
    content: {
      title: "The Four Reward Moments",
      subtitle: "Mapping gamification to your exact user journey",
      blocks: [
        {
          heading: "Moment 1 — Purchasing a New Color or Design",
          body: "This is a financial commitment. The reward must justify it emotionally, not just functionally.",
          items: [
            { label: "Reveal animation", text: "When a new colorway is purchased, it doesn't just appear in the closet. It unfolds — a slow, elegant fade-in or iris-open animation that feels like unwrapping something precious." },
            { label: "Named acquisition", text: "Every color or palette has a name. 'You've added Dusk Mauve to your collection.' Not 'Purchase complete.'" },
            { label: "Collection progress", text: "A quiet indicator: 'You now have 3 of 7 colors in the Wisteria palette.' No bar — just text. Elegant, not gamey." },
            { label: "First-purchase milestone", text: "The very first color purchase triggers a special welcome state — a brief full-screen moment acknowledging Allie has begun her collection." }
          ]
        },
        {
          heading: "Moment 2 — Unlocking a Reward or New Palette",
          body: "This is your highest-impact gamification moment. It must feel like discovery, not a transaction.",
          items: [
            { label: "Milestone-based unlock", text: "After N transfers or N purchases, a new seasonal palette unlocks. No announcement beforehand — the unlock appears as a quiet notification badge on the Studio tab." },
            { label: "Sensory reveal", text: "Tapping into the locked palette shows a blurred, frosted version of the colors. As unlock criteria are met, it clears — like fog lifting." },
            { label: "Narrative framing", text: "Each unlocked palette comes with a 2-line origin story. 'Found on a market table in Porto. Available to you only.' This makes the reward feel authored, not algorithmic." },
            { label: "Bookmark mechanic (Screen 2)", text: "The bookmark icon in the customize view is the investment hook. Saved colorways feel like a wishlist. Completing a saved look could trigger an unlock nudge." }
          ]
        },
        {
          heading: "Moment 3 — Completing a Transfer",
          body: "This is the apex of the user journey — design becomes reality. It deserves the most cinematic treatment.",
          items: [
            { label: "Transfer ceremony", text: "The transition from Screen 4 (TRANSFER button) should not feel like a checkout. Consider a brief full-screen animation: the design 'prints' itself onto a photorealistic render of the accessory." },
            { label: "The Reveal Screen (post-transfer)", text: "A dedicated screen — not Screen 3 as currently designed — that shows the finalized piece with a title, colorway name, and date. Shareable, saveable. This IS the reward." },
            { label: "Closet milestone", text: "The nth transferred piece unlocks something. '5th transfer: you've earned access to the Obsidian Archive palette.' Text only. Understated." },
            { label: "Share as social proof", text: "Screen 3's SHARE button is well-placed. Post-transfer sharing should feel like showing off a creation, not a referral ask. Frame it: 'Share Allie's Studio look.'" }
          ]
        },
        {
          heading: "Moment 4 — Ongoing Retention Loop",
          body: "Between purchases, what keeps users returning? The collection itself.",
          items: [
            { label: "The Closet as portfolio", text: "The CLOSET tab (currently active in all screens) should feel like a curated gallery, not a list. Each visit should feel satisfying even without a purchase." },
            { label: "Seasonal drops", text: "Time-limited palettes expire from availability. Owning them before they disappear creates a collector's mentality. Re-engagement email: 'The Copper Dusk palette disappears in 3 days.'" },
            { label: "Soft streaks", text: "Not day-counting — but a quiet 'You've customized 3 weeks running' acknowledgment in the profile. Optional, dismissible, never punishing if missed." },
            { label: "Design-of-the-week prompt", text: "A weekly editorial suggestion: 'This week's Studio challenge: monochromatic.' Creates a reason to open the app without a purchase intent." }
          ]
        }
      ]
    }
  },
  {
    id: "implementation",
    label: "IMPLEMENTATION",
    number: "03",
    content: {
      title: "Implementation Plan",
      subtitle: "Phased rollout — from foundation to delight",
      blocks: [
        {
          heading: "Phase 1 — Foundation (Weeks 1–4)",
          body: "Build the reward infrastructure before any visible gamification. None of this is user-facing yet.",
          items: [
            { label: "Event tracking", text: "Instrument every action: color purchase, design save, palette viewed, transfer completed, share tapped. You cannot personalize rewards without this data." },
            { label: "User milestone schema", text: "Define the milestone system in the database: total transfers, total purchases, palettes completed, days since last visit, designs saved. These are the triggers for every gamification moment." },
            { label: "Palette metadata", text: "Every color and palette needs a name, origin story (2 lines), season tag, and rarity tier (Standard / Curated / Archive). This content layer is what makes gamification feel editorial rather than mechanical." },
            { label: "Notification infrastructure", text: "Push notification system for: new palette drops, unlock thresholds reached, seasonal expiry warnings. Opt-in, not default." }
          ]
        },
        {
          heading: "Phase 2 — Reveal Moments (Weeks 5–8)",
          body: "Introduce the highest-impact, lowest-friction gamification: the post-action reward states.",
          items: [
            { label: "Purchase reveal animation", text: "Implement the color unwrap animation on the Studio customize screen (Screen 2). The newly selected swatch animates in — a 400ms scale + opacity transition — distinct from standard selection." },
            { label: "Transfer ceremony screen", text: "Design and build the post-transfer reveal screen. Photorealistic accessory mockup, colorway name, date stamp. Share-ready format. This is the single most important implementation in Phase 2." },
            { label: "Collection progress text", text: "Add the quiet palette completion indicator to the color grid (Screen 2, below the swatches). 'X of Y in this palette.' No bar. Track it live." },
            { label: "Named color display", text: "Surface color names in the customize UI. On swatch selection, the name appears briefly below the grid — fades in, fades out after 2 seconds. Ghosted typography, on-brand." }
          ]
        },
        {
          heading: "Phase 3 — Unlock System (Weeks 9–13)",
          body: "Introduce the milestone-based unlock system. This drives both retention and purchase conversion.",
          items: [
            { label: "Locked palette state", text: "Design the frosted/blurred locked palette UI. Tapping it shows: palette name, origin story, and unlock condition ('Transfer 5 designs to unlock'). No purchase possible until earned." },
            { label: "Unlock trigger logic", text: "Backend: when a milestone is hit, flag the palette as unlocked for that user. Push a silent notification. The badge appears on the Studio tab on next app open — not immediately, to feel discovered rather than pushed." },
            { label: "Archive tier palettes", text: "Introduce 2–3 Archive palettes at launch of Phase 3. These are never purchasable — only unlockable. This is the collector's holy grail mechanic. Communicate their existence subtly in the Explore tab." },
            { label: "Milestone history in Profile", text: "The PROFILE tab gets a quiet 'Studio history' section: transfer count, palettes unlocked, first design date. No score. Just a record of authorship. Feels like a portfolio, not a scoreboard." }
          ]
        },
        {
          heading: "Phase 4 — Editorial & Social Layer (Weeks 14–18)",
          body: "The final layer: community, context, and the editorial voice that makes the brand feel alive.",
          items: [
            { label: "Weekly Studio prompts", text: "Content team (or AI-assisted) delivers a weekly design challenge. Surfaced on the Explore tab. Users who complete it get early access to the following week's palette drop." },
            { label: "Seasonal palette calendar", text: "Publish a rolling 8-week palette calendar. Users can 'follow' upcoming palettes — this creates anticipatory return behavior before a drop." },
            { label: "Share card design system", text: "Standardize the post-transfer share card: accessory render + colorway name + a brand watermark subtle enough to feel like a signature. Design-conscious users will share things that look good. Make it look good." },
            { label: "A/B test the unlock conditions", text: "Test: does a transfer-count unlock (behavioral) outperform a purchase-count unlock (transactional) for 90-day retention? Hypothesis: behavioral unlocks build stronger habit loops. Measure and iterate." }
          ]
        }
      ]
    }
  },
  {
    id: "design",
    label: "DESIGN RULES",
    number: "04",
    content: {
      title: "Gamification Design Rules",
      subtitle: "Non-negotiables for staying premium",
      blocks: [
        {
          heading: "The 5 Laws for This App",
          body: "Every gamification decision should be filtered through these principles before shipping:",
          items: [
            { label: "Law 1: Reward states must match base UI quality", text: "If the unlock screen doesn't look as good as the Studio screen, it breaks the illusion. Every reward state is a brand touchpoint. Design it like a hero screen." },
            { label: "Law 2: Never use points, XP, or leaderboards", text: "These mechanics signal mass-market apps. Milestones, collection completion, and named unlocks convey the same psychology without the visual baggage." },
            { label: "Law 3: All copy must be editorial, not gamey", text: "'You've unlocked the Copper Dusk palette' not 'Achievement Unlocked! 🎉'. The voice is the brand. Protect it in every micro-copy moment." },
            { label: "Law 4: Gamification is felt, not seen", text: "The best reward moments in luxury products are emotional, not visual. The post-transfer reveal isn't gamification UI — it's theater. Aim for theater." },
            { label: "Law 5: Never punish absence", text: "No streak breaks. No 'you lost your progress' states. Design-conscious millennials will churn the moment the app feels demanding. Rewards for presence, never penalties for absence." }
          ]
        },
        {
          heading: "Animation Principles",
          body: "For all reward animations, adhere to these constraints to stay on-brand:",
          items: [
            { label: "Duration", text: "300–600ms for micro-interactions. 800–1200ms for reveal moments. Never longer. Restraint signals confidence." },
            { label: "Easing", text: "Ease-out for arrivals (things settling into place). Ease-in-out for transitions. Never linear — it reads as mechanical, not crafted." },
            { label: "Color", text: "Animations should use the existing palette. No rainbow confetti, no gold particle explosions. A subtle shimmer on a newly unlocked swatch is sufficient." },
            { label: "Haptics", text: "On iOS, use UIImpactFeedbackGenerator (medium) for transfer completion and palette unlock. On purchase, a soft (light) impact. Haptics are invisible gamification — the most underused tool in this space." }
          ]
        }
      ]
    }
  }
];

export default function GamificationPlan() {
  const [active, setActive] = useState("research");
  const [expandedBlock, setExpandedBlock] = useState(null);

  const current = sections.find(s => s.id === active);

  return (
    <div style={{
      fontFamily: "'Georgia', 'Times New Roman', serif",
      background: "#0a0a0a",
      minHeight: "100vh",
      color: "#e8e0d4",
      display: "flex",
      flexDirection: "column"
    }}>
      {/* Header */}
      <div style={{
        borderBottom: "1px solid #2a2a2a",
        padding: "32px 40px 24px",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between"
      }}>
        <div>
          <div style={{
            fontFamily: "'Georgia', serif",
            fontSize: "10px",
            letterSpacing: "0.25em",
            color: "#666",
            marginBottom: "8px",
            textTransform: "uppercase"
          }}>
            AC-APP-2026 · STUDIO
          </div>
          <h1 style={{
            fontFamily: "'Georgia', serif",
            fontSize: "22px",
            fontWeight: "400",
            letterSpacing: "0.1em",
            margin: 0,
            color: "#f0e8dc"
          }}>
            GAMIFICATION STRATEGY
          </h1>
        </div>
        <div style={{
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "#444",
          textAlign: "right",
          fontFamily: "'Georgia', serif",
          fontStyle: "italic"
        }}>
          Millennials · Retention + Conversion<br />
          Luxury-first · Subtle UI
        </div>
      </div>

      {/* Nav */}
      <div style={{
        display: "flex",
        borderBottom: "1px solid #1e1e1e",
        padding: "0 40px"
      }}>
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => { setActive(s.id); setExpandedBlock(null); }}
            style={{
              background: "none",
              border: "none",
              borderBottom: active === s.id ? "1px solid #c4a882" : "1px solid transparent",
              color: active === s.id ? "#c4a882" : "#555",
              cursor: "pointer",
              fontFamily: "'Georgia', serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              padding: "16px 0",
              marginRight: "36px",
              transition: "color 0.2s",
              marginBottom: "-1px"
            }}
          >
            {s.number} · {s.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ padding: "40px", flex: 1 }}>
        <div style={{ maxWidth: "720px" }}>
          <div style={{ marginBottom: "32px" }}>
            <h2 style={{
              fontFamily: "'Georgia', serif",
              fontSize: "28px",
              fontWeight: "400",
              letterSpacing: "0.05em",
              margin: "0 0 8px",
              color: "#f0e8dc"
            }}>
              {current.content.title}
            </h2>
            <p style={{
              fontFamily: "'Georgia', serif",
              fontStyle: "italic",
              fontSize: "14px",
              color: "#666",
              margin: 0,
              letterSpacing: "0.02em"
            }}>
              {current.content.subtitle}
            </p>
          </div>

          {current.content.blocks.map((block, bi) => (
            <div key={bi} style={{
              marginBottom: "8px",
              border: "1px solid #1e1e1e",
              borderRadius: "2px",
              overflow: "hidden"
            }}>
              {/* Block header */}
              <button
                onClick={() => setExpandedBlock(expandedBlock === bi ? null : bi)}
                style={{
                  width: "100%",
                  background: expandedBlock === bi ? "#141414" : "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  textAlign: "left",
                  transition: "background 0.2s"
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <span style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "10px",
                    letterSpacing: "0.2em",
                    color: "#c4a882",
                    minWidth: "20px"
                  }}>
                    {String(bi + 1).padStart(2, "0")}
                  </span>
                  <span style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "14px",
                    letterSpacing: "0.04em",
                    color: "#e8e0d4",
                    fontWeight: "400"
                  }}>
                    {block.heading}
                  </span>
                </div>
                <span style={{
                  color: "#444",
                  fontSize: "16px",
                  transform: expandedBlock === bi ? "rotate(45deg)" : "none",
                  transition: "transform 0.2s",
                  lineHeight: 1
                }}>
                  +
                </span>
              </button>

              {/* Expanded content */}
              {expandedBlock === bi && (
                <div style={{
                  padding: "0 24px 24px",
                  borderTop: "1px solid #1e1e1e"
                }}>
                  <p style={{
                    fontFamily: "'Georgia', serif",
                    fontStyle: "italic",
                    fontSize: "13px",
                    color: "#777",
                    margin: "16px 0 20px",
                    lineHeight: "1.7"
                  }}>
                    {block.body}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {block.items.map((item, ii) => (
                      <div key={ii} style={{
                        display: "grid",
                        gridTemplateColumns: "200px 1fr",
                        gap: "0 24px",
                        padding: "14px 0",
                        borderTop: ii > 0 ? "1px solid #181818" : "none"
                      }}>
                        <div style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: "11px",
                          letterSpacing: "0.08em",
                          color: "#c4a882",
                          paddingTop: "1px",
                          lineHeight: "1.5"
                        }}>
                          {item.label}
                        </div>
                        <div style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: "13px",
                          color: "#aaa",
                          lineHeight: "1.75"
                        }}>
                          {item.text}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{
        borderTop: "1px solid #1a1a1a",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}>
        <span style={{
          fontFamily: "'Georgia', serif",
          fontStyle: "italic",
          fontSize: "11px",
          color: "#333"
        }}>
          Gamification should be felt, not seen.
        </span>
        <span style={{
          fontFamily: "'Georgia', serif",
          fontSize: "10px",
          letterSpacing: "0.15em",
          color: "#333"
        }}>
          4 SECTIONS · 18-WEEK PLAN
        </span>
      </div>
    </div>
  );
}
